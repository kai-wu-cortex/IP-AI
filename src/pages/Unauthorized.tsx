import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-xl">
        <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <ShieldAlert className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          访问受限
        </h2>
        <p className="text-gray-600 mb-8">
          您的账户权限不足以访问此页面。请升级您的订阅计划以解锁更多功能。
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/pricing')}
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30"
          >
            查看升级方案
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full py-3 px-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
          >
            返回首页
          </button>
        </div>
      </div>
    </div>
  );
}
