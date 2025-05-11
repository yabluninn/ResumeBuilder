import PersonalSection from "./PersonalSection";

import "../../../styles/SectionForm.css";
import EducationSection from "./EducationSection";
import ExperienceSection from "./experience/ExperienceSection";
import SkillsSection from "./skills/SkillsSection";
import AdditionalSection from "./additional/AdditionalSection";

export default function SectionForm() {
  return (
    <div className="section-form">
      <AdditionalSection />
    </div>
  );
}
