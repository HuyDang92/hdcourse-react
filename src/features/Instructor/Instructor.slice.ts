import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IInstructorProps {
  idInstructor: string;
}

const initialState: IInstructorProps = {
  idInstructor: '',
};

const instructorSlice = createSlice({
  name: 'instructorState',
  initialState,
  reducers: {
    setIdInstructor: (state, action: PayloadAction<any>) => {
      state.idInstructor = action.payload;
    },
  },
});
export const { setIdInstructor } = instructorSlice.actions;
const instructorReducer = instructorSlice.reducer;
export default instructorReducer;
