import { useState } from "react";
import axiosInstance from "../apis/axiosInstance";
import type { IResponse } from "../types/Iresponse";
import axios from "axios";


export const useParseOcr = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<IResponse | null>(null);
    const [parsedData, setParsedData] = useState<IResponse["data"] | null>(null);

    const parseAdhar = async (frontImage: File | null, backImage: File | null) => {
        setLoading(true);
        setError(null);
        try {
          const formData = new FormData();
          // Check if both images are provided
          if (!frontImage || !backImage) {
            setError("Please upload both images.");
            return;
          }
          // Append files to form data
          if (frontImage) formData.append("frontImage", frontImage);
          if (backImage) formData.append("backImage", backImage);

          const res = await axiosInstance.post("/api/parse-adhar", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(res.data);
          const data = await res.data;
          setResponse(data);
          setParsedData(data.data);
        } catch (err) {
          let errorMessage = "An unknown error occurred";

          // Check if it's an AxiosError and contains response data
          if (axios.isAxiosError(err) && err.response?.data?.error) {
            errorMessage = err.response.data.error;
          } else if (err instanceof Error) {
            errorMessage = err.message;
          }

          console.error("Error parsing Aadhaar:", errorMessage);
          setError(errorMessage);
        } finally {
          setLoading(false);
        }
    };

    return {
        loading,
        error,
        response,
        parsedData,
        parseAdhar,
    };
    
}
