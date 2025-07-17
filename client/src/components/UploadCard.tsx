import { Icon } from "@iconify/react";
import { useState } from "react";

type Props = {
  btnLabel: string;
  side: "front" | "back";
  uploadFile: (file: File|null, side: "front" | "back") => void;
};

const UploadCard = ({ btnLabel, side, uploadFile }: Props) => {
  const [file, setFile] = useState<string | null>(null);
  
  // Function to handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(URL.createObjectURL(file));
      uploadFile(file, side); // Call the uploadFile function passed as prop
    }
  };

  const handleRemove = () => {
    setFile(null);
    uploadFile(null, side); // Reset the file in the parent component
  };


  return (
    <>
      {/* Title */}
      <h2 className="text-xl font-semibold mt-5 text-gray-800 text-center mb-2">
        {btnLabel}
      </h2>

      {/* Upload Card */}
      <div className="upload-card bg-gray-100 w-full max-w-lg mx-auto rounded-lg shadow-lg p-6 flex flex-col items-center gap-4">
        {file ? (
          <>
            <img
              src={file}
              alt="Uploaded"
              className="max-h-64 w-full object-contain rounded-lg mt-2"
            />
            <p
              className="btn px-3 py-1 bg-gray-800 cursor-pointer text-white"
              onClick={handleRemove}
            >
              Remove image
            </p>
          </>
        ) : (
          <label className="cursor-pointer flex flex-col items-center text-blue-600 hover:text-blue-800 transition duration-200">
            <Icon icon="ep:upload-filled" width={64} height={64} />
            <span className="mt-2 text-sm font-medium">
              Click here to upload {side} Image
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        )}
      </div>
    </>
  );
};

export default UploadCard;
