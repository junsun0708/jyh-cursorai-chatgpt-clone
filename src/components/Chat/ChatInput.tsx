import React, { useState } from 'react';

interface Props {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: Props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="max-w-3xl mx-auto flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="메시지를 입력하세요..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          전송
        </button>
      </div>
    </form>
  );
};

export default ChatInput;