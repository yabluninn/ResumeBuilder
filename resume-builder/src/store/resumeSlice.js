import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    position: "",
    salary: 0,
    location: "",
  },
  educationInfo: {
    institution: "",
    study: "",
    startDate: "",
    endDate: "",
    level: "",
  },
  experience: [],
  skills: [],
  additionalInfo: {
    languages: [],
    certificates: [],
    hobbies: "",
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalField: (state, action) => {
      const { field, value } = action.payload;
      state.personalInfo[field] = value;
    },
    updateEducationField: (state, action) => {
      const { field, value } = action.payload;
      state.educationInfo[field] = value;
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    removeExperience: (state, action) => {
      const index = action.payload;
      state.experience = state.experience.filter((_, i) => i !== index);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.skills.length) {
        state.skills.splice(index, 1);
      }
    },
    addLanguage(state, action) {
      state.additionalInfo.languages.push(action.payload);
    },
    removeLanguage(state, action) {
      state.additionalInfo.languages.splice(action.payload, 1);
    },
    addCertificate(state, action) {
      state.additionalInfo.certificates.push(action.payload);
    },
    removeCertificate(state, action) {
      state.additionalInfo.certificates.splice(action.payload, 1);
    },
    setHobbies(state, action) {
      state.additionalInfo.hobbies = action.payload;
    },
  },
});

export const {
  updatePersonalField,
  updateEducationField,
  addExperience,
  removeExperience,
  addSkill,
  removeSkill,
  addLanguage,
  removeLanguage,
  addCertificate,
  removeCertificate,
  setHobbies,
} = resumeSlice.actions;
export default resumeSlice.reducer;
