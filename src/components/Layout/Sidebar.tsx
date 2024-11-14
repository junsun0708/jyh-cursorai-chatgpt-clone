'use client';

import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

interface ChatHistory {
  id: string;
  title: string;
}

export default function Sidebar() {
  const [chatHistory, setChatHistory] = React.useState<ChatHistory[]>([]);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: '새로운 채팅',
    };
    setChatHistory(prev => [newChat, ...prev]);
  };

  return (
    <div className="w-64 bg-[#202123] h-screen flex flex-col p-2">
      {/* New Chat 버튼 */}
      <button
        onClick={handleNewChat}
        className="flex items-center gap-2 rounded-md border border-gray-600 p-3 text-white hover:bg-gray-700 transition-colors w-full"
      >
        <PlusIcon className="w-5 h-5" />
        New Chat
      </button>

      {/* 채팅 히스토리 */}
      <div className="flex-1 mt-4 overflow-y-auto">
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            className="p-3 text-gray-200 hover:bg-gray-700 rounded-md cursor-pointer mb-1"
          >
            {chat.title}
          </div>
        ))}
      </div>

      {/* 하단 프로필 영역 */}
      <div className="border-t border-gray-600 pt-2 mt-2">
        <div className="p-3 text-gray-200 hover:bg-gray-700 rounded-md cursor-pointer">
          프로필 설정
        </div>
      </div>
    </div>
  );
}