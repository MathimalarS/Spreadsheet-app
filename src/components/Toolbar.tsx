import React from 'react';
import { Button } from '../components/button';
import { 
  EyeOff, 
  ArrowUpDown, 
  Filter, 
  Grid3X3, 
  Download, 
  Upload, 
  Share2, 
  Plus,
  ChevronRight
} from 'lucide-react';

export const Toolbar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Tool bar</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" icon={<EyeOff className="w-4 h-4" />}>
              Hide fields
            </Button>
            
            <Button variant="ghost" size="sm" icon={<ArrowUpDown className="w-4 h-4" />}>
              Sort
            </Button>
            
            <Button variant="ghost" size="sm" icon={<Filter className="w-4 h-4" />}>
              Filter
            </Button>
            
            <Button variant="ghost" size="sm" icon={<Grid3X3 className="w-4 h-4" />}>
              Cell view
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" icon={<Download className="w-4 h-4" />} className="border border-gray-200 bg-white">
            Import
          </Button>
          
          <Button variant="ghost" size="sm" icon={<Upload className="w-4 h-4" />} className="border border-gray-200 bg-white">
            Export
          </Button>
          
          <Button variant="ghost" size="sm" icon={<Share2 className="w-4 h-4" />} className="border border-gray-200 bg-white">
            Share
          </Button>
          
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            New Action
          </Button>
        </div>
      </div>
    </div>
  );
};