'use client';
import React, { useState } from 'react';
import type { ChatMessage } from '@/types/chat';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import ChatInput from '@/components/Chat/ChatInput';
import ChatMessage1 from '@/components/Chat/ChatMessage';

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = async (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    // TODO: API 호출 구현
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <h2 className="text-white text-2xl">무엇을 도와드릴까요?</h2>
            </div>
          ) : (
            messages.map((message) => (
              <ChatMessage1 key={message.id} message={message} />
            ))
          )}
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}