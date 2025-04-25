import { useState, useRef, useEffect } from "react";

const SectionDropdown = ({ value, onChange, title, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const handleSelect = (option) => {
    onChange(option.value);
    setOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = options.find((opt) => opt.value === value);

  return (
    <div className="section-input-block" ref={dropdownRef}>
      <label className="section-input-label">{title}</label>

      <div
        className="section-input section-dropdown"
        style={{ position: "relative", cursor: "pointer", userSelect: "none" }}
        onClick={() => setOpen(!open)}
      >
        {current ? current.label : "Select education level"}
        <span style={{ float: "right" }}>▾</span>

        {open && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginTop: "4px",
              zIndex: 100,
              maxHeight: "200px",
              overflowY: "auto",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
              padding: "8px",
            }}
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "8px 6px",
                  cursor: "pointer",
                  backgroundColor: option.value === value ? "#f0f0f0" : "white",
                  listStyle: "none",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f9f9f9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    option.value === value ? "#f0f0f0" : "white")
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SectionDropdown;
