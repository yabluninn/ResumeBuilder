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
  },
});

export const {
  updatePersonalField,
  updateEducationField,
  addExperience,
  removeExperience,
} = resumeSlice.actions;
export default resumeSlice.reducer;
