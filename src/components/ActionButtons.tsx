import React from 'react';
import { Button } from './button';

export const ActionButtons: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between min-w-max px-6 py-2 mb-2">
        {/* Left group */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline"
            size="sm"
            className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 flex items-center"
          >
            <span className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center mr-2 text-xs font-medium text-gray-600">Q3</span>
            Financial Overview
          </Button>
        </div>

        {/* Right group */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline"
            size="sm"
            className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200 flex items-center"
          >
            <span className="w-6 h-6 rounded flex items-center justify-center mr-2 text-xs font-medium text-green-600">ABC</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200"
          >
            Answer a question
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200"
          >
            Extract
          </Button>
        </div>
      </div>
    </div>
  );
};
