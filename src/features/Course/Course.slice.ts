import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ICourseProps {
  idCourse: string;
}

const initialState: ICourseProps = {
  idCourse: '',
};

const courseSlice = createSlice({
  name: 'courseState',
  initialState,
  reducers: {
    getCourse: (state, action: PayloadAction<any>) => {
      state.idCourse = action.payload;
    },
  },
});
export const { getCourse } = courseSlice.actions;
const courseReducer = courseSlice.reducer;
export default courseReducer;
