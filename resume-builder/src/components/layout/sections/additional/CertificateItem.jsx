export default function CertificateItem({ certificate }) {
  return (
    <div className="skill-item">
      <div className="skill-item-info">
        <i className="fa-regular fa-file-lines"></i>
        <div className="skill-info">
          <p className="skill-name">
            {certificate.name} — {certificate.provider}, {certificate.year}
          </p>
        </div>
      </div>
      <button className="exp-remove-button">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
