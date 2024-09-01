import React from "react";

const Skills = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Skills</h1> {/* Main heading */}
      <div style={styles.skillsCategory}>
        <div style={styles.skillsBox}>
          <h2 style={styles.heading}>Programming Languages</h2>
          <div style={styles.skillsList}>
            <span style={styles.skill}>Python</span>
            <span style={styles.skill}>Java</span>
            <span style={styles.skill}>C</span>
            <span style={styles.skill}>C++</span>
            <span style={styles.skill}>HTML</span>
            <span style={styles.skill}>JavaScript</span>
            <span style={styles.skill}>SQL</span>
          </div>
        </div>
        <div style={styles.skillsBox}>
          <h2 style={styles.heading}>Developer Tools</h2>
          <div style={styles.skillsList}>
            <span style={styles.skill}>VS Code</span>
            <span style={styles.skill}>Replit</span>
            <span style={styles.skill}>Android Studio</span>
            <span style={styles.skill}>Pycharm</span>
            <span style={styles.skill}>Intellij Idea</span>
          </div>
        </div>
        <div style={styles.skillsBox}>
          <h2 style={styles.heading}>Technologies/Frameworks</h2>
          <div style={styles.skillsList}>
            <span style={styles.skill}>Linux</span>
            <span style={styles.skill}>ReactJS</span>
            <span style={styles.skill}>NextJS</span>
            <span style={styles.skill}>NodeJS</span>
            <span style={styles.skill}>ExpressJS</span>
            <span style={styles.skill}>MongoDB</span>
            <span style={styles.skill}>Figma</span>
            <span style={styles.skill}>Tailwind</span>
            <span style={styles.skill}>Git</span>
            <span style={styles.skill}>GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal CSS for the component
const styles = {
  container: {
    padding: "15px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  mainHeading: {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#00ff00", // Green color for main heading
  },
  skillsCategory: {
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Space between sections
  },
  skillsBox: {
    padding: "15px",
    backgroundColor: "#333",
    borderRadius: "5px",
  },
  heading: {
    fontSize: "1.2em",
    marginBottom: "10px",
    color: "#ffffff", // White color for section headings
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  skill: {
    backgroundColor: "#444",
    padding: "5px 10px",
    borderRadius: "3px",
    boxShadow: "0 0 5px rgba(0, 255, 0, 0.5)", // Glowing green effect
    color: "#00ff00", // Green color for skill text
    fontSize: "0.9em",
  },
};

export default Skills;
