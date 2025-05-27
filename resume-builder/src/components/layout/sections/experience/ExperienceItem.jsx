export default function ExperienceItem({ experience, onDelete }) {
  return (
    <div className="exp-item">
      <div className="exp-main-info-block">
        <i className="fa-solid fa-briefcase"></i>
        <div className="exp-main-info">
          <p className="exp-title">{experience.title}</p>
          <p className="exp-company">
            <span>at </span>
            {experience.companyName}
          </p>
        </div>
      </div>
      <div className="exp-date-block">
        <i className="fa-solid fa-clock"></i>
        <div className="exp-date">
          <p>{experience.startDate}</p>
          <span>—</span>
          <p>{experience.endDate}</p>
        </div>
      </div>
      <div className="exp-location-block">
        <i className="fa-solid fa-location-dot"></i>
        <p>{experience.location}</p>
      </div>
      <button className="exp-remove-button" onClick={onDelete}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
