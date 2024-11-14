import React from 'react';
import { Message } from '@/types/chat';
import { UserCircleIcon } from '@heroicons/react/24/solid';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`py-5 ${message.role === 'assistant' ? 'bg-gray-50' : ''}`}>
      <div className="max-w-4xl mx-auto flex gap-4 px-4">
        {message.role === 'assistant' ? (
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
            AI
          </div>
        ) : (
          <UserCircleIcon className="w-8 h-8 text-gray-500" />
        )}
        
        <div className="flex-1">
          <div className="prose prose-sm">
            {message.content}
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {new Date(message.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}