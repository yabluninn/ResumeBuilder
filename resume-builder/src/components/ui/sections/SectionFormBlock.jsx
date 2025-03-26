import "../../../styles/sections/SectionFormBlock.css";

export default function SectionFormBlock({ title, subtitle, children }) {
  return (
    <div className="section-form-block">
      <p className="section-form-block-title">
        {title} <span>{subtitle}</span>
      </p>
      <div className="section-form-inputs">{children}</div>
    </div>
  );
}
