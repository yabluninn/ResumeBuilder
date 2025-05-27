export default function StepBlock({ isCurrent, isCompleted, title, icon }) {
  const blockClass = isCurrent
    ? "step-icon current-step"
    : isCompleted
    ? "step-icon completed-step"
    : "step-icon";

  const containerClass = isCurrent ? "step-block current-step" : "step-block";

  return (
    <div className={containerClass}>
      <div className={blockClass}>
        <i className={isCompleted ? "fa-solid fa-check" : icon}></i>
      </div>
      <p className="step-title">{title}</p>
    </div>
  );
}
