import SectionInput from "../../../ui/SectionInput";
import SectionHeader from "../../../ui/SectionHeader";
import { useState } from "react";
import ExperienceBlock from "./ExperienceBlock";
import ExperienceItem from "./ExperienceItem";

import { useDispatch, useSelector } from "react-redux";
import { addExperience, removeExperience } from "../../../../store/resumeSlice";

export default function ExperienceSection({ onBack, onNext }) {
  const dispatch = useDispatch();
  const experienceList = useSelector((state) => state.resume.experience);

  const [newExperience, setNewExperience] = useState({
    title: "",
    companyName: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const locationOptions = [
    { value: "Remote", label: "Remote" },
    { value: "Office", label: "Office" },
    { value: "Hybrid", label: "Hybrid" },
  ];

  const handleAddExperience = () => {
    const { title, companyName, startDate, endDate, location } = newExperience;

    if (!title || !companyName || !startDate || !endDate || !location) {
      alert("Please fill in all fields for experience.");
      return;
    }

    dispatch(addExperience(newExperience));

    // Очистка
    setNewExperience({
      title: "",
      companyName: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleDelete = (index) => {
    dispatch(removeExperience(index));
  };

  return (
    <div className="section">
      <SectionHeader title={"Experience"} />
      <div className="experience-blocks">
        <div className="experience-list">
          {experienceList.map((item, index) => (
            <ExperienceItem
              key={index}
              experience={item}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
        <ExperienceBlock
          experience={newExperience}
          setExperience={setNewExperience}
          locationOptions={locationOptions}
        />
        <button className="add-new-exp-button" onClick={handleAddExperience}>
          Add New Experience
        </button>
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
