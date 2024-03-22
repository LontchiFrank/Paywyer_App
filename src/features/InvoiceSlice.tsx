import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
// import { data } from "autoprefixer";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const API_URL = 'https://65fc85d79fc4425c6530556a.mockapi.io/payment/v1/';
// const token = localStorage.getItem("token");
// const config = {
//   headers: {
//     "Content-Type": "multipart/form-data",
//     "auth-token": token,
//   },
// };

interface Invoices {
  data: any[];
  loading: boolean;
  authenticate: null | boolean;
}
const initialState: Invoices = {
  data: [],
  loading: false,
  authenticate: null,
};
let arrays: any[];
export const createInvoicesAsync: any = createAsyncThunk(
  'invoice/createInvoice',
  async (data) => {
    try {
      //   const token = localStorage.getItem('token');
      const res: any = await axios.post(`${API_URL}Invoice`, data);
      createInvoices(res.data);
      console.log({ res });
      toast('Successfuly Created', {
        duration: 4000,
        position: 'top-center',

        // Styling
        style: {},
        className: '',

        // Custom Icon
        icon: '👏',

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      window.location.reload();

      //   console.log(token, 'haha');
    } catch (error: any) {
      throw new Error(error);

      console.log(error);
    }
  },
);

export const InvoicesSlide: Slice<Invoices> = createSlice({
  name: 'Invoices',
  initialState,
  reducers: {
    getInvoices: (state, action) => {
      state.data = action.payload;
    },
    createInvoices: (state, { payload }) => {
      state.data = [{ ...payload }, ...state.data];
    },
    getPrivateInvoices: (state, action) => {
      state.data = action.payload;
    },
    editInvoices: (state, action) => {
      state.data = arrays.map((item: any) =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
    deleteInvoices: (state, action) => {
      state.data = arrays.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInvoicesAsync.pending, (state) => {
        state.loading = true;
        state.authenticate = false;
      })
      .addCase(createInvoicesAsync.fulfilled, (state) => {
        state.loading = true;
        state.authenticate = true;
      });
  },
});

export const {
  getInvoices,
  createInvoices,
  editInvoices,
  deleteInvoices,
  getPrivateInvoices,
} = InvoicesSlide.actions;
export default InvoicesSlide.actions;
