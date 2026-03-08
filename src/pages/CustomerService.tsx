import React, { useState } from 'react';
import { 
  MessageSquare, 
  Settings, 
  User, 
  Send, 
  Smile, 
  Paperclip, 
  MoreVertical,
  Search,
  Phone,
  Video,
  Check,
  CheckCheck
} from 'lucide-react';

const messages = [
  { id: 1, sender: 'customer', text: '你好，狐狸毛绒玩具还有货吗？', time: '10:42 AM', status: 'read' },
  { id: 2, sender: 'ai', text: '您好！🦊 是的，限量版狐狸毛绒玩具目前有货！我们还剩大约45件。您想在售罄前抢购一个吗？✨', time: '10:42 AM', status: 'read' },
  { id: 3, sender: 'customer', text: '我能在周五前收到吗？', time: '10:43 AM', status: 'read' },
  { id: 4, sender: 'ai', text: '如果您今天下午4点前下单，我们可以立即发货！通常需要2-3天送达，所以周五应该没问题！📦💨', time: '10:43 AM', status: 'sent' },
];

export default function CustomerService() {
  const [activeChat, setActiveChat] = useState(1);
  const [inputText, setInputText] = useState('');

  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-8rem)] gap-6">
      {/* Chat List */}
      <div className="w-full lg:w-80 h-[400px] lg:h-full bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden flex-shrink-0">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 text-lg">消息中心</h3>
            <div className="flex gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs px-2.5 py-1 rounded-full font-bold">12</span>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索对话..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              onClick={() => setActiveChat(i)}
              className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-all group ${
                activeChat === i ? 'bg-indigo-50/50 border-l-4 border-l-indigo-600' : 'border-l-4 border-l-transparent'
              }`}
            >
              <div className="flex justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className={`font-bold text-sm ${activeChat === i ? 'text-indigo-900' : 'text-gray-900'}`}>User_{i}234</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">10:4{i} AM</span>
              </div>
              <p className={`text-sm truncate mb-2 ${activeChat === i ? 'text-indigo-700 font-medium' : 'text-gray-500'}`}>
                {i === 1 ? '我能在周五前收到吗？' : '这个有蓝色的吗？'}
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md border border-gray-200 font-medium">Taobao</span>
                {i === 1 && <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-md border border-red-100 font-medium animate-pulse">紧急</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 h-[600px] lg:h-full bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden min-w-0">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 border-2 border-white shadow-sm">
                <User className="w-6 h-6" />
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">User_1234</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  在线
                </span>
                <span>•</span>
                <span>上次活跃: 刚刚</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <div className="w-px h-8 bg-gray-200 mx-1 hidden sm:block"></div>
            <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'ai' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex flex-col ${msg.sender === 'ai' ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[70%]`}>
                <div className={`rounded-2xl p-4 shadow-sm relative group ${
                  msg.sender === 'ai' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 px-1">
                  <span className="text-[10px] text-gray-400 font-medium">{msg.time}</span>
                  {msg.sender === 'ai' && (
                    msg.status === 'read' ? <CheckCheck className="w-3 h-3 text-indigo-500" /> : <Check className="w-3 h-3 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex flex-col gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all shadow-sm">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="输入消息..." 
              className="w-full bg-transparent border-none focus:ring-0 text-sm text-gray-900 placeholder-gray-400 min-h-[40px]"
            />
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <div className="flex gap-1">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 rounded-lg transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs text-gray-400 flex items-center gap-1.5 hidden sm:flex">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  AI 助理已就绪
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 font-medium active:scale-95">
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">发送</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persona Config Sidebar */}
      <div className="w-full lg:w-80 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-y-auto hidden xl:block flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-900 flex items-center gap-2 text-lg">
            <Settings className="w-5 h-5 text-indigo-600" />
            人设配置
          </h3>
          <div className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
            已激活
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-900">机器人名称</label>
            <input type="text" defaultValue="花花机器人" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-900">性格特征</label>
            <div className="flex flex-wrap gap-2">
              {['友好', '专业', '可爱', '风趣', '耐心'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white text-gray-600 text-xs font-medium rounded-lg border border-gray-200 cursor-pointer hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <label className="text-sm font-bold text-gray-900">语气风格</label>
              <span className="text-xs text-indigo-600 font-medium">平衡</span>
            </div>
            <input type="range" className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            <div className="flex justify-between text-xs text-gray-400 font-medium">
              <span>正式严谨</span>
              <span>活泼随意</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-900">知识库关联</label>
            <div className="p-1 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
              {[
                { name: '产品目录 v2.pdf', size: '2.4 MB' },
                { name: '发货政策.docx', size: '1.1 MB' },
                { name: '常见问题 QA.xlsx', size: '856 KB' }
              ].map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xs">
                      {file.name.split('.').pop()?.toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-400">{file.size}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button className="w-full py-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium hover:bg-indigo-50/50 rounded-lg transition-colors border-t border-gray-100 mt-1">
                + 添加文档
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
