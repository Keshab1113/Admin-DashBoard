import React from 'react';
import { Link } from 'react-router-dom';
import somethingLost from '/something-lost.png';

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={somethingLost} alt="404 Not Found" className="w-64 h-auto mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page not found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NoPage;
