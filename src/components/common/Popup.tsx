import React from 'react';

interface PopupProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-full  overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="mb-4 text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
