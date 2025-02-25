import React from 'react';

interface ErrorPageProps {
  error?: Error;
}

function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h1>
        {error && (
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {error.message}
          </p>
        )}
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default ErrorPage; 