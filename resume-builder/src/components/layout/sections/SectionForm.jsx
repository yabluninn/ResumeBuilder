import PersonalSection from "./PersonalSection";

import "../../../styles/SectionForm.css";
import EducationSection from "./EducationSection";
import ExperienceSection from "./experience/ExperienceSection";
import SkillsSection from "./skills/SkillsSection";

export default function SectionForm() {
  return (
    <div className="section-form">
      <SkillsSection />
    </div>
  );
}
