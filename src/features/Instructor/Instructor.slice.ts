import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IInstructorProps {
  idInstructor: string;
}

const initialState: IInstructorProps = {
  idInstructor: '',
};

const instructorSlice = createSlice({
  name: 'instructor',
  initialState,
  reducers: {
    getInstructor: (state, action: PayloadAction<any>) => {
      state.idInstructor = action.payload;
    },
  },
});
export const { getInstructor } = instructorSlice.actions;
const instructorReducer = instructorSlice.reducer;
export default instructorReducer;
