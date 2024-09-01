import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <style>
        {`
          .experience {
            padding: 15px;
            background-color: #1e1e1e;
            color: #ffffff;
          }

          .experience h1 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #00ff00; /* Green color for the main heading */
          }

          .experience-item {
            margin-bottom: 20px;
            padding: 10px;
            border: 2px solid #333; /* Border color */
            border-radius: 8px; /* Rounded corners */
          }

          .experience-item h2 {
            font-size: 1.2em;
            margin: 0;
            color: #00ff00; /* Highlighted heading color */
          }

          .experience-item h3 {
            font-size: 1em;
            margin: 5px 0;
            color: #ffffff;
          }

          .experience-item p {
            margin: 5px 0;
          }

          .experience-item ul {
            list-style-type: disc;
            padding-left: 20px;
          }

          .experience-item li {
            font-size: 1em;
            line-height: 1.5;
          }

          /* Responsive Styles for Experience Section */
          @media (max-width: 600px) {
            .experience-item h2 {
              font-size: 1.1em;
            }

            .experience-item h3 {
              font-size: 0.9em;
            }
          }
        `}
      </style>
      <h1>Experience</h1> {/* Main heading */}
      <div className="experience-item">
        <h2>Web Developer Trainee (Intern)</h2>
        <h3>Starktech Ventures Private Limited - Islampur, Sangli</h3>
        <p>
          <strong>Aug/2023 - Sept/2023</strong>
        </p>
        <ul>
          <li>
            Collaborated on the development of the website's frontend using
            React.js and JavaScript, ensuring a seamless user experience.
          </li>
          <li>
            Actively participated in code reviews, offering constructive
            feedback to enhance code quality and maintain best practices.
          </li>
        </ul>
        <p>
          <strong>Technologies:</strong> React.js, JavaScript
        </p>
      </div>
      <div className="experience-item">
        <h2>Intern</h2>
        <h3>IIT Jodhpur - Remote</h3>
        <p>
          <strong>Feb/2024 - Apr/2024</strong>
        </p>
        <ul>
          <li>
            Contributed to the 'Developing Indian Multi-lingual Aggression
            Dataset' project by annotating texts to identify aggressive behavior
            in various Indian languages.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
