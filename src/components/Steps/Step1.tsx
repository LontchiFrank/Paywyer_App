// Step1.js

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object({
  pay_name: Yup.string().required().max(100),
  category: Yup.string().required().max(100),
});

type Props = {
  setData: any;
  data: any;
  errors: any;
  setErrors: any;
};
interface Payment {
  name: string;
  category: string;
}

const Step1 = ({ data, setData, errors, setErrors }: Props) => {
  const formik = useFormik({
    initialValues: {
      pay_name: '',
      category: '',
    },
    validationSchema: Schema,
    onSubmit: function (e) {
      console.log(formik.isValid);
    },
  });

  const { name, category } = data;

  const Category = ['Donations', 'Subscription', 'POS Terminal link'];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, category: e.target.value });
  };

  return (
    <form
      className="mb-7"
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <div className="mb-6">
        <label
          className="mb-3 block text-sm font-medium text-black dark:text-white"
          htmlFor="phoneNumber"
        >
          Name
        </label>
        <input
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        {errors.name == '' ? null : (
          <div className="text-red-600 text-[13px]">{errors.name}</div>
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Select your Category
        </label>
        <select
          id="countries"
          name="category"
          onClick={(e) => console.log(e, 'select')}
          onChange={(e) => handleCategory(e)}
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
        >
          <option>Choose Category</option>
          {Category.map((item: any) => (
            <option key={item} value={item}>
              {item}{' '}
            </option>
          ))}
        </select>
        {errors.category == '' ? null : (
          <div className="text-red-600 text-[13px]">{errors.category}</div>
        )}
      </div>
    </form>
  );
};

export default Step1;
