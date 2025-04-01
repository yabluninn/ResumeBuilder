export default function PersonalSection() {
  return (
    <form className="section">
      <div className="section-header">
        <p className="section-title">Personal Information</p>
      </div>
      <div className="section-inputs">
        <div className="section-inputs-container">
          <div className="section-input-block">
            <label htmlFor="name" className="section-input-label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="section-input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="section-input-block">
            <label htmlFor="surname" className="section-input-label">
              Surname *
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="section-input"
              placeholder="Enter your surname"
              required
            />
          </div>
        </div>
        <div className="section-inputs-container">
          <div className="section-input-block">
            <label htmlFor="mail" className="section-input-label">
              E-mail *
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              className="section-input"
              placeholder="Enter your e-mail"
              required
            />
          </div>
          <div className="section-input-block">
            <label htmlFor="phone" className="section-input-label">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="section-input"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        <div className="section-inputs-container">
          <div className="section-input-block">
            <label htmlFor="position" className="section-input-label">
              Job Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              className="section-input"
              placeholder="Enter job position"
            />
          </div>
          <div className="section-input-block">
            <label htmlFor="salary" className="section-input-label">
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              className="section-input"
              placeholder="Enter salary"
            />
          </div>
        </div>
        <div className="section-inputs-container">
          <div className="section-input-block">
            <label htmlFor="location" className="section-input-label">
              Job Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="section-input"
              placeholder="Enter job location (example: London, Main street, 5)"
            />
          </div>
        </div>
      </div>
      <button className="next-button" type="submit">
        Next Step
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </form>
  );
}
