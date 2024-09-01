import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={styles.contactContainer}>
      <div style={styles.contactInfo}>
        <div style={styles.infoItem}>
          <FaEnvelope style={styles.icon} />
          <a href="mailto:riteshchavan058@gmail.com" style={styles.contactLink}>
            riteshchavan058@gmail.com
          </a>
        </div>
        <div style={styles.infoItem}>
          <FaPhone style={styles.icon} />
          <a href="tel:+91-7066892492" style={styles.contactLink}>
            +91-7066892492
          </a>
        </div>
        <div style={styles.infoItem}>
          <FaMapMarkerAlt style={styles.icon} />
          <span style={styles.contactText}>Mangalwedha, Solapur</span>
        </div>
      </div>

      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.description}>
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form style={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            style={styles.textarea}
            rows="5"
            required
          ></textarea>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Internal CSS styles
const styles = {
  contactContainer: {
    padding: "15px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    boxSizing: "border-box",
  },
  contactInfo: {
    marginBottom: "30px",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "1.5em",
    color: "#00ff00", // Green color for icons
    marginRight: "10px",
  },
  contactLink: {
    color: "#00ff00", // Green color for contact links
    textDecoration: "none",
  },
  contactText: {
    fontSize: "1em",
    color: "#ffffff", // White color for contact text
  },
  formContainer: {
    marginTop: "30px",
  },
  heading: {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#00ff00", // Green color for heading
  },
  description: {
    marginBottom: "20px",
    fontSize: "1em",
    color: "#ffffff", // White color for description
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #333",
    backgroundColor: "#2c2c2c",
    color: "#ffffff",
    fontSize: "1em",
  },
  textarea: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #333",
    backgroundColor: "#2c2c2c",
    color: "#ffffff",
    fontSize: "1em",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#00ff00", // Green color for button
    border: "none",
    color: "#000000",
    borderRadius: "4px",
    fontSize: "1em",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Contact;
