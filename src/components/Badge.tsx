import React from 'react';
import { clsx } from 'clsx';
import { StatusType, PriorityType } from '../type';

interface BadgeProps {
  type: 'status' | 'priority';
  value: StatusType | PriorityType;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, value, className }) => {
  const getStatusClasses = (status: StatusType) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800';
      case 'In-process':
        return 'bg-yellow-100 text-yellow-800';
      case 'Need to start':
        return 'bg-blue-100 text-blue-800';
      case 'Blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getPriorityClasses = (priority: PriorityType) => {
    switch (priority) {
      case 'High':
        return 'text-red-800';
      case 'Medium':
        return 'text-yellow-800';
      case 'Low':
        return ' text-blue-800';
      default:
        return ' text-gray-800';
    }
  };
  
  const badgeClasses = type === 'status' 
    ? getStatusClasses(value as StatusType)
    : getPriorityClasses(value as PriorityType);
  
  return (
    <span className={clsx(
      'status-badge',
      badgeClasses,
      className
    )}>
      {value}
    </span>
  );
};