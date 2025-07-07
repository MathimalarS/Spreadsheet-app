import React, { useState } from 'react';
import { Badge } from './Badge';
import { SpreadsheetRow } from '../type';
import { tabItems as initialTabItems } from '../data/mockdata';

interface SpreadsheetGridProps {
  data: SpreadsheetRow[];
}

export const SpreadsheetGrid: React.FC<SpreadsheetGridProps> = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [tabs, setTabs] = useState(initialTabItems);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const formatValue = (value: number) => {
    return value.toLocaleString('en-IN') + ' ₹';
  };

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setSelectedCell({ row: rowIndex, col: colIndex });
    setSelectedRow(rowIndex);
  };

  const handleRowClick = (rowIndex: number) => {
    setSelectedRow(rowIndex);
  };

  const handleTabClick = (tabId: string) => {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === tabId,
      }))
    );
    setFilterStatus(tabId);
  };

  const filteredData =
    filterStatus === 'all'
      ? data
      : data.filter((row) => {
          const status = row.status.toLowerCase();
          return (
            (filterStatus === 'pending' && status === 'in-process') ||
            (filterStatus === 'reviewed' && status === 'complete') ||
            (filterStatus === 'arrived' && status === 'need to start')
          );
        });

  const totalRows = 22;
  const emptyRows = totalRows - filteredData.length;

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="min-w-[900px] w-full">
            <thead>
              <tr className="spreadsheet-header">
                <th className="w-10 px-2 py-1 text-center border-r border-gray-200 text-xs">#</th>
                <th className="w-64 px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">
                  <div className="flex items-center justify-center space-x-1">
                    📋<span>Job Request</span>
                  </div>
                </th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">📅 Submitted</th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">⚪ Status</th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">👤 Submitter</th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">🔗 URL</th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">👥 Assigned</th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">Priority</th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">Due Date</th>
                <th className="w-[120px] px-2 py-1 text-center border-r border-gray-200 text-xs font-medium text-gray-600">Est. Value</th>
                <th className="w-10 px-1 py-1 text-center text-green-600 text-lg font-bold">+</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 ${selectedRow === rowIndex ? 'bg-blue-50' : ''}`}
                  onClick={() => handleRowClick(rowIndex)}
                >
                  <td className="spreadsheet-cell text-xs text-center bg-gray-50 text-gray-500">{row.id}</td>
                  <td
                    className={`spreadsheet-cell text-xs max-w-xs cursor-pointer ${
                      selectedCell?.row === rowIndex && selectedCell?.col === 0 ? 'bg-blue-100' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCellClick(rowIndex, 0);
                    }}
                  >
                    <div className="truncate" title={row.jobRequest}>{row.jobRequest}</div>
                  </td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 1 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 1); }}>{row.submitted}</td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 2 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 2); }}><Badge type="status" value={row.status} /></td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 3 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 3); }}>{row.submitter}</td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 4 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 4); }}><div className="truncate text-blue-600" title={row.url}>{row.url}</div></td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 5 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 5); }}>{row.assigned}</td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 6 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 6); }}><Badge type="priority" value={row.priority} /></td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 7 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 7); }}>{row.dueDate}</td>
                  <td className={`spreadsheet-cell text-xs cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 8 ? 'bg-blue-100' : ''}`} onClick={(e) => { e.stopPropagation(); handleCellClick(rowIndex, 8); }}>{formatValue(row.estValue)}</td>
                  <td className="spreadsheet-cell text-xs text-center"></td>
                </tr>
              ))}
              {/* Empty rows */}
              {Array.from({ length: emptyRows }).map((_, idx) => (
                <tr key={`empty-${idx}`} className="border-b border-gray-100">
                  <td className="spreadsheet-cell text-xs text-center bg-gray-50 text-gray-500">{filteredData.length + idx + 1}</td>
                  {Array.from({ length: 9 }).map((_, colIdx) => (
                    <td key={colIdx} className="spreadsheet-cell text-xs"></td>
                  ))}
                  <td className="spreadsheet-cell text-xs text-center">
                    {idx === emptyRows - 1 ? (
                      <button className="w-6 h-6 rounded bg-green-100 text-green-700 flex items-center justify-center mx-auto text-lg font-bold hover:bg-green-200">+</button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="fixed left-0 right-0 bottom-0 flex items-center border-t border-gray-200 bg-gray-50 px-2 py-1 z-10 justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-1 rounded-t-md text-xs font-medium mr-1 border border-b-0 border-gray-200 focus:outline-none transition-all duration-150
              ${tab.isActive ? 'bg-white text-green-700 border-green-400' : 'bg-gray-100 text-gray-500 hover:bg-white'}`}
          >
            {tab.label}
          </button>
        ))}
        <button className="ml-1 px-3 py-1 rounded-t-md text-green-600 text-lg font-bold border border-b-0 border-gray-200 bg-gray-100 hover:bg-white focus:outline-none">+</button>
      </div>
    </>
  );
};
