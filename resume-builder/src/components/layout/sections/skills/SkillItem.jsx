export default function SkillItem({ skill, onDelete }) {
  return (
    <div className="skill-item">
      <div className="skill-item-info">
        <i className="fa-solid fa-tools"></i>
        <div className="skill-info">
          <p className="skill-name">{skill.name}</p>
          <p>{skill.level}</p>
        </div>
      </div>
      <button className="exp-remove-button" onClick={onDelete}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
