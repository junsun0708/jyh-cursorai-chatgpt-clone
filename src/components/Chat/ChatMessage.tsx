import React from 'react';
import { ChatMessage as ChatMessageType } from '@/types/chat';

interface Props {
  message: ChatMessageType;
}

const ChatMessage1 = ({ message }: Props) => {
  return (
    <div className={`p-4 ${message.role === 'user' ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold mb-2">
          {message.role === 'user' ? 'You' : 'Assistant'}
        </p>
        <p className="text-gray-700">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage1;