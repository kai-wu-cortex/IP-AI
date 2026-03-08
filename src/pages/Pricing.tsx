import React from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';

const plans = [
  {
    name: '创作者',
    price: '0',
    description: '适合刚起步的个人IP创作者',
    features: [
      '每天5次AI内容生成',
      '1个社交账号绑定',
      '基础3D建模 (低分辨率)',
      '社区支持',
      '基础数据分析',
    ],
    cta: '免费开始',
    popular: false,
    icon: Star,
  },
  {
    name: '专业版',
    price: '299',
    description: '适合快速成长的专业创作者',
    features: [
      '无限AI内容生成',
      '5个社交账号绑定',
      '高清3D建模 (4K渲染)',
      '高级电商数据仪表盘',
      '优先客户支持',
      '自定义水印',
      '批量发布工具',
    ],
    cta: '升级到专业版',
    popular: true,
    icon: Zap,
  },
  {
    name: '企业版',
    price: '999',
    description: '适合大型团队和品牌运营',
    features: [
      '包含专业版所有功能',
      '无限社交账号',
      'API访问权限',
      '专属AI模型训练',
      '专属客户经理',
      '24/7电话支持',
      '私有化部署选项',
      '团队协作功能',
    ],
    cta: '联系销售',
    popular: false,
    icon: Shield,
  },
];

export default function Pricing() {
  return (
    <div className="space-y-12 py-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">简单透明的定价</h1>
        <p className="text-xl text-gray-500">
          选择最适合您IP成长阶段的计划，随时可以升级或取消。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div 
              key={plan.name} 
              className={`relative bg-white rounded-3xl transition-all duration-300 flex flex-col ${
                plan.popular 
                  ? 'border-2 border-indigo-600 shadow-xl scale-105 z-10' 
                  : 'border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/30 tracking-wide">
                  最受欢迎
                </div>
              )}
              
              <div className="p-8 flex-1">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold text-gray-900 tracking-tight">¥{plan.price}</span>
                  <span className="text-gray-500 font-medium">/月</span>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 list-none group">
                      <div className={`mt-0.5 rounded-full p-0.5 ${
                        plan.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button 
                  className={`w-full py-4 rounded-2xl font-bold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 active:scale-95' 
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 active:scale-95'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-4">
        <div className="bg-gradient-to-br from-indigo-900 to-violet-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">需要为大型团队定制方案？</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
              我们为大型企业提供专属的私有化部署、定制模型训练和企业级安全保障。
            </p>
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg active:scale-95">
              联系企业销售
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
