"use client";

import { useState, FormEvent, useRef, useEffect } from 'react';
import { z } from "zod";
import styles from "./Form.module.scss";

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
    const formattedValue = name === 'cardNr' ? formatCardNumber(value) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Validate form data using Zod schema
    const result = zodSchema.safeParse(formData);
    console.log('result', result);

    if (!result.success) {
      // Extract and set error messages if validation fails
      const validationErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          validationErrors[err.path[0] as string] = err.message;
        }
      });
      console.log(validationErrors);

      setErrors(validationErrors);
    } else {
      // Clear errors and proceed if validation passes
      setErrors({});
      console.log("Form data is valid, proceeding with submission...");
      // You can add further submission logic here
    }
  };

  const formatCardNumber = (value: string) => {
    // Remove any non-numeric characters
    const numericValue = value.replace(/\D/g, '');

    // Format the card number in groups of 4 digits
    const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');

    return formattedValue;
  };

  return (
    <div ref={divRef} id={styles.form}>

      <form className={styles.formGroup} onSubmit={handleSubmit}>
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
          {/* STATE */}
          <div >
            <select
              className={`${styles.dropdown} ${styles.input}`}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}

            >
              <option value="1">State 1</option>
              <option value="2">State 2</option>

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
            id="country"

            name="country"
            value={formData.country}
            onChange={handleChange}

          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
          {errors.country && <span className={styles.error}>{errors.country}</span>}
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
              name="cardNr"
              value={formData.cardNr}
              onChange={handleChange}

            />
            {errors.cardNr && <span className={styles.error}>{errors.cardNr}</span>}
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

            />
            {errors.nameOnCard && <span className={styles.error}>{errors.nameOnCard}</span>}

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
