import "../../../styles/StepProgress.css";
import StepBlock from "./StepBlock";
import StepProgressBar from "./StepProgressBar";

const stepTitles = [
  { title: "Personal", icon: "fa-solid fa-user-tie" },
  { title: "Education", icon: "fa-solid fa-user-graduate" },
  { title: "Experience", icon: "fa-solid fa-briefcase" },
  { title: "Skills", icon: "fa-solid fa-screwdriver-wrench" },
  { title: "Additional", icon: "fa-solid fa-plus" },
];

export default function StepProgress({ currentStep }) {
  const progress = ((currentStep + 1) / stepTitles.length) * 100;

  return (
    <div className="step-progress-container">
      <StepProgressBar percentage={progress} />
      {stepTitles.map((step, index) => (
        <StepBlock
          key={step.title}
          isCurrent={index === currentStep}
          isCompleted={index < currentStep}
          title={step.title}
          icon={step.icon}
        />
      ))}
    </div>
  );
}
