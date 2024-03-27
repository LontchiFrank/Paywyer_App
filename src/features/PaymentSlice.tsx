import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
// import { data } from "autoprefixer";
import axios from 'axios';
import { useEffect } from 'react';
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

interface Payment {
  data: any[];
  loading: boolean;
  authenticate: null | boolean;
}
const initialState: Payment = {
  data: [],
  loading: false,
  authenticate: null,
};
let arrays: any[];
export const createPaymentAsync: any = createAsyncThunk(
  'food/createFood',
  async (data) => {
    try {
      //   const token = localStorage.getItem('token');
      const res: any = await axios.post(`${API_URL}payments`, data);
      createPayment(res.data);
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
      //   toast.promise(
      //     res,
      //     {
      //       loading: 'Loading',
      //       success: 'Successfuly Created',
      //       error: 'Error when fetching',
      //     },
      //     {
      //       style: {
      //         minWidth: '250px',
      //       },
      //       success: {
      //         duration: 5000,
      //         icon: '🔥',
      //       },
      //     },
      //   );
      window.location.reload();

      //   console.log(token, 'haha');
    } catch (error: any) {
      throw new Error(error);

      console.log(error);
    }
  },
);
export const getAllPaymentByIDAsync: any =
  (id: any) => async (dispatch: any) => {
    try {
      const response = await axios.get(`${API_URL}payments/${id}`);
      dispatch(getPayment(response.data));
      console.log(response.data);
      //   window.location.reload();
    } catch (error: any) {
      throw new Error(error);
    }
  };
export const editPaymentAsync: any = createAsyncThunk(
  'Payment/editPayment',
  async (data: any) => {
    try {
      const response: any = await axios.put(
        `${API_URL}payments/${data.id}`,
        data.newObj,
      );
      console.log(response);
      editPayment(response.data);
      toast('Updated Successfully Created', {
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
      //   myAlert(true, "Edited successfully");
      //   window.location.reload();
    } catch (error: any) {
      console.log(error);
    }
  },
);

export const paymentSlide: Slice<Payment> = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    getPayment: (state, action) => {
      state.data = action.payload;
    },
    createPayment: (state, { payload }) => {
      state.data = [{ ...payload }, ...state.data];
    },
    getPrivatePayment: (state, action) => {
      state.data = action.payload;
    },
    editPayment: (state, action) => {
      state.data = arrays.map((item: any) =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
    deletePayment: (state, action) => {
      state.data = arrays.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentAsync.pending, (state) => {
        state.loading = true;
        state.authenticate = false;
      })
      .addCase(createPaymentAsync.fulfilled, (state) => {
        state.loading = true;
        state.authenticate = true;
      })
      .addCase(editPaymentAsync.pending, (state) => {
        state.loading = true;
        state.authenticate = false;
      })
      .addCase(editPaymentAsync.fulfilled, (state) => {
        state.loading = false;
        state.authenticate = true;
      });
  },
  // [createPaymentAsync.pending]: (state: any) => {
  //       state.loading = true;
  //       state.authenticate = false;
  //     },
  //   },
  //   extraReducers: {
  //     [createPaymentAsync.pending]: (state: any) => {
  //       state.loading = true;
  //       state.authenticate = false;
  //     },
  //     [createPaymentAsync.fulfilled]: (state: any) => {
  //       state.loading = false;
  //       state.authenticate = true;
  //     },
  //     // [editFoodAsync.pending]: (state) => {
  //     //   state.loading = true;
  //     //   state.authenticate = false;
  //     // },
  //     // [editFoodAsync.fulfilled]: (state) => {
  //     //   state.loading = false;
  //     //   state.authenticate = true;
  //     // },
  //     // [deleteFoodAsync.pending]: (state) => {
  //     //   state.loading = true;
  //     //   state.authenticate = false;
  //     // },
  //     // [deleteFoodAsync.fulfilled]: (state) => {
  //     //   state.loading = false;
  //     //   state.authenticate = true;
  //     // },
  //   },
});

export const {
  getPayment,
  createPayment,
  editPayment,
  deletePayment,
  getPrivatePayment,
} = paymentSlide.actions;
export default paymentSlide;
