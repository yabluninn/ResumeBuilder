import SectionInput from "../../../ui/SectionInput";
import SectionDropdown from "../../../ui/SectionDropdown";
import { useState } from "react";
import SectionHeader from "../../../ui/SectionHeader";
import SkillItem from "./SkillItem";

export default function SkillsSection() {
  const [skillLevel, setSkillLevel] = useState("");

  const skillOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "proficient", label: "Proficient" },
    { value: "advanced", label: "Advanced" },
    { value: "expert", label: "Expert" },
  ];

  return (
    <div className="section">
      <SectionHeader title={"Skills"} />
      <div className="skills-list">
        <SkillItem
          skill={{
            name: "React",
            level: "Proficient",
          }}
        />
      </div>
      <div className="section-inputs">
        <div className="section-inputs-container">
          <SectionInput
            id={"name"}
            title={"Skill Name"}
            placeholder={"Enter skill name (example: Microsoft Word)"}
            isRequired={true}
            type={"text"}
          />
          <SectionDropdown
            title={"Skill Level"}
            placeholder={"Select skill level"}
            value={skillLevel}
            onChange={setSkillLevel}
            options={skillOptions}
          />
        </div>
        <button className="add-new-exp-button">Add New Skill</button>
      </div>
      <div className="section-buttons">
        <button className="section-button back-button">
          <i class="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button className="section-button next-button">
          Next Step
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
