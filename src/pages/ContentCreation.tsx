import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  Type, 
  Sparkles, 
  Send, 
  Copy, 
  Download, 
  RefreshCw,
  Plus,
  MoreHorizontal,
  Wand2,
  LayoutTemplate,
  History,
  Palette,
  MonitorPlay,
  Flame,
  TrendingUp,
  X
} from 'lucide-react';

const templates = [
  { id: 'daily', label: '花花送花日常', icon: '🌸' },
  { id: 'friends', label: '花花交新朋友', icon: '🤝' },
  { id: 'healing', label: '治愈伤心小故事', icon: '🌧️' },
  { id: 'special', label: '节日特别篇', icon: '🎂' },
  { id: 'merch', label: '周边上新宣传', icon: '📦' },
];

const platforms = [
  { id: 'rednote', label: '小红书', color: 'bg-red-500' },
  { id: 'douyin', label: '抖音', color: 'bg-black' },
  { id: 'bilibili', label: 'B站', color: 'bg-pink-400' },
  { id: 'kuaishou', label: '快手', color: 'bg-orange-500' },
  { id: 'video', label: '视频号', color: 'bg-green-500' },
];

const ips = [
  {
    id: 'huahua',
    name: '花花',
    desc: '一只爱送花的治愈系小猫',
    avatar: '🐱',
    active: true,
    profile: {
      persona: '温柔、爱送花、治愈',
      style: '日系水彩手绘',
      model: 'huahua_v3',
      catchphrase: '喵~ 🌸'
    }
  },
  {
    id: 'afu',
    name: '阿福',
    desc: '花花的好朋友，憨厚小柴犬',
    avatar: '🐶',
    active: false,
    profile: {
      persona: '憨厚、忠诚、贪吃',
      style: '日系水彩手绘',
      model: 'afu_v1',
      catchphrase: '汪！🍖'
    }
  }
];

const hotTopics = [
  { id: 1, title: '春天第一束花', heat: '985w', trend: 'up' },
  { id: 2, title: '治愈系风景', heat: '850w', trend: 'up' },
  { id: 3, title: '我的宠物成精了', heat: '720w', trend: 'stable' },
  { id: 4, title: '周末去哪儿', heat: '680w', trend: 'down' },
  { id: 5, title: '今日份开心', heat: '550w', trend: 'up' },
];

export default function ContentCreation() {
  const [activeTab, setActiveTab] = useState('image');
  const [prompt, setPrompt] = useState('花花今天送了一束向日葵给一只难过的小狗阿福，阿福感动得流下了眼泪，两个小伙伴在夕阳下拥抱');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showHotTopics, setShowHotTopics] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  
  // Mock generated content
  const generatedImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', ratio: '1:1', title: '花花送向日葵 · 正面特写', desc: '1080x1080 · 水彩风' },
    { id: 2, url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', ratio: '3:4', title: '夕阳下拥抱', desc: '1080x1440 · 水彩风' },
    { id: 3, url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', ratio: '16:9', title: '阿福流泪 · 感动瞬间', desc: '1920x1080 · 水彩风' },
  ];

  const handleScanHotTopics = () => {
    setIsScanning(true);
    setShowHotTopics(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1500);
  };

  const applyHotTopic = (topic: string) => {
    setPrompt(prev => `${prev} #${topic}`);
    setShowHotTopics(false);
  };

  return (
    <div className="flex flex-col xl:flex-row xl:h-[calc(100vh-8rem)] bg-gray-50 p-4 md:p-6 gap-6 xl:overflow-hidden relative">
      {/* Hot Topics Modal/Overlay */}
      {showHotTopics && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in duration-200">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-orange-50 to-red-50">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 text-lg">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                全网热点扫描
              </h3>
              <button 
                onClick={() => setShowHotTopics(false)}
                className="p-1 hover:bg-white/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-0 overflow-y-auto">
              {isScanning ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <p className="text-gray-500 font-medium animate-pulse">正在扫描全网热点数据...</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-50">
                  {hotTopics.map((topic, index) => (
                    <button
                      key={topic.id}
                      onClick={() => applyHotTopic(topic.title)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-orange-50/50 transition-colors text-left group"
                    >
                      <span className={`text-lg font-bold w-6 text-center ${index < 3 ? 'text-orange-500' : 'text-gray-400'}`}>
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                          {topic.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5">
                          热度: {topic.heat}
                        </p>
                      </div>
                      <div className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                        插入话题
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {!isScanning && (
              <div className="p-4 bg-gray-50 text-center text-xs text-gray-400 border-t border-gray-100">
                数据来源：全网大数据实时分析
              </div>
            )}
          </div>
        </div>
      )}

      {/* Left Sidebar - IP Management */}
      <div className="w-full xl:w-72 flex flex-col gap-6 flex-shrink-0">
        {/* My IP Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-900">我的 IP</h3>
          </div>
          <div className="p-3 space-y-2">
            {ips.map((ip) => (
              <div 
                key={ip.id}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  ip.active 
                    ? 'bg-indigo-50 border border-indigo-100 shadow-sm' 
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
              >
                <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-2xl shadow-sm">
                  {ip.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`font-bold ${ip.active ? 'text-indigo-900' : 'text-gray-900'}`}>{ip.name}</p>
                    {ip.active && <span className="w-2 h-2 rounded-full bg-indigo-500"></span>}
                  </div>
                  <p className="text-xs text-gray-500 truncate">{ip.desc}</p>
                </div>
              </div>
            ))}
            
            <button className="w-full py-3 border border-dashed border-gray-200 rounded-xl text-gray-500 text-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2 font-medium bg-gray-50/50">
              <Plus className="w-4 h-4" />
              新建 IP 角色
            </button>
          </div>
        </div>

        {/* IP Profile Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">IP 档案 · 花花</h3>
            <button className="text-xs text-indigo-600 font-medium hover:underline">编辑</button>
          </div>
          <div className="p-5 space-y-4 text-sm">
            <div className="space-y-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">人设关键词</span>
              <div className="flex flex-wrap gap-2">
                {['温柔', '爱送花', '治愈'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">{tag}</span>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">视觉风格</span>
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <Palette className="w-4 h-4 text-indigo-500" />
                日系水彩手绘
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">基础模型</span>
              <span className="inline-block bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-mono font-medium border border-indigo-100">
                huahua_v3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Content - Workshop */}
      <div className="flex-1 flex flex-col gap-6 min-w-0 xl:overflow-hidden">
        {/* Creation Workshop */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col flex-shrink-0 overflow-hidden">
          <div className="p-2 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
            <div className="flex p-1 bg-gray-100/80 rounded-xl overflow-x-auto max-w-full">
              {[
                { id: 'image', label: '图片生成', icon: ImageIcon },
                { id: 'video', label: '视频生成', icon: Video },
                { id: 'copy', label: '文案生成', icon: Type },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-white text-gray-900 shadow-sm ring-1 ring-black/5' 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 px-4">
               <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  系统正常
               </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="relative group">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="描述你的创作想法..."
                className="w-full h-40 p-6 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none text-gray-900 text-lg leading-relaxed transition-all placeholder-gray-400"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button 
                  onClick={handleScanHotTopics}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-lg border border-orange-200 shadow-sm transition-colors text-xs font-medium" 
                  title="扫描全网热点"
                >
                  <Flame className="w-3.5 h-3.5" />
                  热点扫描
                </button>
                <button className="p-2 bg-white hover:bg-gray-50 text-gray-400 hover:text-indigo-600 rounded-lg border border-gray-200 shadow-sm transition-colors" title="优化提示词">
                  <Wand2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition-colors">
                  <LayoutTemplate className="w-4 h-4 text-gray-400" />
                  使用模板
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition-colors">
                  <History className="w-4 h-4 text-gray-400" />
                  历史记录
                </button>
              </div>
              
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium shadow-lg shadow-gray-900/20 transition-all active:scale-95 hover:-translate-y-0.5">
                <Sparkles className="w-4 h-4" />
                立即生成
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 xl:overflow-y-auto pr-2 space-y-6">
          {/* Image Results */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-indigo-600" />
                生成结果 · 图片
              </h3>
              <button className="text-sm text-gray-500 hover:text-gray-900">查看全部</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
              {generatedImages.map((img) => (
                <div key={img.id} className="group cursor-pointer bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-1.5 bg-white/90 backdrop-blur rounded-lg text-gray-700 hover:text-indigo-600 shadow-sm">
                          <Download className="w-3 h-3" />
                       </button>
                    </div>
                    <span className="absolute bottom-2 left-2 bg-black/50 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-medium text-white border border-white/10">
                      {img.ratio}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm truncate px-1">{img.title}</h4>
                  <p className="text-xs text-gray-500 px-1 mt-1">{img.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Results */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <MonitorPlay className="w-5 h-5 text-indigo-600" />
                生成结果 · 视频
              </h3>
            </div>
            
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur px-2 py-1 rounded-lg text-xs font-medium text-white border border-white/10">
                      00:15
                    </span>
                  </div>
                  <div className="mt-3 px-1">
                     <h4 className="font-bold text-gray-900 text-sm">花花与阿福的午后时光</h4>
                     <p className="text-xs text-gray-500 mt-1">1080P · 60FPS</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - AI Copywriting */}
      <div className="w-full xl:w-80 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col flex-shrink-0 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <Type className="w-4 h-4 text-indigo-600" />
            AI 文案助手
          </h3>
        </div>
        
        <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar px-2">
          {platforms.map((p, i) => (
            <button 
              key={p.id}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                i === 0 ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {p.label}
              {i === 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 mx-3 rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="p-5 flex-1 overflow-y-auto space-y-5 min-h-[300px] xl:min-h-0">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">标题</label>
            <input 
              type="text" 
              defaultValue="花花送向日葵给难过的阿福 🌻 看到最后我哭了..."
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">正文内容</label>
            <textarea 
              className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none leading-relaxed transition-all"
              defaultValue={`今天花花发现好朋友阿福一个人坐在角落
小脸上写满了难过 😿

花花什么都没说
默默去花园摘了一束最大的向日葵
送到阿福面前 🌻

"喵~ 难过的时候就看看向日葵吧
它永远朝着太阳笑哦"

阿福看着花花
感动得热泪盈眶
两个小伙伴在夕阳下紧紧拥抱 🌅

有时候治愈很简单
就是有人愿意默默陪在你身边 💛`}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">推荐话题</label>
              <button 
                onClick={handleScanHotTopics}
                className="text-xs text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1"
              >
                <Flame className="w-3 h-3" />
                蹭热点
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {['#花花', '#治愈系动画', '#暖心故事', '#手绘动画', '#每日一画'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-lg border border-indigo-100 font-medium hover:bg-indigo-100 cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 bg-gray-50/50">
          <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-gray-900/10 flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            一键发送到发布中心
          </button>
        </div>
      </div>
    </div>
  );
}
