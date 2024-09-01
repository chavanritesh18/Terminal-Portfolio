import React from "react";

const Help = () => {
  return (
    <div style={styles.helpContainer}>
      <h2 style={styles.heading}>Help</h2>
      <p style={styles.description}>Available Commands:</p>
      <ul style={styles.commandList}>
        <li style={styles.commandItem}>
          <span style={styles.bullet}>•</span> ed | education: Displays
          education information
        </li>
        <li style={styles.commandItem}>
          <span style={styles.bullet}>•</span> ex | experience: Shows work
          experience
        </li>
        <li style={styles.commandItem}>
          <span style={styles.bullet}>•</span> sk | skills: Lists technical
          skills
        </li>
        <li style={styles.commandItem}>
          <span style={styles.bullet}>•</span> pr | projects: Displays notable
          projects
        </li>
        <li style={styles.commandItem}>
          <span style={styles.bullet}>•</span> co | contact: Shows contact
          information
        </li>
        <li style={styles.commandItem}>
          <span style={styles.bullet}>•</span> he | help: Displays available
          commands
        </li>
      </ul>
    </div>
  );
};

// Internal CSS styles
const styles = {
  helpContainer: {
    padding: "15px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#00ff00", // Green color for heading
  },
  description: {
    fontSize: "1em",
    marginBottom: "15px",
  },
  commandList: {
    listStyleType: "none", // Remove default list bullets
    padding: 0,
    margin: 0,
  },
  commandItem: {
    fontSize: "1em",
    marginBottom: "5px",
  },
  bullet: {
    marginRight: "8px",
  },
};

export default Help;
