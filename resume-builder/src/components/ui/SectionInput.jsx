import { useDispatch, useSelector } from "react-redux";
import {
  updatePersonalField,
  updateEducationField,
} from "../../store/resumeSlice";

export default function SectionInput({
  id,
  title,
  placeholder,
  isRequired,
  type,
  slice = "personal",
  value,
  onChange,
}) {
  const dispatch = useDispatch();

  const reduxValue = useSelector((state) => {
    if (slice === "personal") return state.resume.personalInfo[id] ?? "";
    if (slice === "education") return state.resume.educationInfo[id] ?? "";
    return "";
  });

  const currentValue = value !== undefined ? value : reduxValue;

  const handleChange = (e) => {
    const val = e.target.value;

    if (onChange) {
      onChange(val); // локальный setState
    } else {
      const payload = { field: id, value: val };
      if (slice === "personal") dispatch(updatePersonalField(payload));
      else if (slice === "education") dispatch(updateEducationField(payload));
    }
  };

  return (
    <div className="section-input-block">
      <label htmlFor={id} className="section-input-label">
        {title}
        {isRequired ? " *" : ""}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="section-input"
        placeholder={placeholder}
        required={isRequired}
        value={currentValue}
        onChange={handleChange}
      />
    </div>
  );
}
