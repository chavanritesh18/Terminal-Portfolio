// Terminal.js
import React, { useState } from "react";
import "./styles.css"; // Import your styles
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Help from "./Help";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [currentSection, setCurrentSection] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      processCommand(input.trim());
      setInput("");
    }
  };

  const processCommand = (command) => {
    switch (command.toLowerCase()) {
      case "ed":
        setCurrentSection(<Education />);
        break;
      case "ex":
        setCurrentSection(<Experience />);
        break;
      case "sk":
        setCurrentSection(<Skills />);
        break;
      case "pr":
        setCurrentSection(<Projects />);
        break;
      case "co":
        setCurrentSection(<Contact />);
        break;
      case "he":
        setCurrentSection(<Help />);
        break;
      default:
        setCurrentSection(
          <p>'{command}' is not recognized as a command. Type 'he' for help.</p>
        );
    }
  };

  return (
    <div className="terminal-container">
      <div className="header">
        <h1>Ritesh Chavan</h1>
        <p>AI Enthusiast |</p>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="commands">
          <h2>Commands:</h2>
          <ul>
            <li>ed - Education</li>
            <li>ex - Experience</li>
            <li>sk - Skills</li>
            <li>pr - Projects</li>
            <li>co - Contact</li>
            <li>he - Help</li>
          </ul>
        </div>
        <div className="prompt">
          <p>$</p>
        </div>
      </div>
      <div className="terminal-body">
        <div className="output">
          {currentSection || <p>Type a command...</p>}
        </div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          autoFocus
          placeholder="Type command here..."
        />
      </div>
    </div>
  );
};

export default Terminal;
