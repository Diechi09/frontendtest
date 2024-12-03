import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Database, Upload, Search, Users } from 'lucide-react';
import { NavItems } from './NavItems';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {NavItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium
                  ${isActive
                    ? 'text-blue-600 hover:text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <Icon className="w-5 h-5 mr-1.5" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;