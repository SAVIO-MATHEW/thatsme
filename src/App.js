import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import "./styles.scss";

function Header() {
  return (
    <header className="header" aria-label="Resume header">
      <h1 className="header-name">Savio Mathew</h1>
      <p className="header-title">Front-End Developer</p>
      <div className="header-contact">
        <p className="contact-item">
          <a href="mailto:saviomathewsmk@gmail.com">saviomathewsmk@gmail.com</a>
        </p>
        <p className="contact-item">+91-9846929092</p>
        <p className="contact-item">
          <a
            href="https://linkedin.com/in/savio-mathew1998"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/savio-mathew1998
          </a>
        </p>
      </div>
    </header>
  );
}

function Summary() {
  return (
    <section className="section summary" aria-labelledby="summary-title">
      <h2 id="summary-title" className="section-title">
        Summary
      </h2>
      <ul className="summary-list">
        <li>
          Front-End Developer with 4+ years of experience in ReactJS, delivering
          scalable applications, achieving 25% user engagement growth.
        </li>
        <li>
          Collaborated in Scrum and Agile teams to boost productivity by 20%.
        </li>
        <li>
          Delivered project goals through effective sprint planning and code
          reviews.
        </li>
        <li>
          Proficient in developing and maintaining scalable, responsive web
          applications using React, with expertise in component and
          functional-based architecture, state management with React Hooks and
          Redux Toolkit, and modern JavaScript (ES6+).
        </li>
        <li>
          Skilled in translating UI/UX designs into responsive, interactive web
          pages while ensuring cross-browser compatibility and performance
          optimization, with experience in developing over 400 components.
        </li>
      </ul>
    </section>
  );
}

function Skills() {
  const skills = [
    "React.js",
    "React Hooks",
    "React Router",
    "Redux Toolkit",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass/SCSS",
    "Bootstrap",
    "Visual Studio Code",
    "JIRA",
    "React DevTools",
    "Browser Developer Tools",
    "SonarQube",
    "Git",
    "TortoiseGit",
    "GitHub",
    "Jenkins",
    "Lighthouse",
    "axe DevTools",
    "Wave Evaluation Tool",
    "WCAG Color Contrast Checker",
    "Agile",
    "Scrum",
  ];
  return (
    <section className="section skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Technology Analyst",
      company:
        "Infosys Ltd, Bangalore (Client: Southern California Edison Company)",
      period: "Jan 2021 - Present",
      projects: [
        {
          name: "DSS Customer Communication My Account Refresh",
          description: [
            "Enhanced energy usage monitoring for Southern California Edison’s customer portal by integrating a new Usage page with dynamic D3.js charts.",
            "Built dynamic graphs and charts for Single Page Applications using D3.js, improving data readability by 80%.",
            "Integrated various chart types, including Bar charts, Stacked Bar charts, and Comparison Bar charts, based on real-time responses from backend systems using REST API methods.",
            "Enhanced bug resolution by 40% through detailed reporting and React Developer Tools.",
            "Collaborated with Quality Assurance, Drupal, UI/UX, Microservice, and Backend teams to resolve UI issues.",
          ],
        },
        {
          name: "Alerts and Notification Phase 1",
          description: [
            "Engineered scalable and responsive UI components using ReactJS, HTML, CSS3, and Sass/SCSS, increasing page load speed by 30% and improving user retention by 15%.",
            "Improved code quality by 30% by implementing SonarQube standards and thorough testing with Jest, enabling early issue identification and minimizing technical debt.",
            "Managed CI/CD pipelines to automate deployment processes in Jenkins and ensured robust version control using Git, TortoiseGit, and GitHub.",
            "Implemented WCAG-compliant accessibility features, ensuring inclusive and user-friendly applications.",
          ],
        },
        {
          name: "Spark Network Automation",
          description: [
            "Developed and integrated a new employee dashboard using Material UI components, enabling Spark employees to manage inquiries, provisioning, modifications, and decommissioning.",
            "Refined UI design elements with Figma as a reference, improving user satisfaction by 15%.",
            "Produced comprehensive project documentation, including flowcharts and diagrams, improving clarity and communication by 30%.",
          ],
        },
      ],
      highlights: [
        "Streamlined requirements gathering with standardized templates, boosting team efficiency by 25%.",
        "Projected project efforts and timelines strategically, ensuring seamless and timely delivery.",
        "Managed a team of 5 developers to design and deploy a scalable React-based application, achieving a 25% increase in user engagement within the first quarter.",
        "Facilitated Scrum and Agile processes, specially sprint planning, improving team efficiency by 20%.",
      ],
    },
  ];

  return (
    <section className="section experience" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">
        Experience
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3 className="experience-title">{exp.title}</h3>
          <p className="experience-company">
            {exp.company} | {exp.period}
          </p>
          <ul className="experience-highlights">
            {exp.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
          {exp.projects.map((project, idx) => (
            <div key={idx} className="project-item">
              <h4 className="project-title">{project.name}</h4>
              <ul className="project-description">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

function Achievements() {
  const achievements = [
    "H1B Visa Nomination: Nominated for an H1B CAP FY25 visa and issued a Work permit due to exceptional React development and project leadership.",
    "Awards: Received Rise Insta Award for contributions to multiple projects:",
    "October 2023: Recognized for dedication and instrumental role in successful project go-live.",
    "March 2024: Recognized for implementing View Usage module, enhancing functionality for 10,000+ users.",
    "June 2024: Appreciated for hard work in multiple releases of DSS project.",
    "Recognition: Earned special recognition from Team Leads and Technology Architects for consistently delivering high-quality, clean, and maintainable code.",
  ];

  return (
    <section
      className="section achievements"
      aria-labelledby="achievements-title"
    >
      <h2 id="achievements-title" className="section-title">
        Achievements
      </h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            {achievement}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Certifications() {
  const certifications = [
    "Certified React Professional (Infosys Ltd)",
    "Certified Front-End Web Developer (Infosys Ltd)",
    "Global Agile Developer Certification (Infosys Ltd)",
    "Business Communication Level 6 (Learnship.com)",
  ];

  return (
    <section
      className="section certifications"
      aria-labelledby="certifications-title"
    >
      <h2 id="certifications-title" className="section-title">
        Certifications
      </h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section className="section education" aria-labelledby="education-title">
      <h2 id="education-title" className="section-title">
        Education
      </h2>
      <div className="education-item">
        <h3 className="education-title">
          B.Tech in Computer Science and Engineering
        </h3>
        <p className="education-institution">
          Lourdes Matha College of Science and Technology, Kuttichal, TVM,
          Kerala, India | 2016 - 2020
        </p>
      </div>
    </section>
  );
}

function DownloadButton() {
  return (
    <div className="button-container">
      <a href={`${process.env.PUBLIC_URL}/Resume-Savio_Mathew.pdf`} download="Resume-Savio_Mathew.pdf">
        <button className="download-btn">
          {" "}
          Download Resume {" "}  <FaDownload style={{ marginLeft: "8px" }} className="text-white text-lg" />
        </button>
      </a>{" "}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`resume-container ${theme}`} role="main">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <Header />
      <main className="main-content">
        <DownloadButton />
        <Summary />
        <Skills />
        <Experience />
        <Achievements />
        <Certifications />
        <Education />
      </main>
    </div>
  );
}
