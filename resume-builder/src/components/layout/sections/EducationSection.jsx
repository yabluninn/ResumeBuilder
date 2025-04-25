import SectionInput from "../../ui/SectionInput";
import SectionDropdown from "../../ui/SectionDropdown";
import { useState } from "react";

export default function EducationSection() {
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
    <form className="section">
      <div className="section-header">
        <p className="section-title">Education</p>
      </div>
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
            value={educationLevel}
            onChange={setEducationLevel}
            options={levelOptions}
          />
        </div>
      </div>
      <div className="section-buttons">
        <button className="section-button back-button" type="submit">
          <i class="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button className="section-button next-button" type="submit">
          Next Step
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </form>
  );
}
