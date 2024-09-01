import React from "react";

const Education = () => {
  return (
    <div>
      <style>{`
        .education {
          padding: 15px;
          background-color: #1e1e1e;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .education h2 {
          font-size: 1.5em;
          margin-bottom: 15px;
          color: #00ff00; /* Green color for the heading */
        }

        .education-item {
          margin-bottom: 20px;
        }

        .education-item h3 {
          font-size: 1.2em;
          margin-bottom: 5px;
        }

        .education-item p {
          font-size: 1em;
          margin: 5px 0;
        }

        .education-item:first-of-type {
          margin-bottom: 40px; /* Adds extra space after the first item */
        }

        /* Responsive Styles */
        @media (max-width: 600px) {
          .education {
            padding: 10px;
          }

          .education h2 {
            font-size: 1.3em;
          }

          .education-item h3 {
            font-size: 1.1em;
          }

          .education-item p {
            font-size: 0.9em;
          }
        }
      `}</style>
      <div className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Rajarambapu Institute of Technology</h3>
          <p>B.Tech - Computer Science and Information Technology</p>
          <p>2022 - 2025</p>
          <p>CGPA: 8.13</p>
        </div>
        <div className="education-item">
          <h3>Fabtech Technical Campus</h3>
          <p>Diploma - Civil Engineering</p>
          <p>2019 - 2022</p>
          <p>89.42%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
