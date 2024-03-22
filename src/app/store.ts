import { configureStore, } from "@reduxjs/toolkit";
import paymentSlide from "../features/PaymentSlice";
import { paymentApi } from "../services/apiPayment";
// import adminAuthSlide from "../features/adminAuthSlice";
// import authSlide from "../features/authSlice";
// import categorySlide from "../features/CategorySlice";
// import foodSlide from "../features/foodSlice";
// import  {foodApi} from "../services/apiFood"
// import { categoryApi } from "../services/apiCategories";
// import { postCartApi } from "../services/apiAddCart";

// ...

export const store = configureStore({
  reducer: {
    payments: paymentSlide.reducer,
    // admins: adminAuthSlide.reducer,
    // categoryList: categorySlide.reducer,
    // food: foodSlide.reducer,
    [paymentApi.reducerPath]:paymentApi.reducer,
    // [categoryApi.reducerPath]:categoryApi.reducer,
    // [postCartApi.reducerPath]:postCartApi.reducer
  },
     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(paymentApi.middleware
        // foodApi.middleware,categoryApi.middleware,postCartApi.middleware
        )

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
