import type { IResponse } from "../types/Iresponse";

type Props = {
  response: IResponse | null;
  error: string | null;
  loading: boolean;
};

const ResponseDisplay = ({ response, error, loading }: Props) => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">API Response</h1>

      {loading && (
        <div className="flex flex-col items-center justify-center py-6">
          <svg
            className="animate-spin h-8 w-8 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            />
            <p className="mt-2 text-gray-500">Processing response...</p>
        </div>
      )}

      {error && (
        <div className="p-3 mb-4 bg-red-50 text-red-700 rounded-lg flex items-center">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.732 6.732a1 1 0 011.414 0L10 7.586l.854-.854a1 1 0 111.414 1.414L11.414 9l.854.854a1 1 0 11-1.414 1.414L10 10.414l-.854.854a1 1 0 01-1.414-1.414L8.586 9l-.854-.854a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <p>Error: {error}</p>
        </div>
      )}

      {response && !loading && !error && (
        <div className="mt-4">
          <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 overflow-auto max-h-96">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      {!response && !loading && !error && (
        <div className="p-3">
          <p className="text-gray-500">No response data available.</p>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;