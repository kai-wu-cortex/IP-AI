import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function Login() {
  const { signInWithGoogle, signInWithMockUser, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleMockLogin = async (slaLevel: 'free' | 'pro' | 'enterprise') => {
    try {
      await signInWithMockUser(slaLevel);
      navigate('/');
    } catch (error) {
      console.error("Mock login failed", error);
    }
  };

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <LogIn className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            登录您的账户
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            使用您的 Google 账户登录以访问所有功能
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={handleLogin}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-lg shadow-indigo-500/30"
          >
            使用 Google 登录
          </button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">开发测试账户</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => handleMockLogin('free')} className="py-2 text-xs bg-gray-100 hover:bg-gray-200 rounded-lg">免费版</button>
            <button onClick={() => handleMockLogin('pro')} className="py-2 text-xs bg-blue-100 hover:bg-blue-200 rounded-lg">专业版</button>
            <button onClick={() => handleMockLogin('enterprise')} className="py-2 text-xs bg-purple-100 hover:bg-purple-200 rounded-lg">企业版</button>
          </div>
        </div>
      </div>
    </div>
  );
}
