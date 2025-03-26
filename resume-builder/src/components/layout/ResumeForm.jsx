import "../../styles/ResumeForm.css";
import SectionPersonal from "./sections/SectionPersonal";

export default function ResumeForm() {
  return (
    <div className="form-container">
      <div className="form-section">
        <SectionPersonal />
      </div>
      <div className="form-footer">{/* dots */}</div>
    </div>
  );
}
