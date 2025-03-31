import "../../../styles/StepProgress.css";
import StepBlock from "./StepBlock";
import StepProgressBar from "./StepProgressBar";

export default function StepProgress() {
  return (
    <div className="step-progress-container">
      <StepProgressBar percentage={15} />
      <StepBlock
        isCurrent={true}
        title="Personal"
        icon="fa-solid fa-user-tie"
      />
      <StepBlock
        isCurrent={false}
        title="Education"
        icon="fa-solid fa-user-graduate"
      />
      <StepBlock
        isCurrent={false}
        title="Experience"
        icon="fa-solid fa-briefcase"
      />
      <StepBlock
        isCurrent={false}
        title="Skills"
        icon="fa-solid fa-screwdriver-wrench"
      />
      <StepBlock isCurrent={false} title="Additional" icon="fa-solid fa-plus" />
    </div>
  );
}
