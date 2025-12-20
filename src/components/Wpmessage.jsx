import { useState } from 'react';
import { X, Send, Phone } from 'lucide-react';

export default function WhatsAppContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = '919330855877';
  const defaultMessage = 'Hello! I would like to inquire about your services.';

  const handleSendMessage = () => {
    const textToSend = message.trim() || defaultMessage;
    const encodedMessage = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const quickMessages = [
    'I need information about your services',
    'I would like to request a quote',
    'Can we schedule a consultation?',
    'I have a question about your products'
  ];

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Modal */}
      <div 
        className={`fixed bottom-24 right-6 w-[380px] bg-white rounded-2xl shadow-2xl z-50 transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-green-600 to-green-500 p-5 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative text-white">
                 <svg 
              viewBox="0 0 24 24" 
              width="28" 
              height="28" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="fill-current stroke-none"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Chat with us</h3>
                <p className="text-green-100 text-sm">We typically reply instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 max-h-[400px] overflow-y-auto">
          {/* Welcome Message */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              👋 <strong>Welcome!</strong> How can we help you today? Choose a quick message or write your own.
            </p>
          </div>

          {/* Quick Messages */}
          <div className="space-y-2 mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Quick Messages
            </p>
            {quickMessages.map((msg, idx) => (
              <button
                key={idx}
                onClick={() => setMessage(msg)}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-sm text-gray-700 hover:text-green-700"
              >
                {msg}
              </button>
            ))}
          </div>

          {/* Custom Message Input */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
              Or write your message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none text-sm"
              rows="3"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100">
          <button
            onClick={handleSendMessage}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <Send className="h-5 w-5" />
            Send Message on WhatsApp
          </button>
          <div className="flex items-center justify-center gap-1 mt-3 text-xs text-gray-500">
            <Phone className="h-3 w-3" />
            <span>+91 96350 13952</span>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className={`relative transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          {/* Main Button */}
          <div className="relative h-16 w-16 bg-linear-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:shadow-green-500/50">
             <svg 
              viewBox="0 0 24 24" 
              width="28" 
              height="28" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`h-8 w-8 fill-current stroke-none text-white transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <X className={`h-8 w-8 text-white absolute transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>

        {/* Tooltip */}
        <div className={`absolute right-20 bottom-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
          isHovered && !isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}>
          Chat with us
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></div>
        </div>
      </button>
    </>
  );
}