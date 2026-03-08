import React, { useState } from 'react';
import { Upload, Box, Printer, CheckCircle, Clock, RotateCw, Download, Layers, Maximize, Minimize, Settings } from 'lucide-react';

export default function Modeling() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = () => {
    setStep(2);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI 3D建模工坊</h1>
          <p className="text-sm text-gray-500 mt-1">从2D图像快速生成高精度3D模型</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
            <Clock className="w-4 h-4 text-indigo-500" />
            <span>预计生成时间: <span className="font-medium text-gray-900">30秒</span></span>
          </div>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 flex items-center gap-2 font-medium active:scale-95">
            <Box className="w-4 h-4" />
            新建项目
          </button>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative flex justify-between max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -z-10 -translate-y-1/2 rounded-full">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
          {[
            { id: 1, label: '上传2D参考图', icon: Upload, desc: '支持 JPG/PNG' },
            { id: 2, label: 'AI 几何重建', icon: Box, desc: '自动生成模型' },
            { id: 3, label: '模型优化与导出', icon: Printer, desc: '准备打印' },
          ].map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-3 bg-white px-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${
                step >= s.id 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-indigo-200' 
                  : 'bg-white border-gray-200 text-gray-400'
              }`}>
                <s.icon className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className={`font-bold text-sm ${step >= s.id ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
        {/* Upload Area */}
        <div className={`border-2 border-dashed rounded-3xl flex flex-col items-center justify-center p-10 transition-all duration-300 ${
          step === 1 
            ? 'border-indigo-300 bg-indigo-50/30 hover:bg-indigo-50/50 hover:border-indigo-400' 
            : 'border-gray-200 bg-gray-50/50'
        }`}>
          {step === 1 ? (
            <div className="text-center space-y-6 max-w-md">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 border border-indigo-100">
                <Upload className="w-10 h-10 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">上传参考图片</h3>
                <p className="text-gray-500">
                  将您的2D角色设计拖放到此处，或点击下方按钮浏览。
                  <br />
                  <span className="text-xs text-gray-400 mt-2 block">支持 JPG, PNG 格式，最大 10MB</span>
                </p>
              </div>
              <button 
                onClick={handleUpload}
                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-95 w-full"
              >
                选择文件
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <img 
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Uploaded" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 text-green-700 font-bold border border-white/50">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  图片已上传
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3D Viewer Placeholder */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden relative shadow-2xl border border-gray-800 flex items-center justify-center group">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}
          ></div>

          {step === 1 && (
            <div className="text-gray-600 flex flex-col items-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded-2xl border-2 border-gray-800 flex items-center justify-center bg-gray-800/50">
                <Box className="w-8 h-8 opacity-50" />
              </div>
              <p className="font-medium">等待输入参考图...</p>
            </div>
          )}
          
          {step === 2 && (
            <div className="text-center space-y-6 relative z-10">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 m-auto w-16 h-16 bg-indigo-500/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <Box className="w-8 h-8 text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">正在生成3D模型...</h3>
                <p className="text-gray-400">AI 正在分析几何结构和纹理细节</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="relative w-full h-full cursor-move z-10">
              {/* Mock 3D Viewer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="3D Model" 
                  className="w-80 h-80 object-contain drop-shadow-2xl filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Controls Overlay */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <button className="p-3 hover:bg-white/10 rounded-xl text-white transition-colors tooltip" title="旋转">
                  <RotateCw className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-white/20 my-auto mx-1"></div>
                <button className="p-3 hover:bg-white/10 rounded-xl text-white transition-colors" title="放大">
                  <Maximize className="w-5 h-5" />
                </button>
                <button className="p-3 hover:bg-white/10 rounded-xl text-white transition-colors" title="缩小">
                  <Minimize className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-white/20 my-auto mx-1"></div>
                <button className="p-3 hover:bg-white/10 rounded-xl text-white transition-colors" title="显示设置">
                  <Layers className="w-5 h-5" />
                </button>
                <button className="p-3 hover:bg-white/10 rounded-xl text-white transition-colors" title="设置">
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute top-8 right-8 flex flex-col gap-3">
                <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 font-medium hover:scale-105 active:scale-95">
                  <Download className="w-4 h-4" />
                  导出 .OBJ
                </button>
                <button className="px-5 py-2.5 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2 font-medium hover:scale-105 active:scale-95">
                  <Printer className="w-4 h-4" />
                  发送打印
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
