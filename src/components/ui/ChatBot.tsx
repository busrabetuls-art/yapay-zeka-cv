import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { chatbotSystemPrompt } from '../../data/content';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const apiKey = (process.env as Record<string, string>).GEMINI_API_KEY;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Merhaba! 👋 Ben BBS Asistan. Büşra hakkında merak ettiklerinizi sorabilirsiniz.' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const ai = new GoogleGenAI({ apiKey });
      const conversationHistory = [...messages, userMessage]
        .map((m) => `${m.role === 'user' ? 'Kullanıcı' : 'Asistan'}: ${m.text}`)
        .join('\n');

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `${conversationHistory}\nKullanıcı: ${trimmed}`,
        config: {
          systemInstruction: chatbotSystemPrompt,
          maxOutputTokens: 256,
        },
      });

      const text = response.text || 'Üzgünüm, bir yanıt üretilemedi.';
      setMessages((prev) => [...prev, { role: 'model', text }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: apiKey
            ? 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
            : 'API anahtarı yapılandırılmamış. Büşra\'ya doğrudan e-posta ile ulaşabilirsiniz: busrabetulsuvari@gmail.com',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 flex items-center justify-center hover:shadow-purple-500/40 hover:scale-110 transition-all"
        aria-label={isOpen ? 'Chatbot\'u kapat' : 'Chatbot\'u aç'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[90] w-[360px] max-w-[calc(100vw-3rem)] h-[480px] rounded-2xl bg-slate-900 border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">BBS Asistan</h3>
                <p className="text-xs text-slate-400">Gemini AI ile güçlendirildi</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'model' && (
                    <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-purple-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md'
                        : 'bg-white/5 text-slate-300 border border-white/10 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-bl-md">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Bir soru sorun..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Gönder"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
