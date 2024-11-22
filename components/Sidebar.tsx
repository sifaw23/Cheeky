import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  BarChart2, 
  ListTodo, 
  Bell, 
  PlaySquare, 
  Settings,
  MonitorPlay,
  Headphones,
  BookOpen
} from 'lucide-react';

const Sidebar = () => {
  const navigationItems = [
    { icon: BarChart2, text: 'Analytics', href: '/analytics' },
    { icon: ListTodo, text: 'Task List', href: '/tasks' },
    { icon: LayoutDashboard, text: 'My Board', href: '/', active: true },
    { icon: Bell, text: 'Notifications', href: '/notifications' },
    { icon: PlaySquare, text: 'Watch Tutorials', href: '/tutorials' },
    { icon: Settings, text: 'Settings', href: '/settings' },
  ];

  const bottomItems = [
    { icon: Headphones, text: 'Support', href: '/support' },
    { icon: BookOpen, text: 'Documentation', href: '/docs' },
  ];

  return (
    <aside className="w-64 bg-white h-screen flex flex-col fixed left-0 top-0 px-4">
      {/* Logo */}
      <div className="py-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-6 h-6 bg-black transform rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <span className="text-xl font-semibold">TraceAI</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
        {navigationItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            href={item.href}
            active={item.active}
          />
        ))}

        {/* Passive Mode Button */}
        <div className="mt-8 mb-8">
          <button className="w-full bg-white border border-gray-100 shadow-sm rounded-2xl p-4 text-left hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <MonitorPlay className="h-6 w-6 text-cyan-500" />
              <div>
                <div className="text-sm font-medium text-cyan-500">Start Passive Mode</div>
                <div className="text-xs text-gray-500">Earn while doing anything</div>
                <div className="text-xs text-gray-500">on your computer</div>
              </div>
            </div>
          </button>
        </div>

        {/* Bottom Links */}
        <div className="space-y-1">
          {bottomItems.map((item) => (
            <SidebarItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              href={item.href}
            />
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="py-4">
        <Link href="/profile" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
          <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden">
            <img 
              src="/api/placeholder/40/40" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-medium">Amrit Singh</div>
            <div className="text-xs text-gray-500">Silver</div>
          </div>
          <div className="ml-auto">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 4L13 10L7 16" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>
    </aside>
  );
};

const SidebarItem = ({ 
  icon: Icon, 
  text, 
  href, 
  active = false 
}: { 
  icon: any; 
  text: string; 
  href: string; 
  active?: boolean;
}) => (
  <Link
    href={href}
    className={`
      flex items-center space-x-3 px-3 py-2.5 rounded-lg
      ${active 
        ? 'bg-cyan-50 text-cyan-500' 
        : 'text-gray-700 hover:bg-gray-50'
      }
    `}
  >
    <Icon className="h-5 w-5" strokeWidth={1.5} />
    <span className="text-sm font-medium">{text}</span>
  </Link>
);

export default Sidebar;