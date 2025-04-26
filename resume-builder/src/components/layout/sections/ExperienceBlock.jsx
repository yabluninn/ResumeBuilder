import SectionInput from "../../ui/SectionInput";
import SectionDropdown from "../../ui/SectionDropdown";

export default function ExperienceBlock({
  location,
  setLocation,
  locationOptions,
}) {
  return (
    <div className="section-inputs">
      <div className="section-inputs-container">
        <SectionInput
          id={"job-title"}
          title={"Job Title"}
          placeholder={"Enter job title"}
          isRequired={true}
          type={"text"}
        />
        <SectionInput
          id={"company"}
          title={"Company Name"}
          placeholder={"Enter company name"}
          isRequired={true}
          type={"text"}
        />
      </div>
      <div className="section-inputs-container">
        <SectionInput
          id={"start-date"}
          title={"Start Date"}
          placeholder={""}
          isRequired={true}
          type={"date"}
        />
        <SectionInput
          id={"end-date"}
          title={"End Date"}
          placeholder={""}
          isRequired={true}
          type={"date"}
        />
        <SectionDropdown
          title={"Location"}
          placeholder={"Select location"}
          value={location}
          onChange={setLocation}
          options={locationOptions}
        />
      </div>
      <div className="exp-block-footer">
        <button>Remove</button>
      </div>
    </div>
  );
}
