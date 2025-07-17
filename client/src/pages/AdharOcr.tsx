import { useState } from "react";
import UploadCard from "../components/UploadCard";
import DataDisplay from "../components/DataDisplay";
import ResponseDisplay from "../components/ResponseDisplay";
import { useParseOcr } from "../hooks/parseAdhar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdharOcr = () => {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);

  const uploadFile = (file: File | null, side: "front" | "back") => {
    if (side === "front") {
      setFrontImage(file);
    } else {
      setBackImage(file);
    }
  };

  const { loading, error, response, parsedData, parseAdhar } = useParseOcr();
  if (error) {
    toast.error(error, { position: "top-right", autoClose: 3000 });
  }

  const handleParseAdhar = async () => {
    if (!frontImage || !backImage) {
      toast.warning("Please upload both front and back images.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    await parseAdhar(frontImage, backImage);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <header className="bg-indigo-600 text-white py-6">
        <h1 className="text-3xl font-bold text-center">Aadhaar OCR System</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Upload Section */}
          <div className="space-y-6">
            <UploadCard
              btnLabel="Upload Aadhaar Front"
              side="front"
              uploadFile={uploadFile}
            />
            <UploadCard
              btnLabel="Upload Aadhaar Back"
              side="back"
              uploadFile={uploadFile}
            />
            <div className="flex justify-center mt-6">
              <button
                onClick={handleParseAdhar}
                disabled={loading}
                className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {loading ? "Parsing..." : "Parse Aadhaar"}
              </button>
            </div>
          </div>

          {/* Right Side: Data and Response Display */}
          <div className="space-y-6">
            <DataDisplay
              adharData={parsedData}
              loading={loading}
              error={error}
            />
            <ResponseDisplay
              response={response}
              error={error}
              loading={loading}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdharOcr;
