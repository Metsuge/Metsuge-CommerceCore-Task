"use client";

import { useState, FormEvent, useRef, useEffect } from 'react';
import { z } from "zod";
import styles from "./Form.module.scss";
import { statesByCountry } from "../assets/statesAndCountries"

interface Props {
  onFormDivPositionChange: (position: number) => void;
}

interface FormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
}

const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|7[0-9]{15}|(?:2131|1800|35\d{3})\d{11})$/;

const zodSchema = z.object({
  firstName: z.string().nonempty("First name is required."),
  lastName: z.string().nonempty("Last name is required."),
  email: z.string().email("Email is invalid."),
  address: z.string().nonempty("Address is required."),
  city: z.string().nonempty("City is required."),
  state: z.string().nonempty("State is required."),
  zip: z.string().nonempty("ZIP code is required."),
  country: z.string().nonempty("Country is required."),
  cardNr: z.string().min(13, "Credit card number must be at least 13 digits")
    .max(19, "Credit card number must be at most 19 digits")
    .regex(creditCardRegex, "Invalid credit card number"),
  expiration: z.string().nonempty("Expiration date is required."),
  securityCode: z.string().nonempty("Security code is required."),
  nameOnCard: z.string().nonempty("Name on card is required."),
});

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const divRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [stateOptions, setStateOptions] = useState<string[]>(statesByCountry["United States"]);


  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }

    const getPositions = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        onFormDivPositionChange(rect.left);
      }
    };
    getPositions();

    window.addEventListener('resize', getPositions);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "cardNr" ? formatCardNumber(value) : value,
    }));

    if (name === 'country') {
      setStateOptions(statesByCountry[value] || []);
      setFormData((prevData) => ({ ...prevData, state: '' })); // Reset state when country changes
    }
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Validate form data using Zod schema
    const result = zodSchema.safeParse(formData);

    if (!result.success) {
      const validationErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          validationErrors[err.path[0] as string] = err.message;
        }
      });

      setErrors(validationErrors);
    } else {
      setErrors({});

      console.log('Submitted successfully!');

      localStorage.setItem('formData', JSON.stringify(formData));
      console.log("Saved form data to localStorage,:", JSON.stringify(formData));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const formatCardNumber = (value: string) => {
    const cleanedValue = value.replace(/\D+/g, "");
    return cleanedValue.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div ref={divRef} id={styles.form}>

      <form className={styles.formGroup} onSubmit={handleSubmit}>
        <div id={styles.contact}>
          <div className={styles.title}>Contact</div>
          <div className={`${styles.formGroup} ${styles.email}`}>
            <input
              className={styles.input}
              placeholder='Email Address'

              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}

            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>
        <div id={styles.delivery}>
          <div className={styles.title}>Delivery</div>
          {/* Names */}
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

              />
              {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
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

              />
              {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
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

            />
            {errors.address && <span className={styles.error}>{errors.address}</span>}
          </div>

          {/* City */}
          <div id={styles.cityStateRow} className={styles.formRow}>
            <div id={styles.cityField}>
              <input
                className={styles.input}
                placeholder='City'
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}

              />
              {errors.city && <span className={styles.error}>{errors.city}</span>}
            </div>
            {/* State */}
            <div >



              <select
                className={`${styles.dropdown} ${styles.input}`}
                name="state" value={formData.state} onChange={handleChange}>
                <option value="">Select a state</option>
                {stateOptions.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <span className={styles.error}>{errors.state}</span>}
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

              />
              {errors.zip && <span className={styles.error}>{errors.zip}</span>}
            </div>
          </div>

          <div className={`${styles.formGroup}  ${styles.country} `}>
            <select
              className={`${styles.dropdown} ${styles.input}`}
              name="country" value={formData.country} onChange={handleChange}>
              {Object.keys(statesByCountry).map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && <span className={styles.error}>{errors.country}</span>}
          </div>
        </div>
        <div id={styles.payment}>
          <div className={styles.title}>Payment</div>
          <div className={styles.h2}>All transactions are secure and encrypted.</div>
          <div id={styles.cardDiv} className={styles.formGroup} >
            <label className="circular-checkbox">

              <div className={styles.cardIcons}>
                <input
                  type="checkbox"
                  id="circularCheckbox"
                  className={styles.checkbox}
                  onChange={handleCheckboxChange} />
                <span
                  style={{
                    marginTop: '4px'
                  }}

                  className={`${styles.checkmark} ${isChecked ? styles.checked : ''}`}

                > Credit Card</span>
                <div className={`${styles.icons} ${isChecked ? styles.iconsChecked : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

            </label>
            {/* Card nr */}
            <div className={`${styles.formGroup}`}>
              <input
                className={styles.input}
                placeholder='Card number'
                type="text"
                id="cardNr"
                name="cardNr"
                value={formData.cardNr}
                onChange={handleChange}
              />
              {errors.cardNr && <span className={styles.error}>{errors.cardNr}</span>}
            </div>
            {/* Expiration security */}

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
                />
                {errors.expiration && <span className={styles.error}>{errors.expiration}</span>}
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

                />
                {errors.securityCode && <span className={styles.error}>{errors.securityCode}</span>}

              </div>
            </div>

            {/* Name on card */}
            <div className={`${styles.formGroup}`}>
              <input
                className={styles.input}
                placeholder='Name on card'
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
              />
              {errors.nameOnCard && <span className={styles.error}>{errors.nameOnCard}</span>}

            </div>
          </div>

          <button className={`${styles.button}`}>
            COMPLETE ORDER
          </button>
          <div className={styles.endText}>
            <div className={styles.endTextInner}><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9583 5.25H11.0833V4.08332C11.0833 1.83176 9.25159 0 7 0C4.74841 0 2.91668 1.83176 2.91668 4.08332V5.25H2.04168C1.88046 5.25 1.75 5.38046 1.75 5.54168V12.8334C1.75 13.4768 2.27322 14 2.91668 14H11.0834C11.7268 14 12.25 13.4768 12.25 12.8333V5.54168C12.25 5.38046 12.1195 5.25 11.9583 5.25ZM7.8733 11.3428C7.88241 11.4251 7.85594 11.5077 7.80068 11.5696C7.74542 11.6313 7.66623 11.6667 7.58335 11.6667H6.41668C6.3338 11.6667 6.25461 11.6313 6.19935 11.5696C6.14409 11.5078 6.11759 11.4251 6.12672 11.3428L6.31072 9.68825C6.01193 9.47092 5.83335 9.12712 5.83335 8.75C5.83335 8.10657 6.35657 7.58332 7.00003 7.58332C7.64348 7.58332 8.1667 8.10655 8.1667 8.75C8.1667 9.12712 7.98812 9.47092 7.68934 9.68825L7.8733 11.3428ZM9.33332 5.25H4.66668V4.08332C4.66668 2.79675 5.71342 1.75 7 1.75C8.28658 1.75 9.33332 2.79675 9.33332 4.08332V5.25Z" fill="#828282" />
            </svg>
            </span >
              All transactions are secure and encrypted</div>
          </div>
        </div>
      </form>
    </div>
  );
}
