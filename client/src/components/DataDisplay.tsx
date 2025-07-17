import type { IResponse } from "../types/Iresponse";

type DisplayProps = {
  adharData: IResponse["data"] | null | undefined;
  loading?: boolean;
  error?: string | null;
};

const DataDisplay = ({
  adharData,
  loading = false,
  error = null,
}: DisplayProps) => {
  return (
    <div className="data-display w-full max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Aadhaar Details
      </h1>

      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <svg
            className="animate-spin h-10 w-10 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="mt-3 text-gray-500 font-medium">
            Fetching Aadhaar data...
          </p>
        </div>
      )}

      {error && (
        <div className="p-4 mb-4 bg-red-50 text-red-700 rounded-lg flex items-center">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.732 6.732a1 1 0 011.414 0L10 7.586l.854-.854a1 1 0 111.414 1.414L11.414 9l.854.854a1 1 0 11-1.414 1.414L10 10.414l-.854.854a1 1 0 01-1.414-1.414L8.586 9l-.854-.854a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && !adharData && (
        <div className="p-4 mb-4 bg-yellow-50 text-yellow-700 rounded-lg flex items-center">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p>No Aadhaar data available. Please upload valid images.</p>
        </div>
      )}

      {adharData && !loading && !error && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="adharNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhaar Number
              </label>
              <input
                id="adharNumber"
                type="text"
                value={adharData.UID}
                readOnly
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Aadhaar Number"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name on Aadhaar
              </label>
              <input
                id="name"
                type="text"
                value={adharData.Name}
                readOnly
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Name on Aadhaar"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="text"
                value={adharData.DOB}
                readOnly
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Date of Birth"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <input
                id="gender"
                type="text"
                value={adharData.Gender}
                readOnly
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Gender"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              value={adharData.Address}
              readOnly
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Address"
            />
          </div>

          <div>
            <label
              htmlFor="pincode"
              className="block text-sm font-medium text-gray-700"
            >
              Pincode
            </label>
            <input
              id="pincode"
              type="text"
              value={adharData.Pincode}
              readOnly
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Pincode"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
