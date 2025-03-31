export default function StepProgressBar({ percentage }) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  );
}
