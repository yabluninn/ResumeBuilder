# 🧾 Resume Builder — Create Professional CVs in Minutes

**Resume Builder** is a modern, minimalistic web app that allows users to create, preview, and download clean, professional resumes in PDF format. Built with **React + Redux Toolkit**, it's designed to be intuitive, responsive, and fast.

---

## 🌟 Features

- 📝 Step-by-step resume builder (multi-step form)
- 🎨 Live preview of your resume
- 📄 Generate and download resume as **PDF**
- 💾 Data is autosaved to browser storage
- 📱 Mobile-responsive UI
- ⚙️ Easily extendable (themes, templates, auth, etc.)

---

## 📸 Screenshots (coming soon)
<!-- Add screenshots or GIFs of preview and export -->

---

## 🚀 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React, Vite              |
| State Mgmt  | Redux Toolkit + React-Redux |
| Styling     | Tailwind CSS (or custom CSS) |
| PDF Export  | @react-pdf/renderer      |
| Storage     | localStorage             |

---

## 🧱 Folder Structure

```
src/
├── components/           # Multi-step form sections
│   ├── PersonalSection.jsx
│   ├── EducationSection.jsx
│   ├── ExperienceSection.jsx
│   ├── SkillsSection.jsx
│   ├── AdditionalSection.jsx
├── ui/                   # Reusable UI components
│   ├── SectionInput.jsx
│   ├── SectionDropdown.jsx
│   ├── SectionTextarea.jsx
├── store/                # Redux Toolkit slice
│   └── resumeSlice.js
├── pdf/                  # PDF template logic
│   └── ResumePDF.jsx
├── App.jsx
└── main.jsx
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/resume-builder.git
cd resume-builder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

App will run at: `http://localhost:5173`

---

## 📦 Core Concepts

- 🔄 **Redux-Powered Form Inputs** — Each section is tied to a centralized state for maximum control and scalability
- 🧠 **Validation on each step** — Prevents incomplete data submission
- 🧾 **PDF Export** — Uses `@react-pdf/renderer` to export a live preview into a clean PDF
- ♻️ **Local autosave** — All data is stored in `localStorage` while editing

---

## 📌 Roadmap

- [x] Multi-step resume creation form  
- [x] Redux integration  
- [ ] Live preview structure  
- [ ] PDF export via `@react-pdf/renderer`  
- [ ] Multiple resume templates  
- [ ] Save/export/share profiles  
- [ ] Resume theme customization  
- [ ] Mobile touch improvements  

---

## 📄 License

This project is open-source under the **MIT License**.

---

## 🙌 Author

Made with ❤️ by **Artem Yablunin**

> Let your resume speak for you — professionally, beautifully, and fast.
