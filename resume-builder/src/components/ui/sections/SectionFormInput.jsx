import "../../../styles/sections/SectionFormInput.css";

export default function SectionFormInput({ type, placeholder }) {
  return (
    <div>
      <input type={type} className="section-input" placeholder={placeholder} />
      <i></i>
    </div>
  );
}
