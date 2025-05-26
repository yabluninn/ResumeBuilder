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
}) {
  const dispatch = useDispatch();
  const value = useSelector((state) =>
    slice === "personal"
      ? state.resume.personalInfo[id]
      : state.resume.educationInfo[id]
  );

  const handleChange = (e) => {
    const action = {
      field: id,
      value: e.target.value,
    };

    if (slice === "personal") {
      dispatch(updatePersonalField(action));
    } else {
      dispatch(updateEducationField(action));
    }
  };

  return (
    <div className="section-input-block">
      <label htmlFor={id} className="section-input-label">
        {title + " "}
        {isRequired ? "*" : ""}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="section-input"
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
