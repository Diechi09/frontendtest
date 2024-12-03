import React from 'react';
import { ArrowRight, Database, Upload, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Data Management
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Manage your database efficiently with our intuitive tools
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Link
          to="/database"
          className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center">
            <div className="text-blue-600 mr-4">
              <Database className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">View Database</h3>
          </div>
          <p className="mt-2 text-gray-500">Browse and manage your data entries</p>
          <ArrowRight className="h-5 w-5 text-blue-600 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        <Link
          to="/upload"
          className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center">
            <div className="text-blue-600 mr-4">
              <Upload className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Upload Data</h3>
          </div>
          <p className="mt-2 text-gray-500">Add new entries to your database</p>
          <ArrowRight className="h-5 w-5 text-blue-600 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        <Link
          to="/query"
          className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center">
            <div className="text-blue-600 mr-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Query Data</h3>
          </div>
          <p className="mt-2 text-gray-500">Search and filter your database</p>
          <ArrowRight className="h-5 w-5 text-blue-600 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;