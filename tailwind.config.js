/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
        'blue-50': '#eff6ff',
        'blue-100': '#dbeafe',
        'blue-500': '#3b82f6',
        'blue-600': '#2563eb',
        'green-50': '#f0fdf4',
        'green-100': '#dcfce7',
        'green-500': '#22c55e',
        'green-600': '#16a34a',
        'yellow-50': '#fefce8',
        'yellow-100': '#fef3c7',
        'yellow-500': '#eab308',
        'yellow-600': '#ca8a04',
        'red-50': '#fef2f2',
        'red-100': '#fee2e2',
        'red-500': '#ef4444',
        'red-600': '#dc2626',
        'orange-50': '#fff7ed',
        'orange-100': '#ffedd5',
        'orange-500': '#f97316',
        'orange-600': '#ea580c',
        'purple-50': '#faf5ff',
        'purple-100': '#f3e8ff',
        'purple-500': '#a855f7',
        'purple-600': '#9333ea',
        
      }
    },
  },
  plugins: [],
}