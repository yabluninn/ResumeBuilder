import "../../../styles/Section.css";
import SectionFormBlock from "../../ui/sections/SectionFormBlock";
import SectionFormInput from "../../ui/sections/SectionFormInput";

export default function SectionPersonal() {
  return (
    <section className="section">
      <div className="section-header">
        <button className="section-header-button section-back-button">
          Back
        </button>
        <p className="section-title">
          <i class="fa-solid fa-user-tie"></i>Personal Information
        </p>
        <button className="section-header-button section-next-button">
          Next
        </button>
      </div>
      <div className="section-form-container">
        <form action="" className="section-form">
          <SectionFormBlock title="Full Name">
            <SectionFormInput type="text" placeholder="Name" />
            <SectionFormInput type="text" placeholder="Surname" />
          </SectionFormBlock>
          <SectionFormBlock title="Job Preferences">
            <SectionFormInput type="text" placeholder="Position" />
            <SectionFormInput type="text" placeholder="Location" />
          </SectionFormBlock>
          <SectionFormBlock
            title="Personal Details"
            subtitle="(Gender and Birth Date)"
          >
            <SectionFormInput type="text" placeholder="Gender" />
            <SectionFormInput type="text" placeholder="Birth Date" />
          </SectionFormBlock>
        </form>
      </div>
    </section>
  );
}
