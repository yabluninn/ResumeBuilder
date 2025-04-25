import SectionInput from "../../ui/SectionInput";
import SectionHeader from "../../ui/SectionHeader";

export default function PersonalSection() {
  return (
    <form className="section">
      <SectionHeader title={"Personal Information"} />
      <div className="section-inputs">
        <div className="section-inputs-container">
          <SectionInput
            id={"name"}
            title={"Name"}
            placeholder={"Enter your name"}
            isRequired={true}
            type={"text"}
          />
          <SectionInput
            id={"surname"}
            title={"Surname"}
            placeholder={"Enter your surname"}
            isRequired={true}
            type={"text"}
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id={"mail"}
            title={"E-mail"}
            placeholder={"Enter your e-mail"}
            isRequired={true}
            type={"email"}
          />
          <SectionInput
            id={"phone"}
            title={"Phone Number"}
            placeholder={"Enter your phone number"}
            isRequired={true}
            type={"tel"}
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id={"position"}
            title={"Job Position"}
            placeholder={"Enter job position"}
            isRequired={false}
            type={"text"}
          />
          <SectionInput
            id={"salary"}
            title={"Salary"}
            placeholder={"Enter salary"}
            isRequired={false}
            type={"number"}
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id={"location"}
            title={"Job Location"}
            placeholder={"Enter job location (example: London, Main street, 5)"}
            isRequired={false}
            type={"text"}
          />
        </div>
      </div>
      <button className="section-button next-button">
        Next Step
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </form>
  );
}
