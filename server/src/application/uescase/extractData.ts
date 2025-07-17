import { IAdhaar } from "../../domain/interfaces/IAdhaar";


export const extractFrontPage = (text: string,data: IAdhaar) => {
    if (!text) {
        throw new Error("Front page text is empty");
    }

    const adhaarNumberMatch = text.match(/\b\d{4} \d{4} \d{4}\b/);
    if (adhaarNumberMatch) {
        data.UID = adhaarNumberMatch[0].trim();
    }
    
    const lines = text 
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

   let name = null;
   let dob = null;

for (let i = 0; i < lines.length; i++) {
  const dobMatch = lines[i].match(/DOB\s*[:\-]?\s*(\d{2}\/\d{2}\/\d{4})/i);
  if (dobMatch) {
    dob = dobMatch[1];

    if (i > 0) {
      const rawName = lines[i - 1];

      // Clean unwanted characters and split to remove junk after the name
      name = rawName
        .replace(/[^a-zA-Z\s]/g, "") // Remove symbols
        .replace(/\s{2,}/g, " ") // Replace double spaces
        .trim(); // Trim leading/trailing spaces
    }

    break;
  }
}


   if (name) data.Name = name;
    if (dob) data.DOB = dob;
    let ageBand: string | undefined;

    if (dob) {
      const dobDate = new Date(dob.split("/").reverse().join("-")); // Converts "dd/mm/yyyy" to "yyyy-mm-dd"
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();

      // Optional: adjust if birthday hasn't occurred yet this year
      const hasHadBirthday =
        today.getMonth() > dobDate.getMonth() ||
        (today.getMonth() === dobDate.getMonth() &&
          today.getDate() >= dobDate.getDate());
      const correctedAge = hasHadBirthday ? age : age - 1;

      // Map age to band
      if (correctedAge >= 0 && correctedAge <= 10) ageBand = "0-10";
      else if (correctedAge <= 20) ageBand = "11-20";
      else if (correctedAge <= 30) ageBand = "21-30";
      else if (correctedAge <= 40) ageBand = "31-40";
      else if (correctedAge <= 50) ageBand = "41-50";
      else if (correctedAge <= 60) ageBand = "51-60";
      else if (correctedAge <= 70) ageBand = "61-70";
      else if (correctedAge <= 80) ageBand = "71-80";
      else ageBand = "81+";
    }

    data.age_band = ageBand;

  const genderMatch = text.match(/\b(Male|Female|Transgender)\b/i);
  if (genderMatch) {
    data.Gender = genderMatch[1];
  }
    
  return data;
}



export const extractBackPage = (text: string, data: IAdhaar) => {
  if (!text) throw new Error("Back page text is empty");

  // Check UID match
  const adhaarNumberMatch = text.match(/\b\d{4} \d{4} \d{4}\b/);
  data.isUidSame = adhaarNumberMatch?.[0].trim() === data.UID;

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  let possibleAddresses: { address: string; pincode: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const pinMatch = lines[i].match(/\b\d{6}\b/);
    if (pinMatch) {
      const pincode = pinMatch[0];
      const start = Math.max(0, i - 4);
      const address = lines.slice(start, i + 1).join(", ");

      possibleAddresses.push({ address, pincode });
    }
  }

  // Pick the last found address block (most complete)
  if (possibleAddresses.length > 0) {
    const last = possibleAddresses[possibleAddresses.length - 1];
    data.Address = cleanAddress(last.address);
    data.Pincode = last.pincode;
  }

  return data;
};


function cleanAddress(rawAddress: string): string {
  // Normalize spaces and commas
  let cleaned = rawAddress
    .replace(/\s{2,}/g, " ")
    .replace(/,{2,}/g, ",")
    .replace(/ ,/g, ",")
    .trim();

  //  Extract from C/o or S/o or D/o or W/o onward
  const relationMatch = cleaned.match(/(?:[CSDW]\s*\/\s*o)[^,]*/i);
  if (relationMatch) {
    const index = cleaned.indexOf(relationMatch[0]);
    cleaned = cleaned.slice(index).trimStart();
  }

  // Keep only up to first 6-digit pincode if it exists
  const pinMatch = cleaned.match(/\b\d{6}\b/);
  if (pinMatch) {
    const pinIndex = cleaned.indexOf(pinMatch[0]);
    cleaned = cleaned.slice(0, pinIndex + 6);
  }

  // Title case formatting
  cleaned = cleaned
    .split(",")
    .map((part) =>
      part
        .trim()
        .split(" ")
        .map((w) => w[0]?.toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
    )
    .join(", ");

  return cleaned;
}

