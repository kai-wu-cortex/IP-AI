import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Share2, 
  MessageCircle, 
  Heart, 
  Eye, 
  UserPlus, 
  MoreHorizontal,
  Plus,
  ArrowUpRight
} from 'lucide-react';

const data = [
  { name: '周一', views: 4000, likes: 2400 },
  { name: '周二', views: 3000, likes: 1398 },
  { name: '周三', views: 2000, likes: 9800 },
  { name: '周四', views: 2780, likes: 3908 },
  { name: '周五', views: 1890, likes: 4800 },
  { name: '周六', views: 2390, likes: 3800 },
  { name: '周日', views: 3490, likes: 4300 },
];

const accounts = [
  { id: 1, platform: '小红书', name: '@花花日记', status: '已连接', color: 'bg-red-500', icon: 'R' },
  { id: 2, platform: '抖音', name: '@花花官方', status: '已连接', color: 'bg-black', icon: 'D' },
  { id: 3, platform: 'B站', name: '花花TV', status: '已连接', color: 'bg-pink-400', icon: 'B' },
  { id: 4, platform: '快手', name: '@花花KS', status: '待连接', color: 'bg-orange-500', icon: 'K' },
];

export default function Publishing() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">多平台发布中心</h1>
          <p className="text-sm text-gray-500 mt-1">一键分发内容，实时监控数据表现</p>
        </div>
        <button className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 flex items-center gap-2 font-medium active:scale-95">
          <Share2 className="w-4 h-4" />
          发布新帖
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Connected Accounts */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">已连接账户</h3>
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3 flex-1">
            {accounts.map((acc) => (
              <div key={acc.id} className="group flex items-center justify-between p-4 bg-gray-50/50 hover:bg-white rounded-xl transition-all border border-transparent hover:border-gray-100 hover:shadow-sm cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${acc.color} flex items-center justify-center text-white text-sm font-bold shadow-sm group-hover:scale-110 transition-transform`}>
                    {acc.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-gray-900 text-sm">{acc.name}</p>
                      <ArrowUpRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-gray-500">{acc.platform}</p>
                  </div>
                </div>
                <div className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                  acc.status === '已连接' 
                    ? 'bg-green-50 text-green-700 border-green-100' 
                    : 'bg-yellow-50 text-yellow-700 border-yellow-100'
                }`}>
                  {acc.status}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 border border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors flex items-center justify-center gap-2 font-medium">
            <Plus className="w-4 h-4" />
            连接新账户
          </button>
        </div>

        {/* Stats Overview */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">数据概览</h3>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">12.8w</span>
                  <span className="text-sm text-green-600 font-medium">+12.5%</span>
                </div>
                <span className="text-sm text-gray-400">总浏览量</span>
              </div>
            </div>
            <select className="bg-gray-50 border-none text-sm text-gray-600 font-medium rounded-lg focus:ring-2 focus:ring-indigo-500/20 py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>本季度</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#9ca3af', fontSize: 12}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#9ca3af', fontSize: 12}} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    padding: '12px'
                  }}
                  cursor={{ fill: '#f9fafb' }}
                />
                <Bar dataKey="views" name="浏览量" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={24} />
                <Bar dataKey="likes" name="点赞数" fill="#e0e7ff" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Posts Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-bold text-gray-900">近期发布</h3>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium hover:underline">查看全部</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 w-[40%]">内容</th>
                <th className="px-6 py-4">分发平台</th>
                <th className="px-6 py-4">状态</th>
                <th className="px-6 py-4 text-right">实时数据</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                        <img src={`https://picsum.photos/seed/${i}/100`} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 truncate max-w-[200px] mb-1">夏日氛围新品系列 ☀️</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <span>2小时前发布</span>
                          <span>·</span>
                          <span>By AI Assistant</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white ring-1 ring-gray-100">R</div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white ring-1 ring-gray-100">D</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      已发布
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-6 text-gray-500">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1.5 font-medium text-gray-900">
                          <Eye className="w-4 h-4 text-indigo-500" />
                          <span>1.2k</span>
                        </div>
                        <span className="text-[10px] text-gray-400">浏览</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1.5 font-medium text-gray-900">
                          <Heart className="w-4 h-4 text-pink-500" />
                          <span>342</span>
                        </div>
                        <span className="text-[10px] text-gray-400">点赞</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1.5 font-medium text-gray-900">
                          <MessageCircle className="w-4 h-4 text-blue-500" />
                          <span>56</span>
                        </div>
                        <span className="text-[10px] text-gray-400">评论</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white rounded-lg text-gray-400 hover:text-gray-600 transition-all opacity-0 group-hover:opacity-100 shadow-sm border border-transparent hover:border-gray-200">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
