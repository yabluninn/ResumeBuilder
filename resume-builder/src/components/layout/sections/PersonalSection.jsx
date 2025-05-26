import SectionInput from "../../ui/SectionInput";
import SectionHeader from "../../ui/SectionHeader";
import { useSelector } from "react-redux";

export default function PersonalSection({ onNext }) {
  const personalInfo = useSelector((state) => state.resume.personalInfo);

  const handleNext = () => {
    const { name, surname, mail, phone } = personalInfo;

    if (!name || !surname || !mail || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    onNext();
  };

  return (
    <div className="section">
      <SectionHeader title={"Personal Information"} />
      <div className="section-inputs">
        <div className="section-inputs-container">
          <SectionInput
            id="name"
            title="Name"
            placeholder="Enter your name"
            isRequired
            type="text"
          />
          <SectionInput
            id="surname"
            title="Surname"
            placeholder="Enter your surname"
            isRequired
            type="text"
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id="mail"
            title="E-mail"
            placeholder="Enter your e-mail"
            isRequired
            type="email"
          />
          <SectionInput
            id="phone"
            title="Phone Number"
            placeholder="Enter your phone number"
            isRequired
            type="tel"
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id="position"
            title="Job Position"
            placeholder="Enter job position"
            isRequired={false}
            type="text"
          />
          <SectionInput
            id="salary"
            title="Salary"
            placeholder="Enter salary"
            isRequired={false}
            type="number"
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id="location"
            title="Job Location"
            placeholder="Enter job location (example: London, Main street, 5)"
            isRequired={false}
            type="text"
          />
        </div>
      </div>
      <button className="section-button next-button" onClick={handleNext}>
        Next Step
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
