import { createSlice } from '@reduxjs/toolkit';

const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    departement: '', 
  },
  reducers: {
    setDepartement: (state, action) => {
      state.departement = action.payload;
    },
  },
});

export const { setDepartement } = departmentSlice.actions;
export default departmentSlice.reducer;
