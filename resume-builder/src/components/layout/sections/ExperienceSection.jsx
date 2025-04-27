import SectionInput from "../../ui/SectionInput";
import SectionHeader from "../../ui/SectionHeader";
import SectionDropdown from "../../ui/SectionDropdown";
import { useState } from "react";
import ExperienceBlock from "./experience/ExperienceBlock";
import ExperienceItem from "./experience/ExperienceItem";

export default function ExperienceSection() {
  const [location, setLocation] = useState("");

  const locationOptions = [
    { value: "office", label: "Office" },
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
  ];

  return (
    <div className="section">
      <SectionHeader title={"Experience"} />
      <div className="experience-blocks">
        <div className="experience-list">
          <ExperienceItem
            experience={{
              title: "FullStack Developer (React)",
              companyName: "Stuxlut",
              startDate: "13 Jan 2024",
              endDate: "27 Apr 2025",
              location: "Remote",
            }}
          />
        </div>
        <ExperienceBlock
          location={location}
          setLocation={setLocation}
          locationOptions={locationOptions}
        />
        <button className="add-new-exp-button">Add New Experience</button>
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
