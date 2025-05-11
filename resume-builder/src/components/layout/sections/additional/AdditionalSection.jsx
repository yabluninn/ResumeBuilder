import { useState } from "react";
import SectionHeader from "../../../ui/SectionHeader";
import SectionDropdown from "../../../ui/SectionDropdown";
import SectionInput from "../../../ui/SectionInput";
import SectionTextarea from "../../../ui/SectionTextarea";
import LanguageItem from "./LanguageItem";
import SectionItem from "../SectionItem";
import CertificateItem from "./CertificateItem";

export default function AdditionalSection() {
  const [languageLevel, setLanguageLevel] = useState("");
  const [certificateEndDate, setCertificateEnd] = useState("");

  const languageOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "elementary", label: "Elementary" },
    { value: "pre-intermediate", label: "Pre-Intermediate" },
    { value: "intermediate", label: "Intermediate" },
    { value: "upper-intermediate", label: "Upper Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "fluent", label: "Fluent" },
    { value: "native", label: "Native" },
  ];

  const years = [
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
  ];

  return (
    <div className="section">
      <SectionHeader title={"Additional"} />
      <SectionItem title="Languages">
        <div className="skills-list">
          <LanguageItem
            language={{
              name: "English",
              level: "Pre-Intermediate",
            }}
          />
        </div>
        <div className="section-inputs">
          <div className="section-inputs-container">
            <SectionInput
              id={"name"}
              title={"Language"}
              placeholder={"Enter language"}
              isRequired={true}
              type={"text"}
            />
            <SectionDropdown
              title={"Language Level"}
              placeholder={"Select language level"}
              value={languageLevel}
              onChange={setLanguageLevel}
              options={languageOptions}
            />
          </div>
          <button className="add-new-exp-button">Add New Language</button>
        </div>
      </SectionItem>
      <SectionItem title="Certificates">
        <div className="skills-list">
          <CertificateItem
            certificate={{
              name: "Meta Frontend Developer",
              provider: "Coursera",
              year: "2024",
            }}
          />
        </div>
        <div className="section-inputs">
          <div className="section-inputs-container">
            <SectionInput
              id={"name"}
              title={"Certificate Name"}
              placeholder={"Enter certificate name"}
              isRequired={true}
              type={"text"}
            />
            <SectionInput
              id={"name"}
              title={"Company Provider"}
              placeholder={"Enter provider name"}
              isRequired={true}
              type={"text"}
            />
            <SectionDropdown
              title={"End Year"}
              placeholder={"Select end year"}
              value={certificateEndDate}
              onChange={setCertificateEnd}
              options={years}
            />
          </div>
          <button className="add-new-exp-button">Add New Certificate</button>
        </div>
      </SectionItem>
      <SectionItem title="Hobbies">
        <div className="section-inputs">
          <SectionTextarea
            id="hobbies"
            title="Write something about your hobbies"
            placeholder="My hobbies are..."
            isRequired={false}
          />
        </div>
      </SectionItem>
      <div className="section-buttons">
        <button className="section-button back-button">
          <i class="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button className="section-button next-button">
          Next Step
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
