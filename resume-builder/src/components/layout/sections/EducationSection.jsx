import SectionInput from "../../ui/SectionInput";
import SectionDropdown from "../../ui/SectionDropdown";
import SectionHeader from "../../ui/SectionHeader";
import { useSelector } from "react-redux";

export default function EducationSection({ onNext, onBack }) {
  const educationInfo = useSelector((state) => state.resume.educationInfo);

  const handleNext = () => {
    const { institution, study, startDate, endDate, level } = educationInfo;

    if (!institution || !study || !startDate || !endDate || !level) {
      alert("Please fill in all fields.");
      return;
    }

    onNext();
  };

  const levelOptions = [
    { value: "Highschool", label: "High School Diploma" },
    { value: "Associate", label: "Associate Degree" },
    { value: "Bachelor", label: "Bachelor's Degree" },
    { value: "Master", label: "Master's Degree" },
    { value: "Phd", label: "Ph.D. / Doctorate" },
    { value: "Bootcamp", label: "Coding Bootcamp" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div className="section">
      <SectionHeader title={"Education"} />
      <div className="section-inputs">
        <div className="section-inputs-container">
          <SectionInput
            id="institution"
            title="Institution"
            placeholder="Enter institution"
            isRequired={true}
            type="text"
            slice="education"
          />
          <SectionInput
            id="study"
            title="Field of Study"
            placeholder="Enter field of study"
            isRequired={true}
            type="text"
            slice="education"
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id="startDate"
            title="Start Date"
            isRequired={true}
            type="date"
            slice="education"
          />
          <SectionInput
            id="endDate"
            title="End Date"
            isRequired={true}
            type="date"
            slice="education"
          />
          <SectionDropdown
            id="level"
            title="Education Level"
            placeholder="Select education level"
            options={levelOptions}
            isRequired={true}
            slice="education"
          />
        </div>
      </div>
      <div className="section-buttons">
        <button className="section-button back-button" onClick={onBack}>
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button className="section-button next-button" onClick={handleNext}>
          Next Step
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
