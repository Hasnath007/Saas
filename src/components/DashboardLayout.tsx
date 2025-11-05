import React from 'react';
import { Search, LayoutDashboard, Users, Phone, Calendar, UserCog, CreditCard, BarChart3, Settings, Shield, MessageSquare, LogOut } from 'lucide-react';
import { Input } from './ui/input';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function DashboardLayout({ children, currentPage, onNavigate }: DashboardLayoutProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads', icon: Users },
    { id: 'calls', label: 'Call Logs', icon: Phone },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'agents', label: 'Agent Management', icon: UserCog },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'admin', label: 'Admin Console', icon: Shield },
    { id: 'support', label: 'Support', icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen w-full bg-[#F8FAFB]">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#2B2B2B] flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-[#374151]">
          <span className="text-white font-bold text-xl">nexdoor.ai</span>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 mb-2 transition-colors ${
                  isActive 
                    ? 'bg-[#1E7A7A] text-white' 
                    : 'text-gray-300 hover:bg-[#374151] hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#374151]">
          <button
            onClick={() => onNavigate('login')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#374151] hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Search Bar */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4">
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search leads, calls, appointments..."
              className="w-full pl-10 bg-[#F8FAFB] border-gray-300"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Account: Demo User</span>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
