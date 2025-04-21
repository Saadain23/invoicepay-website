// components/ChatWidget.js
import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/ChatWidget.module.css';

const ChatWidget = ({ translations }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [hasGreeted, setHasGreeted] = useState(false);
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

    const sendMessage = () => {
        if (inputValue.trim() === '') return;

        setMessages([...messages, { text: inputValue, type: 'sender' }]);
        setInputValue('');

        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: translations.demoResponse, type: 'receiver' }
            ]);
        }, 1000);
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
                                key={index}
                                className={`${styles.message} ${message.type === 'sender' ? styles.sender : styles.receiver}`}
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
                        />
                        <button onClick={sendMessage}>{translations.sendButton}</button>
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
