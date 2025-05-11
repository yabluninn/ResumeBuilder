export default function SectionItem({ title, children }) {
  return (
    <div className="section-item">
      <p className="section-item-title">{title}</p>
      {children}
    </div>
  );
}
