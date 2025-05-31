'use client';

import { useState } from 'react';
import { PaperClipIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import { chatService, ChatMessage } from '@/services/api';
import Toast, { useToast } from './Toast';

export default function Chat() {
  const { toast, showToast, hideToast } = useToast();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    try {
      setIsLoading(true);
      // Add user message to chat
      const userMessage: ChatMessage = { role: 'user', content: message };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');

      // Get response from API
      const response = await chatService.sendMessage(message);
      const assistantMessage: ChatMessage = { role: 'assistant', content: response.message };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      const response = await chatService.uploadFile(file);
      showToast('File uploaded successfully!', 'success');
      if (response.context) {
        setMessages(prev => [...prev, { role: 'assistant', content: `File context: ${response.context}` }]);
      }
    } catch (error) {
      console.error('Failed to upload file:', error);
      showToast('Failed to upload file. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {toast && <Toast {...toast} onClose={hideToast} />}
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg ${
              msg.role === 'user' ? 'bg-input-bg' : 'bg-button-gray'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="bg-input-bg rounded-lg p-4 shadow-input">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask Omni a question..."
            className="w-full bg-transparent resize-none outline-none min-h-[100px]"
            disabled={isLoading}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4">
              <label className="p-2 hover:bg-button-gray rounded-lg transition-colors cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  disabled={isLoading}
                />
                <PaperClipIcon className="w-5 h-5" />
              </label>
              <button
                type="button"
                className="p-2 hover:bg-button-gray rounded-lg transition-colors"
                disabled={isLoading}
              >
                <Square2StackIcon className="w-5 h-5" />
              </button>
            </div>
            <button
              type="submit"
              className={`bg-button-gray px-6 py-2 rounded-lg transition-colors ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-80'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
