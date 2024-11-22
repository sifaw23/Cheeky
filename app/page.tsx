// app/page.tsx
import React from 'react';
import { MoreVertical, Trash2 } from 'lucide-react';
import Link from 'next/link';

const CardCorner = () => (
  <svg 
    className="absolute top-0 right-0 z-10" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <path
      d="M0 0H24V20C24 8.954305 15.045695 0 4 0H0Z"
      fill="white"
    />
  </svg>
);

export default function DashboardPage() {
  const sections = [
    {
      id: 'open',
      title: 'Open',
      count: 5,
      color: 'border-l-[3px] border-l-blue-400',
      subtext: '(approve to earn)'
    },
    {
      id: 'pending',
      title: 'Pending',
      count: 3,
      color: 'border-l-[3px] border-l-yellow-400'
    },
    {
      id: 'rejected',
      title: 'Rejected',
      count: 2,
      color: 'border-l-[3px] border-l-red-400'
    },
    {
      id: 'accepted',
      title: 'Accepted',
      count: 6,
      color: 'border-l-[3px] border-l-green-400'
    }
  ];

  const tasks = [
    {
      title: 'Task t4t - 13 November 2024',
      points: 450,
      duration: '4h',
      type: 'Task',
      timestamp: '13:42'
    },
    {
      title: 'Recording - 23 September 2024',
      points: 1450,
      duration: '2d',
      type: 'Passive',
      timestamp: '3:45:42'
    },
    {
      title: 'Recording - 12 November 2024',
      points: 1450,
      duration: '2d',
      type: 'Passive',
      timestamp: '3:45:42'
    },
    {
      title: 'Recording - 12 November 2024',
      points: 1450,
      duration: '2d',
      type: 'Passive',
      timestamp: '3:45:42'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="flex items-center space-x-2 text-gray-600">
              <span className="w-5 h-5 bg-gray-50 rounded flex items-center justify-center">□</span>
              <span>My Board</span>
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-600">My Board</span>
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <MoreVertical className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-6">
        <h1 className="text-2xl font-semibold mb-6">My Board</h1>

        {/* Tabs */}
        <div className="bg-gray-100 inline-flex rounded-lg p-1 mb-8">
          {['My Board', 'Library', 'To Do Only', 'Archive'].map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                index === 0 
                  ? 'bg-white shadow-sm font-medium' 
                  : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Status Sections */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className={`relative bg-white rounded-xl shadow-sm pl-4 ${section.color}`}
            >
              <CardCorner />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{section.title}</span>
                    <span className="text-gray-500">{section.count}</span>
                  </div>
                  {section.subtext && (
                    <div className="text-xs text-gray-500 mt-0.5">{section.subtext}</div>
                  )}
                </div>
                <button className="p-1.5 hover:bg-gray-50 rounded-lg">
                  <MoreVertical className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Task Grid */}
        <div className="grid grid-cols-2 gap-6">
          {tasks.map((task, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <CardCorner />
              <div className="relative">
                <img 
                  src={`/api/placeholder/400/300`} 
                  alt={task.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button className="p-1.5 bg-white/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white">
                    <Trash2 className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 bg-white/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white">
                    <MoreVertical className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 text-sm text-white font-medium">
                  {task.timestamp}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium">{task.title}</h3>
                <div className="mt-2 flex items-center space-x-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>□</span>
                    <span>{task.points} pts</span>
                  </div>
                  <span>{task.duration}</span>
                  <span className="px-2 py-0.5 bg-gray-100 rounded">{task.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}