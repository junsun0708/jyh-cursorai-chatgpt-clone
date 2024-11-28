'use client';

import React, { useState } from 'react';
import { Message } from '@/types/chat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { getChatCompletion } from '@/utils/openai';

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    try {
      const apiMessages = messages.concat(userMessage).map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      const response = await getChatCompletion(apiMessages);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response || '죄송합니다. 응답을 생성할 수 없습니다.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      const errorMessage = error?.response?.status === 429 
        ? '죄송합니다. API 할당량이 초과되었습니다. 잠시 후 다시 시도해주세요.'
        : '죄송합니다. 오류가 발생했습니다.';
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: errorMessage,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
      
      console.error('메시지 전송 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full overflow-y-auto pb-32">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && <div className="p-4 text-center text-gray-500">AI가 응답을 생성중입니다...</div>}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
} 