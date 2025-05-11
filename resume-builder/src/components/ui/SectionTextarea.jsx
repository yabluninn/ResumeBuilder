export default function SectionTextarea({
  id,
  title,
  placeholder,
  isRequired,
  rows = 4,
}) {
  return (
    <div className="section-input-block">
      <label htmlFor={id} className="section-input-label">
        {title + " "}
        {isRequired ? " *" : ""}
      </label>
      <textarea
        id={id}
        name={id}
        className="section-textarea"
        placeholder={placeholder}
        rows={rows}
        required={isRequired}
      ></textarea>
    </div>
  );
}
