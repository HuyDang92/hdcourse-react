import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICatProps {
  idCatgory: string;
  nameCatgory: any;
  nameCatgoryC2: any;
  nameCatgoryC3: any;
}

const initialState: ICatProps = {
  idCatgory: '',
  nameCatgory: null,
  nameCatgoryC2: null,
  nameCatgoryC3: null,
};
const categoriesSlice = createSlice({
  name: 'categoriesState',
  initialState,
  reducers: {
    getIdCat: (state, action: PayloadAction<any>) => {
      state.idCatgory = action.payload;
    },
    getNameCat: (state, action: PayloadAction<any>) => {
      state.nameCatgory = action.payload;
    },
    getNameCatC2: (state, action: PayloadAction<any>) => {
      state.nameCatgoryC2 = action.payload;
    },
    getNameCatC3: (state, action: PayloadAction<any>) => {
      state.nameCatgoryC3 = action.payload;
    },
  },
});
export const { getIdCat, getNameCat, getNameCatC2, getNameCatC3 } = categoriesSlice.actions;
const categoryReducer = categoriesSlice.reducer;
export default categoryReducer;
