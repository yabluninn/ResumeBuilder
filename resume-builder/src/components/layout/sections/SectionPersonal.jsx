import "../../../styles/Section.css";

export default function SectionPersonal() {
  return (
    <section className="section">
      <div className="section-header">
        <button className="section-header-button section-back-button">
          Back
        </button>
        <p className="section-title">
          <i class="fa-solid fa-user-tie"></i>Personal Information
        </p>
        <button className="section-header-button section-next-button">
          Next
        </button>
      </div>
    </section>
  );
}
