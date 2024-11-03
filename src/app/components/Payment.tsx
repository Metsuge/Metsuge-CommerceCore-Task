import React from 'react'
import styles from "./Payment.module.scss"
const Payment = () => {
  return (
    <div className={styles.form}>
      <form className={styles.formGroup} onSubmit={handleSubmit}>
      <div className={styles.title}>Payment</div>
      <label className="circular-checkbox">
        <input type="checkbox" id="circularCheckbox" />
        <span className="checkmark"></span>
        Circular Checkbox
    </label>
        <div className={`${styles.formGroup} ${styles.email}`}>
          <input
            className={styles.input }
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

        {/* City, State/Province, ZIP/Postal Code */}
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

        {/* Country Dropdown */}
        
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

        

        
      </form>
      
    </div>
  )
}

export default Payment