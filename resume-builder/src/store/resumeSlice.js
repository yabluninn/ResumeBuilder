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
  additions: {
    languages: [],
    certificates: [],
    hobbies: [],
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
  },
});

export const {
  updatePersonalField,
  updateEducationField,
  addExperience,
  removeExperience,
  addSkill,
  removeSkill,
} = resumeSlice.actions;
export default resumeSlice.reducer;
