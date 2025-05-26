import PersonalSection from "./PersonalSection";

import "../../../styles/SectionForm.css";
import EducationSection from "./EducationSection";
import ExperienceSection from "./experience/ExperienceSection";
import SkillsSection from "./skills/SkillsSection";
import AdditionalSection from "./additional/AdditionalSection";
import StepProgress from "../progress/StepProgress";

import { useState } from "react";

const steps = [
  { id: "personal", component: PersonalSection },
  { id: "education", component: EducationSection },
  { id: "experience", component: ExperienceSection },
  { id: "skills", component: SkillsSection },
  { id: "additional", component: AdditionalSection },
];

export default function SectionForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = steps[currentStep].component;

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="section-form">
      <StepProgress currentStep={currentStep} />
      <StepComponent onNext={goNext} onBack={goBack} />
    </div>
  );
}
