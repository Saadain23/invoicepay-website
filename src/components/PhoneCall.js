import React, { Component } from 'react';
import styles from '@/styles/PhoneCall.module.css'

class PhoneCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            language: 'en',
            isValidNumber: false
        };
    }

    validatePhoneNumber = (number) => {
        const numberOnly = number.replace(/\D/g, '');
        return numberOnly.length === 9 && !numberOnly.startsWith('0');
    };

    handlePhoneChange = (e) => {
        const input = e.target.value;
        const sanitizedInput = input.replace(/\D/g, '').slice(0, 9);
        
        // Don't allow input starting with 0
        const validInput = sanitizedInput.startsWith('0') ? sanitizedInput.slice(1) : sanitizedInput;
        
        this.setState({
            phoneNumber: validInput,
            isValidNumber: this.validatePhoneNumber(validInput)
        });
    };

    handleSubmit = async () => {
        if (!this.state.isValidNumber) {
            alert(this.props.translations?.PhoneCall?.invalidNumber || 'Please enter a valid phone number');
            return;
        }

        try {
            const response = await fetch('https://api.invoicepay.fi/support/api/request-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone_number: '+358' + this.state.phoneNumber,
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
        const { translations } = this.props;
        return (
            <div className={styles.phoneCallContainer}>
                <div className={styles.phoneInputWrapper}>
                    <span className={styles.phonePrefix}>+358</span>
                    <input
                        type="tel"
                        className={`${styles.phoneInput} ${!this.state.isValidNumber && this.state.phoneNumber ? styles.invalid : ''}`}
                        placeholder={translations?.PhoneCall?.placeholder || "123456789"}
                        value={this.state.phoneNumber}
                        onChange={this.handlePhoneChange}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        aria-label={translations?.PhoneCall?.ariaLabel || "Enter your phone number"}
                    />
                </div>
                <select 
                    className={styles.languageSelect}
                    value={this.state.language}
                    onChange={(e) => this.setState({ language: e.target.value })}
                >
                    <option value="fi">{translations?.languages?.finnish || "Finnish"}</option>
                    <option value="en">{translations?.languages?.english || "English"}</option>
                    <option value="ar">{translations?.languages?.arabic || "Arabic"}</option>
                    <option value="ur">{translations?.languages?.urdu || "Urdu"}</option>
                    <option value="hi">{translations?.languages?.hindi || "Hindi"}</option>
                    <option value="bn">{translations?.languages?.bengali || "Bengali"}</option>
                </select>
                <button 
                    className={styles.callButton}
                    onClick={this.handleSubmit}
                >
                    {translations?.callButton || "Request a call"}
                </button>
            </div>
        );
    }
}

export default PhoneCall;
