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

export const editInvoiceAsync: any = createAsyncThunk(
  'Invoice/editInvoice',
  async (data: any) => {
    // const { id, formData } = data;
    try {
      const response: any = await axios.put(
        `${API_URL}Invoice/${data.id}`,
        data.obj,
      );
      console.log(response);
      editInvoice(response.data);
      toast('Updated Successfully Created', {
        duration: 8000,
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
      //   myAlert(true, "Edited successfully");
      //   window.location.reload();
    } catch (error: any) {
      console.log(error);
    }
  },
);

export const getInvoiceByIDAsync: any = (id: any) => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}Invoice/${id}`);
    dispatch(getPrivateInvoices(response.data));
    console.log(response.data);
    //   window.location.reload();
  } catch (error: any) {
    throw new Error(error);
  }
};

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
    editInvoice: (state, action) => {
      state.data = arrays.map((item: any) =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
    deleteInvoice: (state, action) => {
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
      })
      .addCase(editInvoiceAsync.pending, (state) => {
        state.loading = true;
        state.authenticate = false;
      })
      .addCase(editInvoiceAsync.fulfilled, (state) => {
        state.loading = false;
        state.authenticate = true;
      });
  },
});

export const {
  getInvoices,
  createInvoices,
  editInvoice,
  deleteInvoice,
  getPrivateInvoices,
} = InvoicesSlide.actions;
export default InvoicesSlide.actions;
