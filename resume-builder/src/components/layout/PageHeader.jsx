import "../../styles/PageHeader.css";
import StepProgress from "./progress/StepProgress";

export default function PageHeader() {
  return (
    <div className="page-header">
      <p className="page-step-title">Personal</p>
      <StepProgress />
    </div>
  );
}
