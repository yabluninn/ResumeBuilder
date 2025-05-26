import { useDispatch, useSelector } from "react-redux";
import { updatePersonalField } from "../../store/resumeSlice";

export default function SectionInput({
  id,
  title,
  placeholder,
  isRequired,
  type,
}) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.resume.personalInfo[id] || "");

  const handleChange = (e) => {
    dispatch(updatePersonalField({ field: id, value: e.target.value }));
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
