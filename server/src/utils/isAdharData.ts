
const frontPageKeywords = [
    "Government of India",
    "Aadhaar",
    "Male",
    "Female",
    "Gender"
]


export const isFrontPage = (text: string): boolean => {
  const lowerCaseText = text.toLowerCase();
  return frontPageKeywords.some(keyword => lowerCaseText.includes(keyword.toLowerCase()));
};



const backPageKeywords = [
  "Resident of",
  "Address",
  "State",
  "District",
  "Pin Code",
  "City",
  "S/O",
  "D/O",
  "help @uldal.gov.in www.uldal.gov.in",
];

export const isBackPage = (text: string): boolean => {
  const lowerCaseText = text.toLowerCase();
  return backPageKeywords.some(keyword => lowerCaseText.includes(keyword.toLowerCase()));
};
