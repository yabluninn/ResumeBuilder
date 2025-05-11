export default function LanguageItem({ language }) {
  return (
    <div className="skill-item">
      <div className="skill-item-info">
        <i className="fa-solid fa-globe"></i>
        <div className="skill-info">
          <p className="skill-name">
            {language.name} — {language.level}
          </p>
        </div>
      </div>
      <button className="exp-remove-button">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
