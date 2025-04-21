import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/ChatWidget.module.css';

const ChatWidget = ({ translations }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [hasGreeted, setHasGreeted] = useState(false);
    const [contextId, setContextId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);

        if (!isOpen && !hasGreeted) {
            setTimeout(() => {
                setMessages([
                    {
                        text: translations.greeting,
                        type: 'receiver'
                    }
                ]);
                setHasGreeted(true);
            }, 500);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const sendApiRequest = async (message) => {
        setIsLoading(true);

        try {
            // Create FormData object as shown in the CURL example
            const formData = new FormData();
            formData.append('message', message);

            // Only append context_id if it exists
            if (contextId) {
                formData.append('context_id', contextId);
            }

            const endpoint = 'https://api.invoicepay.fi/support/api/chat/ai/open';

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            // Store the context_id if returned and not already set
            if (data.context_id && !contextId) {
                setContextId(data.context_id);
            }

            // Return the AI response
            return data.response.message;
        } catch (error) {
            console.error('Error sending message:', error);
            return translations.errorMessage || "Sorry, there was an error processing your request.";
        } finally {
            setIsLoading(false);
        }
    };

    const sendMessage = async () => {
        if (inputValue.trim() === '' || isLoading) return;

        const userMessage = inputValue;
        setInputValue('');

        // Add user message to the chat
        setMessages(prevMessages => [...prevMessages, { text: userMessage, type: 'sender' }]);

        // Show loading indicator
        const loadingId = Date.now();
        setMessages(prevMessages => [...prevMessages, { id: loadingId, text: '...', type: 'receiver', isLoading: true }]);

        // Make API call
        const aiResponse = await sendApiRequest(userMessage);

        // Remove loading message and add real response
        setMessages(prevMessages => {
            const filtered = prevMessages.filter(msg => !msg.isLoading);
            return [...filtered, { text: aiResponse, type: 'receiver' }];
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const ChatIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    );

    return (
        <div className={styles.chatWidget}>
            {isOpen && (
                <div className={styles.chatBox}>
                    <div className={styles.chatHeader}>
                        <h3>{translations.header}</h3>
                        <button className={styles.closeBtn} onClick={toggleChat}>×</button>
                    </div>
                    <div className={styles.messagesContainer}>
                        {messages.map((message, index) => (
                            <div
                                key={message.id || index}
                                className={`${styles.message} ${message.type === 'sender' ? styles.sender : styles.receiver} ${message.isLoading ? styles.loading : ''}`}
                            >
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder={translations.placeholder}
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading || inputValue.trim() === ''}
                            className={isLoading ? styles.loadingBtn : ''}
                        >
                            {isLoading ? '...' : translations.sendButton}
                        </button>
                    </div>
                </div>
            )}

            <button className={styles.chatToggleBtn} onClick={toggleChat}>
                {isOpen ? '×' : <ChatIcon />}
            </button>
        </div>
    );
};

export default ChatWidget;