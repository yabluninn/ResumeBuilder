import SectionInput from "../../../ui/SectionInput";
import SectionDropdown from "../../../ui/SectionDropdown";
import SectionHeader from "../../../ui/SectionHeader";
import SkillItem from "./SkillItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, removeSkill } from "../../../../store/resumeSlice";

export default function SkillsSection({ onNext, onBack }) {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);

  const [newSkill, setNewSkill] = useState({
    name: "",
    level: "",
  });

  const skillOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Proficient", label: "Proficient" },
    { value: "Advanced", label: "Advanced" },
    { value: "Expert", label: "Expert" },
  ];

  const handleAddSkill = () => {
    const { name, level } = newSkill;

    if (!name.trim() || !level) {
      alert("Please fill in both the skill name and level.");
      return;
    }

    dispatch(addSkill(newSkill));
    setNewSkill({ name: "", level: "" });
  };

  const handleRemoveSkill = (index) => {
    dispatch(removeSkill(index));
  };

  return (
    <div className="section">
      <SectionHeader title="Skills" />

      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            skill={skill}
            onDelete={() => handleRemoveSkill(index)}
          />
        ))}
      </div>

      <div className="section-inputs">
        <div className="section-inputs-container">
          <SectionInput
            id="name"
            title="Skill Name"
            placeholder="Enter skill name (example: Microsoft Word)"
            isRequired={true}
            type="text"
            value={newSkill.name}
            onChange={(val) => setNewSkill({ ...newSkill, name: val })}
          />
          <SectionDropdown
            id="level"
            title="Skill Level"
            placeholder="Select skill level"
            value={newSkill.level}
            onChange={(val) => setNewSkill({ ...newSkill, level: val })}
            options={skillOptions}
          />
        </div>
        <button className="add-new-exp-button" onClick={handleAddSkill}>
          Add New Skill
        </button>
      </div>

      <div className="section-buttons">
        <button className="section-button back-button" onClick={onBack}>
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button className="section-button next-button" onClick={onNext}>
          Next Step
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
