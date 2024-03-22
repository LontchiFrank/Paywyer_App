// FormComponent.js

import React, { useEffect, useState } from 'react';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import { nanoid } from 'nanoid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import postData, { postApil } from '../../falseapi/postApi';
import { useDispatch } from 'react-redux';
import { createPaymentAsync } from '../../features/PaymentSlice';

const Schema = Yup.object({
  pay_name: Yup.string().required().max(100),
  category: Yup.string().required().max(100),
});

type Props = {
  offModal: any;
  setInfo: any;
  info: any;
  packages: any;
  setPackages: any;
};
interface Payment {
  id: string;
  name: string;
  category: string;
  total_Revenue: [];
}

type Errors = keyof Omit<Payment, 'id' | 'total_Revenue'>;

const FormComponent = ({
  offModal,
  info,
  setInfo,
  packages,
  setPackages,
}: Props) => {
  const formik = useFormik({
    initialValues: {
      pay_name: '',
      category: '',
    },
    validationSchema: Schema,
    onSubmit: function (e) {
      // e.preventDefault();

      console.log(formik.isValid);
    },
  });

  const [formData, setFormData] = useState<Payment>({
    id: '',
    name: '',
    category: '',
    total_Revenue: [],
  });

  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({ name: '', category: '' });

  // Function to handle moving to the next step
  const nextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle moving to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const dispatch = useDispatch();
  const validateStep1 = () => {
    let step1Errors: any = {};
    if (!formData.name.trim()) {
      step1Errors.name = 'Name is required';
    }
    if (!formData.category.trim()) {
      step1Errors.category = 'Category is required';
    }
    setErrors({ ...errors, ...step1Errors });
    return Object.keys(step1Errors).length === 0;
  };

  console.log('Updated array:', packages);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (errors) {
      const data = { ...formData };
      setInfo(data);
      setPackages((prevState: any) => [...prevState, data]);
      localStorage.setItem('dataInfo', JSON.stringify(packages));

      offModal(false);
      dispatch(createPaymentAsync(data));
    }
  };
  console.log(info);
  console.log('New Array', packages);

  useEffect(() => {
    console.log('New Array', packages);
    localStorage.setItem('dataInfo', JSON.stringify(packages));
  }, [packages]);

  return (
    <div>
      <ol className="flex items-center justify-between w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white mb-10  border-b-[1px] border-gray-200 dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li
          className={
            currentStep == 1
              ? 'flex items-center  text-primary dark:text-opacity-80'
              : 'flex items-center text-gray-600 dark:text-gray-500'
          }
        >
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
          </span>
          Payment <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li
          className={
            currentStep == 2
              ? 'flex items-center  text-primary dark:text-primary'
              : 'flex items-center text-gray-600 dark:text-gray-500'
          }
        >
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          Add Wallets <span className="hidden sm:inline-flex sm:ms-2"></span>
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
      </ol>

      {/* Your form fields */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        {currentStep === 1 && (
          <Step1
            setData={setFormData}
            data={formData}
            errors={errors}
            setErrors={{ ...formik.getFieldProps('pay_name') }}

            //   setValid={setValidation}
          />
        )}
        {currentStep === 2 && <Step2 setDatas={setFormData} datas={formData} />}
        {/* Stepper component */}
        <div className="flex justify-between mt-24">
          {currentStep === 1 ? (
            <div></div>
          ) : (
            <button
              onClick={prevStep}
              className="bg-gray-200 px-4 py-2 rounded-lg"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            onClick={currentStep == 2 ? handleSubmit : nextStep}
            className="bg-[#eec643] text-primary px-4 py-2 cursor-pointer rounded-lg"
          >
            {currentStep !== 2 ? 'Next' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
