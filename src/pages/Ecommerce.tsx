import React from 'react';
import { 
  ShoppingBag, 
  DollarSign, 
  Package, 
  TrendingUp, 
  Search, 
  Filter,
  Plus,
  MoreHorizontal
} from 'lucide-react';

const products = [
  { id: 1, name: '限量版狐狸毛绒玩具', price: 129, stock: 45, sales: 1205, image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', status: 'In Stock' },
  { id: 2, name: '角色贴纸包', price: 29, stock: 120, sales: 3400, image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', status: 'In Stock' },
  { id: 3, name: '帆布手提包', price: 59, stock: 15, sales: 890, image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', status: 'Low Stock' },
  { id: 4, name: '手机壳 - 系列 1', price: 49, stock: 200, sales: 560, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', status: 'In Stock' },
];

export default function Ecommerce() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">电商运营中心</h1>
          <p className="text-sm text-gray-500 mt-1">管理商品库存，追踪销售数据</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all shadow-sm font-medium flex items-center gap-2">
            <Package className="w-4 h-4" />
            库存管理
          </button>
          <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 font-medium flex items-center gap-2 active:scale-95">
            <Plus className="w-4 h-4" />
            添加商品
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: '今日订单', value: '124', sub: '较昨日 +12%', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-50', trend: 'up' },
          { label: '今日营收', value: '¥12,450', sub: '较昨日 +8.5%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50', trend: 'up' },
          { label: '待发货', value: '18', sub: '需尽快处理', icon: Package, color: 'text-orange-600', bg: 'bg-orange-50', trend: 'neutral' },
          { label: '月增长', value: '+15.4%', sub: '持续增长中', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50', trend: 'up' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'}`}>
                {stat.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                <span>{stat.sub}</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
              <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Product List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/50">
          <h3 className="font-bold text-gray-900 text-lg">商品管理</h3>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="搜索商品名称、SKU..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm transition-all shadow-sm"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 text-gray-600 transition-all shadow-sm bg-white">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white text-gray-500 font-medium text-sm border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 w-12">
                  <input type="checkbox" className="rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
                </th>
                <th className="px-6 py-4">商品信息</th>
                <th className="px-6 py-4">价格</th>
                <th className="px-6 py-4">库存状态</th>
                <th className="px-6 py-4">总销量</th>
                <th className="px-6 py-4 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0 shadow-sm group-hover:shadow-md transition-all">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm mb-0.5">{product.name}</p>
                        <p className="text-xs text-gray-500 font-mono">SKU: IP-{product.id}00{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">¥{product.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${product.stock < 20 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                      <span className={`text-sm font-medium ${product.stock < 20 ? 'text-red-600' : 'text-gray-700'}`}>
                        {product.stock} 件
                      </span>
                      {product.stock < 20 && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-red-50 text-red-600 rounded border border-red-100">Low Stock</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-gray-900 font-medium">
                      {product.sales}
                      <span className="text-xs text-gray-400 font-normal">单</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-xs px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                        编辑
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center text-sm text-gray-500">
          <span>显示 1-4 共 12 个商品</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-white disabled:opacity-50 disabled:hover:bg-transparent transition-colors font-medium text-xs" disabled>上一页</button>
            <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-white transition-colors font-medium text-xs text-gray-900">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
