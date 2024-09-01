import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaLaptopCode } from "react-icons/fa"; // Import LinkedIn, GitHub, and Laptop Code icons
import "./styles.css"; // Ensure this file imports the necessary styles
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Help from "./Help";

const Header = () => {
  const [input, setInput] = useState("");
  const [currentSection, setCurrentSection] = useState(
    <p>Type a command in front of $</p>
  );
  const [typingText, setTypingText] = useState("");
  const [animationStep, setAnimationStep] = useState(0);

  const texts = ["Full-stack Developer", "AI Enthusiast", "Frontend Developer"];
  const typingDelay = 100; // Time between each character
  const eraseDelay = 500; // Time to wait before starting to erase
  const holdDelay = 2000; // Time to hold text before erasing

  useEffect(() => {
    let typingTimeout;
    let eraseTimeout;
    let intervalId;

    const text = texts[animationStep];

    const type = () => {
      setTypingText((prev) => text.slice(0, prev.length + 1));
      if (typingText.length < text.length) {
        typingTimeout = setTimeout(type, typingDelay);
      } else {
        eraseTimeout = setTimeout(erase, holdDelay);
      }
    };

    const erase = () => {
      setTypingText((prev) => text.slice(0, prev.length - 1));
      if (typingText.length > 0) {
        eraseTimeout = setTimeout(erase, typingDelay);
      } else {
        setAnimationStep((prev) => (prev + 1) % texts.length);
        typingTimeout = setTimeout(type, eraseDelay);
      }
    };

    type(); // Start typing animation

    intervalId = setInterval(() => {
      setTypingText(texts[animationStep]);
    }, holdDelay + typingDelay * text.length);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(eraseTimeout);
      clearInterval(intervalId);
    };
  }, [animationStep, typingText]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      processCommand(input.trim().toLowerCase()); // Convert input to lowercase
      setInput("");
    }
  };

  const processCommand = (command) => {
    switch (command) {
      case "ed":
      case "education":
        setCurrentSection(<Education />);
        break;
      case "ex":
      case "experience":
        setCurrentSection(<Experience />);
        break;
      case "sk":
      case "skills":
        setCurrentSection(<Skills />);
        break;
      case "pr":
      case "projects":
        setCurrentSection(<Projects />);
        break;
      case "co":
      case "contact":
        setCurrentSection(<Contact />);
        break;
      case "he":
      case "help":
        setCurrentSection(<Help />);
        break;
      default:
        setCurrentSection(
          <p>
            '{command}' is not recognized as a command. Type 'he' or 'help' for
            help.
          </p>
        );
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>
          Ritesh Chavan <FaLaptopCode />{" "}
        </h1>
        <p className="typing-text">{typingText}</p>
        <div className="intro">
          <p>
            I am a student at Rajarambapu Institute of Technology, pursuing a
            B.Tech in Computer Science and Information Technology, with a strong
            foundation in data structures and algorithms, and full-stack
            development. I specialize in developing modern web applications!
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ritesh-chavan-one8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/chavanritesh18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="commands">
          <h2>Commands:</h2>
          <ul>
            <li>ed - education</li>
            <li>ex - experience</li>
            <li>sk - skills </li>
            <li>pr - projects </li>
            <li>co - contact </li>
            <li>he - help </li>
          </ul>
          <p style={{ color: "white" }}>
            Type 'help' command for more information
          </p>
        </div>
        <div className="terminal-input">
          <div className="prompt">$</div>
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
      <div className="content">
        {currentSection}
        {/* Intro text displayed here for desktop */}
        <div className="intro-desktop"></div>
      </div>
    </div>
  );
};

export default Header;
