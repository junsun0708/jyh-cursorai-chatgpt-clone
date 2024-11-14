import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <div className="mb-4">
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          New Chat
        </button>
      </div>
      <div className="space-y-2">
        {/* 채팅 히스토리가 여기에 표시됩니다 */}
      </div>
    </aside>
  );
};

export default Sidebar;