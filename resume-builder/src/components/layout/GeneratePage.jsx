import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import "../../styles/GeneratePage.css";

export default function GeneratePage() {
  const resume = useSelector((state) => state.resume);

  const personal = resume.personalInfo || {};
  const education = resume.educationInfo || {};
  const experience = resume.experience || [];
  const skills = resume.skills || [];
  const {
    languages = [],
    certificates = [],
    hobbies = "",
  } = resume.additionalInfo || {};

  const handleExportPDF = () => {
    const element = document.getElementById("resume-content");
    const opt = {
      margin: 0.5,
      filename: `${personal.name}_${personal.surname}_resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="generate-container">
      <div id="resume-content" className="resume-preview">
        <h1 className="resume-name">
          {personal.name} {personal.surname}
        </h1>
        <p className="resume-position">{personal.position}</p>
        <p className="resume-contact">
          📍 {personal.location} | 📧 {personal.email || personal.mail} | 📞{" "}
          {personal.phoneNumber || personal.phone}
        </p>

        <section className="resume-section">
          <h2>Education</h2>
          <p>
            <strong>{education.study}</strong> — {education.institution}
          </p>
          <p>
            {education.startDate} - {education.endDate} ({education.level})
          </p>
        </section>

        {experience.length > 0 && (
          <section className="resume-section">
            <h2>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i}>
                <strong>{exp.title}</strong> at {exp.companyName}
                <p>
                  {exp.startDate} - {exp.endDate} ({exp.location})
                </p>
              </div>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section className="resume-section">
            <h2>Skills</h2>
            <ul className="resume-list">
              {skills.map((skill, i) => (
                <li key={i}>
                  {skill.name} — {skill.level}
                </li>
              ))}
            </ul>
          </section>
        )}

        {languages.length > 0 && (
          <section className="resume-section">
            <h2>Languages</h2>
            <ul className="resume-list">
              {languages.map((lang, i) => (
                <li key={i}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </section>
        )}

        {certificates.length > 0 && (
          <section className="resume-section">
            <h2>Certificates</h2>
            {certificates.map((cert, i) => (
              <div key={i}>
                <strong>{cert.name}</strong> — {cert.provider} ({cert.year})
              </div>
            ))}
          </section>
        )}

        {hobbies && (
          <section className="resume-section">
            <h2>Hobbies</h2>
            <p>{hobbies}</p>
          </section>
        )}
      </div>

      <button className="export-button" onClick={handleExportPDF}>
        Export to PDF
      </button>
    </div>
  );
}
