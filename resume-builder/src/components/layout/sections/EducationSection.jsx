import SectionInput from "../../ui/SectionInput";
import SectionDropdown from "../../ui/SectionDropdown";
import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";

export default function EducationSection({ onNext, onBack }) {
  const [educationLevel, setEducationLevel] = useState("");

  const levelOptions = [
    { value: "highschool", label: "High School Diploma" },
    { value: "associate", label: "Associate Degree" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "phd", label: "Ph.D. / Doctorate" },
    { value: "bootcamp", label: "Coding Bootcamp" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="section">
      <SectionHeader title={"Education"} />
      <div className="section-inputs">
        <div className="section-inputs-container">
          <SectionInput
            id={"institution"}
            title={"Institution"}
            placeholder={"Enter institution"}
            isRequired={true}
            type={"text"}
          />
          <SectionInput
            id={"study"}
            title={"Field of Study"}
            placeholder={"Enter field of study"}
            isRequired={true}
            type={"text"}
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id={"start-date"}
            title={"Start Date"}
            placeholder={""}
            isRequired={true}
            type={"date"}
          />
          <SectionInput
            id={"end-date"}
            title={"End Date"}
            placeholder={""}
            isRequired={true}
            type={"date"}
          />
          <SectionDropdown
            title={"Education Level"}
            placeholder={"Select education level"}
            value={educationLevel}
            onChange={setEducationLevel}
            options={levelOptions}
          />
        </div>
      </div>
      <div className="section-buttons">
        <button className="section-button back-button" onClick={onBack}>
          <i class="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button className="section-button next-button" onClick={onNext}>
          Next Step
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
