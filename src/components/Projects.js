import React from "react";

const Projects = () => {
  const handleLiveProjectClick = (url) => {
    window.location.href = url;
  };

  return (
    <div style={styles.projects}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.project}>
        <h3 style={styles.projectTitle}>YouTube Clone</h3>
        <p style={styles.projectDescription}>
          This YouTube clone project is user-friendly and includes playback
          controls. Users can search for videos using the search bar, and they
          will receive suggested video lists. This clone is fully responsive for
          all types of devices and features both light and dark mode.
        </p>
        <div style={styles.technologies}>
          <span style={styles.techItem}>HTML</span>
          <span style={styles.techItem}>JavaScript</span>
          <span style={styles.techItem}>React</span>
          <span style={styles.techItem}>Tailwind CSS</span>
        </div>
        <button
          style={styles.liveProjectButton}
          onClick={() =>
            handleLiveProjectClick("https://youtube-secret-agents.netlify.app/")
          }
        >
          View Project
        </button>
      </div>

      <div style={styles.project}>
        <h3 style={styles.projectTitle}>GitConnect</h3>
        <p style={styles.projectDescription}>
          GitConnect is a platform where users can search GitHub users, rank
          repos by stars, forks, and recent, and discover popular repos across
          languages. Implemented login and logout seamlessly using GitHub
          account for a secure and easy sign-in experience. Users can view
          detailed user profiles, liked profiles, and track engagement with
          GitHub enthusiasts.
        </p>
        <div style={styles.technologies}>
          <span style={styles.techItem}>React</span>
          <span style={styles.techItem}>NodeJS</span>
          <span style={styles.techItem}>MongoDB</span>
          <span style={styles.techItem}>ExpressJS</span>
          <span style={styles.techItem}>Passport JS</span>
        </div>
        <button
          style={styles.liveProjectButton}
          onClick={() =>
            handleLiveProjectClick("https://github-mern-app-erb0.onrender.com/")
          }
        >
          View Project
        </button>
      </div>

      <div style={styles.project}>
        <h3 style={styles.projectTitle}>PrepStart-IO</h3>
        <p style={styles.projectDescription}>
          Developed a full-stack web application using NextJS, where users can
          take mock interviews. Implemented social and email/password
          authentication using Clerk. Users can log in, enter their job details,
          allow camera and microphone access, and start practicing with
          AI-generated interview questions. Features include speech-to-text
          conversion, recording user responses, and providing feedback based on
          their answers, leveraging cutting-edge AI technology.
        </p>
        <div style={styles.technologies}>
          <span style={styles.techItem}>NextJS</span>
          <span style={styles.techItem}>Clerk</span>
          <span style={styles.techItem}>Tailwind CSS</span>
          <span style={styles.techItem}>Drizzle ORM</span>
          <span style={styles.techItem}>Neon</span>
        </div>
        <button
          style={styles.liveProjectButton}
          onClick={() =>
            handleLiveProjectClick("https://your-prepstart-io-url.com")
          }
        >
          View Project
        </button>
      </div>

      <div style={styles.project}>
        <h3 style={styles.projectTitle}>Snake Game</h3>
        <p style={styles.projectDescription}>
          It's a fun and nostalgic project, and I've added a special touch to
          make it feel like the good old days. The game features a Nokia
          3310-style background and buttons for the mobile view, giving it that
          iconic look and feel.
        </p>
        <div style={styles.technologies}>
          <span style={styles.techItem}>HTML</span>
          <span style={styles.techItem}>CSS</span>
          <span style={styles.techItem}>JavaScript</span>
          <span style={styles.techItem}>React JS</span>
        </div>
        <button
          style={styles.liveProjectButton}
          onClick={() =>
            handleLiveProjectClick("https://snake-game-cr18.vercel.app/")
          }
        >
          View Project
        </button>
      </div>
    </div>
  );
};

// Internal CSS styles
const styles = {
  projects: {
    padding: "15px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  heading: {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#00ff00", // Green color for heading
  },
  project: {
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#333",
    border: "1px solid #444",
  },
  projectTitle: {
    fontSize: "1.2em",
    marginBottom: "10px",
  },
  projectDescription: {
    fontSize: "1em",
    marginBottom: "10px",
  },
  technologies: {
    marginBottom: "15px",
  },
  techItem: {
    display: "inline-block",
    marginRight: "10px",

    padding: "5px",
    backgroundColor: "#555",
    borderRadius: "4px",
    color: "#ffffff",
  },
  liveProjectButton: {
    backgroundColor: "#00ff00", // Green color for button
    color: "#000000",
    border: "none",
    padding: "10px 20px",
    fontSize: "1em",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  },
};

export default Projects;
