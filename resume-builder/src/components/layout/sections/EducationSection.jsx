import SectionInput from "../../ui/SectionInput";
import SectionDropdown from "../../ui/SectionDropdown";
import SectionHeader from "../../ui/SectionHeader";

import { useDispatch, useSelector } from "react-redux";
import { updateEducationField } from "../../../store/resumeSlice";

export default function EducationSection({ onNext, onBack }) {
  const dispatch = useDispatch();
  const educationLevel = useSelector(
    (state) => state.resume.educationInfo.level
  );

  const educationInfo = useSelector((state) => state.resume.educationInfo);

  const handleNext = () => {
    const { institution, study, startDate, endDate, level } = educationInfo;

    if (!institution || !study || !startDate || !endDate || !level) {
      alert("Please fill in all fields.");
      return;
    }

    onNext();
  };

  const handleChange = (value) => {
    dispatch(updateEducationField({ field: "level", value }));
  };

  const levelOptions = [
    { value: "highschool", label: "High School Diploma" },
    { value: "associate", label: "Associate Degree" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "phd", label: "Ph.D. / Doctorate" },
    { value: "bootcamp", label: "Coding Bootcamp" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="section">
      <SectionHeader title={"Education"} />
      <div className="section-inputs">
        <div className="section-inputs-container">
          <SectionInput
            id={"institution"}
            title={"Institution"}
            placeholder={"Enter institution"}
            isRequired={true}
            type={"text"}
            slice="education"
          />
          <SectionInput
            id={"study"}
            title={"Field of Study"}
            placeholder={"Enter field of study"}
            isRequired={true}
            type={"text"}
            slice="education"
          />
        </div>
        <div className="section-inputs-container">
          <SectionInput
            id={"startDate"}
            title={"Start Date"}
            placeholder={""}
            isRequired={true}
            type={"date"}
            slice="education"
          />
          <SectionInput
            id={"endDate"}
            title={"End Date"}
            placeholder={""}
            isRequired={true}
            type={"date"}
            slice="education"
          />
          <SectionDropdown
            title={"Education Level"}
            placeholder={"Select education level"}
            value={educationLevel}
            onChange={handleChange}
            options={levelOptions}
          />
        </div>
      </div>
      <div className="section-buttons">
        <button className="section-button back-button" onClick={onBack}>
          <i class="fa-solid fa-chevron-left"></i>
          Back
        </button>
        <button className="section-button next-button" onClick={handleNext}>
          Next Step
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
