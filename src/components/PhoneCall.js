import React, { Component } from 'react';
import styles from '@/styles/PhoneCall.module.css'

class PhoneCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            language: 'en'
        };
    }

    handleSubmit = async () => {
        try {
            const response = await fetch('https://api.invoicepay.fi/support/api/request-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone_number: this.state.phoneNumber,
                    language: this.state.language
                })
            });

            if (!response.ok) {
                throw new Error('Failed to request call');
            }
            alert('Call requested successfully!');
        } catch (error) {
            console.error('Error requesting call:', error);
            alert('Failed to request call. Please try again.');
        }
    };

    render() {
        return (
            <div className={styles.phoneCallContainer}>
                <input
                    type="tel"
                    className={styles.phoneInput}
                    placeholder="+358123456789"
                    value={this.state.phoneNumber}
                    onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                />
                <select 
                    className={styles.languageSelect}
                    value={this.state.language}
                    onChange={(e) => this.setState({ language: e.target.value })}
                >
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="ur">Urdu</option>
                    <option value="hi">Hindi</option>
                    <option value="fi">Finnish</option>
                </select>
                <button 
                    className={styles.callButton}
                    onClick={this.handleSubmit}
                >
                    Request a call
                </button>
            </div>
        );
    }
}

export default PhoneCall;
