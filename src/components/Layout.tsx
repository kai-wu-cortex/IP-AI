import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PenTool, 
  Share2, 
  Box, 
  CreditCard,
  User,
  LogOut,
  Search,
  Bell,
  Menu,
  X
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAuth } from '../contexts/AuthContext';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { path: '/', label: '概览', icon: LayoutDashboard },
  { path: '/create', label: '内容创作', icon: PenTool },
  { path: '/publish', label: '全平台发布', icon: Share2 },
  { path: '/modeling', label: '3D 建模', icon: Box },
  { path: '/pricing', label: '定价', icon: CreditCard },
];

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, userProfile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const getSlaBadgeColor = (level?: string) => {
    switch (level) {
      case 'enterprise': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'pro': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getSlaLabel = (level?: string) => {
    switch (level) {
      case 'enterprise': return '企业版';
      case 'pro': return '专业版';
      default: return '免费版';
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-500/30 flex-shrink-0">
              IP
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 whitespace-nowrap hidden md:block">
              IP-AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={cn(
                      "w-4 h-4",
                      isActive ? "text-indigo-600" : "text-gray-400"
                    )} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Search Bar - Hidden on small screens */}
          <div className="hidden lg:block relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索..." 
              className="w-full pl-10 pr-4 py-1.5 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="h-6 w-px bg-gray-200 hidden md:block"></div>

            {/* User Profile Dropdown Trigger */}
            <div className="flex items-center gap-3 pl-2">
               <div className="hidden md:flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900 max-w-[100px] truncate">
                      {user?.displayName || 'User'}
                    </span>
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded border font-medium",
                      getSlaBadgeColor(userProfile?.slaLevel)
                    )}>
                      {getSlaLabel(userProfile?.slaLevel)}
                    </span>
                  </div>
               </div>
               
               <div className="relative group">
                 <button className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {user?.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-indigo-600" />
                    )}
                 </button>
                 
                 {/* Dropdown Menu */}
                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                    <div className="px-4 py-3 border-b border-gray-100 md:hidden">
                      <p className="text-sm font-medium text-gray-900 truncate">{user?.displayName}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      <div className="mt-2">
                        <span className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded border font-medium",
                          getSlaBadgeColor(userProfile?.slaLevel)
                        )}>
                          {getSlaLabel(userProfile?.slaLevel)}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      退出登录
                    </button>
                 </div>
               </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2 shadow-lg absolute top-16 left-0 right-0 z-20">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content Wrapper */}
      <main className="flex-1 overflow-y-auto bg-gray-50/50 p-4 md:p-8 scroll-smooth">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
