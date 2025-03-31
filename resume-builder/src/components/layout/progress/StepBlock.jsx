export default function StepBlock({ isCurrent, title, icon }) {
  return (
    <div className={isCurrent ? "step-block current-step" : "step-block"}>
      <div className="step-icon">
        <i class={icon}></i>
      </div>
      <p className="step-title">{title}</p>
    </div>
  );
}
