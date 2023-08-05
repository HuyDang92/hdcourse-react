import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ICourseProps {
  idCourse: string;
  linkPre: string;
}

const initialState: ICourseProps = {
  idCourse: '',
  linkPre: '',
};

const courseSlice = createSlice({
  name: 'courseState',
  initialState,
  reducers: {
    getCourse: (state, action: PayloadAction<any>) => {
      state.idCourse = action.payload;
    },
    saveLink: (state, action: PayloadAction<any>) => {
      state.linkPre = action.payload;
    },
  },
});
export const { getCourse, saveLink } = courseSlice.actions;
const courseReducer = courseSlice.reducer;
export default courseReducer;
