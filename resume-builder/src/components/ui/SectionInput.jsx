export default function SectionInput({
  id,
  title,
  placeholder,
  isRequired,
  type,
}) {
  return (
    <div className="section-input-block">
      <label htmlFor={id} className="section-input-label">
        {title + " "}
        {isRequired ? " *" : ""}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="section-input"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
