import React from 'react';
import { 
  Clock, 
  Share2, 
  Box, 
  MessageSquareText, 
  Zap,
  PenTool,
  ShoppingBag,
  ArrowRight,
  Check,
  X
} from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent -z-10"></div>
        
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium border border-indigo-100">
            <Zap className="w-4 h-4" />
            <span>AI 驱动的全链路 IP 解决方案</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            一人一IP， <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              全产业链赋能
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
            打破传统团队壁垒，一个人就是一支队伍。从内容生成到多平台发布、3D建模、电商运营及AI客服，全流程简化您的IP打造过程。
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 flex items-center gap-2">
              开始创作
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
              查看演示
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-lg aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">IP-AI 引擎</h3>
                  <p className="text-xs text-gray-300">正在处理您的创意工作流</p>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>生成进度</span>
                  <span>85%</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">全流程自动化工作流</h2>
          <p className="text-gray-600">
            无缝连接创意的每一个环节，让您的 IP 价值最大化
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '01', title: '内容创作', icon: PenTool, desc: 'AI 辅助图文/视频生成' },
            { step: '02', title: '多平台发布', icon: Share2, desc: '一键分发至主流平台' },
            { step: '03', title: '3D建模', icon: Box, desc: '2D转3D快速建模' },
            { step: '04', title: '电商运营', icon: ShoppingBag, desc: '智能选品与库存管理' },
            { step: '05', title: 'AI客服', icon: MessageSquareText, desc: '24/7 全天候接待' },
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="h-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold text-gray-100 mb-4 font-mono">{item.step}</div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {/* @ts-ignore */}
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
              {idx < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-gray-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Traditional Way */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">传统工作流</h3>
            <p className="text-gray-500">高成本、低效率、难以规模化</p>
          </div>
          
          <div className="space-y-4">
            {[
              { label: '内容生产', value: '数天/篇', sub: '人工撰写拍摄，成本高昂' },
              { label: '团队规模', value: '5-10人', sub: '需编剧、摄影、运营、客服' },
              { label: '3D建模', value: '¥5000+/个', sub: '依赖专业软件与昂贵外包' },
              { label: '客户服务', value: '8小时/天', sub: '人工在线，夜间无人值守' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100/50">
                <div className="mt-1">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.label}</h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-red-600 font-mono font-medium">{item.value}</span>
                    <span className="text-xs text-gray-500">{item.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IP-AI Way */}
        <div className="bg-gray-900 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
          <div className="absolute top-0 right-0 p-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              RECOMMENDED
            </span>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">IP-AI 平台</h3>
            <p className="text-gray-400">一人抵一个团队，指数级增长</p>
          </div>
          
          <div className="space-y-4">
            {[
              { label: '内容生产', value: '分钟级', sub: 'AI 批量生成，永不枯竭' },
              { label: '团队规模', value: '1人', sub: '全流程自动化，无需组队' },
              { label: '3D建模', value: '一键生成', sub: '上传图片即刻获得模型' },
              { label: '客户服务', value: '24/7 在线', sub: 'AI 智能回复，秒级响应' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800 transition-colors">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.label}</h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-green-400 font-mono font-medium">{item.value}</span>
                    <span className="text-xs text-gray-500">{item.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
