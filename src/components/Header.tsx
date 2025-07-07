import React from 'react';
import { Search, Bell, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-sm">Workspace</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm">Folder 2</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm font-medium text-gray-900">Spreadsheet 3</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{ width: '200px' }}
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">John Doe</div>
                <div className="text-gray-500">john.doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};