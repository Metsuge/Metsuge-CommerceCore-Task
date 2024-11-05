"use client";

import { useState, FormEvent, useRef, useEffect } from 'react';
import styles from "./Form.module.scss";

interface Props {
  onFormDivPositionChange: (position: number) => void;
}

export default function Form({ onFormDivPositionChange }: Props) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '1',
    zip: '',
    country: 'United States',
    cardNr: '',
    expiration: '',
    securityCode: '',
    nameOnCard: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const divRef = useRef<HTMLInputElement>(null);



  useEffect(() => {

    const getPositions = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        onFormDivPositionChange(rect.left);
      }

    }
    getPositions();


    window.addEventListener('resize', getPositions);
  }, []);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div ref={divRef} id={styles.form}>

      <form className={styles.formGroup} onSubmit={handleSubmit}>
        <div className={styles.title}>Contact</div>
        <div className={`${styles.formGroup} ${styles.email}`}>
          <input
            className={styles.input}
            placeholder='Email Address'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.title}>Delivery</div>
        {/* FIRST LAST NAMES */}
        <div className={styles.formRow}>
          <div>
            <input
              className={styles.input}
              placeholder='First Name'
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder='Last Name'
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className={`${styles.formGroup} ${styles.address}`}>
          <input
            className={styles.input}
            placeholder='Address'
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* City */}
        <div className={styles.formRow}>
          <div>
            <input
              className={styles.input}
              placeholder='City'
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          {/* STATE */}
          <div >
            <select
              className={`${styles.dropdown} ${styles.input}`}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="1">State 1</option>
              <option value="2">State 2</option>

            </select>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder='ZIP/Postal Code'
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={`${styles.formGroup}  ${styles.country} `}>
          <select
            className={`${styles.dropdown} ${styles.input}`}
            id="country"

            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.title}>Payment</div>
        <div className={styles.h2}>All transactions are secure and encrypted.</div>
        <div className={styles.formGroup} >
          <label className="circular-checkbox">

            <div className={styles.cardIcons}>
              <input type="checkbox" id="circularCheckbox" />
              <span className="checkmark"> Credit Card</span>
              <div className={styles.icons}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </label>
          {/* CARD NR */}
          <div className={`${styles.formGroup}`}>
            <input
              className={styles.input}
              placeholder='Card number'
              type="text"
              id="cardNr"
              name="CardNr"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          {/* EXPIRATION SECURITY */}

          <div className={styles.formRow}>
            <div>
              <input
                className={styles.input}
                placeholder='Expiration (MM/YY)'
                type="text"
                id="expiration"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className={styles.input}
                placeholder='Security code'
                type="text"
                id="securityCode"
                name="securityCode"
                value={formData.securityCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* NAME ON CARD */}
          <div className={`${styles.formGroup}`}>
            <input
              className={styles.input}
              placeholder='Name on card'
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          className={`${styles.button}`}
        >COMPLETE ORDER</button>
        <div className={styles.endText}>
          <div className={styles.endTextInner}><span></span>
            All transactions are secure and encrypted</div>
        </div>
      </form>

    </div>
  );
}
