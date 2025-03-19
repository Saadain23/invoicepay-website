import React, { Component } from 'react';
import styles from '@/styles/PhoneCall.module.css'

class PhoneCall extends Component {
    render() {
        return (
            <div className={styles.phoneCallContainer}>
                <input
                    type="tel"
                    className={styles.phoneInput}
                    placeholder="+358123456789"
                    value="+358123456789"
                />
                <select className={styles.languageSelect}>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="ur">Urdu</option>
                    <option value="hi">Hindi</option>
                    <option value="fi">Finnish</option>
                </select>
                <button className={styles.callButton}>Request a call</button>
            </div>
        );
    }
}

export default PhoneCall;
