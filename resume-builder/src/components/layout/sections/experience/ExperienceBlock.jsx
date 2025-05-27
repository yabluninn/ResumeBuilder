import SectionInput from "../../../ui/SectionInput";
import SectionDropdown from "../../../ui/SectionDropdown";

export default function ExperienceBlock({
  experience,
  setExperience,
  locationOptions,
}) {
  const handleChange = (field) => (val) => {
    setExperience({ ...experience, [field]: val });
  };

  return (
    <div className="section-inputs">
      <div className="section-inputs-container">
        <SectionInput
          id="title"
          title="Job Title"
          placeholder="Enter job title"
          isRequired={true}
          type="text"
          value={experience.title}
          onChange={(val) => setExperience({ ...experience, title: val })}
        />
        <SectionInput
          id="companyName"
          title="Company Name"
          placeholder="Enter company name"
          isRequired={true}
          type="text"
          value={experience.companyName}
          onChange={handleChange("companyName")}
        />
      </div>
      <div className="section-inputs-container">
        <SectionInput
          id="startDate"
          title="Start Date"
          type="date"
          isRequired={true}
          value={experience.startDate}
          onChange={handleChange("startDate")}
        />
        <SectionInput
          id="endDate"
          title="End Date"
          type="date"
          isRequired={true}
          value={experience.endDate}
          onChange={handleChange("endDate")}
        />
        <SectionDropdown
          id="location"
          title="Location"
          placeholder="Select location"
          options={locationOptions}
          value={experience.location}
          onChange={(val) => setExperience({ ...experience, location: val })}
        />
      </div>
    </div>
  );
}
