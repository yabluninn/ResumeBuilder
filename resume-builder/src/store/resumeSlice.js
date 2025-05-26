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
  education: [],
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
  },
});

export const { updatePersonalField } = resumeSlice.actions;
export default resumeSlice.reducer;
