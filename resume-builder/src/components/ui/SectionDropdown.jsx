import { useDispatch, useSelector } from "react-redux";
import {
  updatePersonalField,
  updateEducationField,
} from "../../store/resumeSlice";

export default function SectionDropdown({
  id,
  title,
  placeholder,
  options = [],
  isRequired = false,
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
    let selectedValue = e.target.value;

    // Преобразуем первую букву в верхний регистр
    selectedValue =
      selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);

    if (onChange) {
      onChange(selectedValue);
    } else {
      const payload = { field: id, value: selectedValue };
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
      <select
        id={id}
        name={id}
        className="section-input"
        required={isRequired}
        value={currentValue}
        onChange={handleChange}
      >
        <option value="">{placeholder || "Select option"}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
