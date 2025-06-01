import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../../../ui/SectionHeader";
import SectionDropdown from "../../../ui/SectionDropdown";
import SectionInput from "../../../ui/SectionInput";
import SectionTextarea from "../../../ui/SectionTextarea";
import LanguageItem from "./LanguageItem";
import SectionItem from "../SectionItem";
import CertificateItem from "./CertificateItem";

import { useDispatch, useSelector } from "react-redux";
import {
  addLanguage,
  removeLanguage,
  addCertificate,
  removeCertificate,
  setHobbies,
} from "../../../../store/resumeSlice";

export default function AdditionalSection({ onBack }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { languages, certificates, hobbies } = useSelector(
    (state) => state.resume.additionalInfo
  );

  const [newLanguage, setNewLanguage] = useState({ name: "", level: "" });
  const [newCertificate, setNewCertificate] = useState({
    name: "",
    provider: "",
    year: "",
  });

  const handleAddLanguage = () => {
    const { name, level } = newLanguage;
    if (!name.trim() || !level) {
      alert("Please fill in language and level");
      return;
    }
    dispatch(addLanguage(newLanguage));
    setNewLanguage({ name: "", level: "" });
  };

  const handleAddCertificate = () => {
    const { name, provider, year } = newCertificate;
    if (!name.trim() || !provider.trim() || !year) {
      alert("Please fill in all certificate fields");
      return;
    }
    dispatch(addCertificate(newCertificate));
    setNewCertificate({ name: "", provider: "", year: "" });
  };

  const languageOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Elementary", label: "Elementary" },
    { value: "Pre-Intermediate", label: "Pre-Intermediate" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Upper-Intermediate", label: "Upper Intermediate" },
    { value: "Advanced", label: "Advanced" },
    { value: "Fluent", label: "Fluent" },
    { value: "Native", label: "Native" },
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
          {languages.map((lang, index) => (
            <LanguageItem
              key={index}
              language={lang}
              onDelete={() => dispatch(removeLanguage(index))}
            />
          ))}
        </div>
        <div className="section-inputs">
          <div className="section-inputs-container">
            <SectionInput
              id="language"
              title="Language"
              placeholder="Enter language"
              isRequired={true}
              type="text"
              value={newLanguage.name}
              onChange={(val) => setNewLanguage({ ...newLanguage, name: val })}
            />
            <SectionDropdown
              title="Language Level"
              placeholder="Select language level"
              value={newLanguage.level}
              onChange={(val) => setNewLanguage({ ...newLanguage, level: val })}
              options={languageOptions}
            />
          </div>
          <button className="add-new-exp-button" onClick={handleAddLanguage}>
            Add New Language
          </button>
        </div>
      </SectionItem>

      <SectionItem title="Certificates">
        <div className="skills-list">
          {certificates.map((cert, index) => (
            <CertificateItem
              key={index}
              certificate={cert}
              onDelete={() => dispatch(removeCertificate(index))}
            />
          ))}
        </div>
        <div className="section-inputs">
          <div className="section-inputs-container">
            <SectionInput
              id="certificateName"
              title="Certificate Name"
              placeholder="Enter certificate name"
              isRequired={true}
              type="text"
              value={newCertificate.name}
              onChange={(val) =>
                setNewCertificate({ ...newCertificate, name: val })
              }
            />
            <SectionInput
              id="company"
              title="Company Provider"
              placeholder="Enter provider name"
              isRequired={true}
              type="text"
              value={newCertificate.provider}
              onChange={(val) =>
                setNewCertificate({ ...newCertificate, provider: val })
              }
            />
            <SectionDropdown
              title="End Year"
              placeholder="Select end year"
              value={newCertificate.year}
              onChange={(val) =>
                setNewCertificate({ ...newCertificate, year: val })
              }
              options={years}
            />
          </div>
          <button className="add-new-exp-button" onClick={handleAddCertificate}>
            Add New Certificate
          </button>
        </div>
      </SectionItem>

      <SectionItem title="Hobbies">
        <div className="section-inputs">
          <SectionTextarea
            id="hobbies"
            title="Write something about your hobbies"
            placeholder="My hobbies are..."
            isRequired={false}
            value={hobbies}
            onChange={(val) => dispatch(setHobbies(val))}
          />
        </div>
      </SectionItem>

      <div className="section-buttons">
        <button className="section-button back-button" onClick={onBack}>
          <i class="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button
          className="section-button next-button"
          onClick={() => navigate("/generate")}
        >
          Next Step
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
