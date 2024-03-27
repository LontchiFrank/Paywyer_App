import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { nanoid } from 'nanoid';
import { BsTrash3 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  createInvoicesAsync,
  editInvoiceAsync,
} from '../../features/InvoiceSlice';
import { useLocation } from 'react-router-dom';
import Select from 'react-tailwindcss-select';
import { editPaymentAsync } from '../../features/PaymentSlice';

function InvoicesId() {
  const location = useLocation();
  const dataObject = location.state.item;
  const options = [
    { value: 'fox', label: '🦊 Fox' },
    { value: 'Butterfly', label: '🦋 Butterfly' },
    { value: 'Honeybee', label: '🐝 Honeybee' },
  ];

  const [data, setData] = useState<any>([
    {
      id: nanoid(),
      service: '',
      description: '',
      quantity: 0,
      price_per_unit: 200,
      total: 0,
    },
  ]);
  const load = useSelector((state: any) => state.invoice?.loading);
  //   const { service, description, quantity, price_per_unit, total } = data;
  const [holdData, setHoldData] = useState<any>([]);
  const [formData, setFormData] = useState<any>({
    billing_from: dataObject.billing_from,
    billing_to: dataObject.billing_to,
    email_from: dataObject.email_from,
    email_to: dataObject.email_to,
    address_to: dataObject.address_to,
    address_from: dataObject.address_from,
    date_issued: dataObject.date_issued,
    due_date: dataObject.due_date,
    due_amount: dataObject.due_amount,
    currencies: dataObject.currencies,
    dataSelect: dataObject.dataSelect,
  });
  const [currency, setCurrency] = useState<any>({
    name: '',
    network: '',
    wallet_address: '',
  });
  const [errors, setErrors] = useState({
    billing_from: '',
    billing_to: '',
    email_from: '',
    email_to: '',
    address_to: '',
    address_from: '',
    date_issued: '',
    due_date: '',
    due_amount: 100,
    name: '',
    network: '',
    wallet_address: '',
  });

  const validateStep1 = () => {
    let step1Errors: any = {};
    if (!formData.billing_from.trim()) {
      step1Errors.billing_from = 'Billing from is required';
    }
    if (!formData.billing_to.trim()) {
      step1Errors.billing_to = 'Billing to is required';
    }
    if (!formData.email_from.trim()) {
      step1Errors.email_from = 'Email from is required';
    }
    if (!formData.email_to.trim()) {
      step1Errors.email_to = 'Email to is required';
    }
    if (!formData.address_to.trim()) {
      step1Errors.address_to = 'Address to is required';
    }
    if (!formData.address_from.trim()) {
      step1Errors.address_from = 'Address from is required';
    }
    if (!formData.date_issued.trim()) {
      step1Errors.date_issued = 'Date issued is required';
    }
    if (!formData.due_date.trim()) {
      step1Errors.due_date = 'Due date is required';
    }

    setErrors({ ...errors, ...step1Errors });
    return Object.keys(step1Errors).length === 0;
  };

  const [services, setServices] = useState<any>([
    {
      id: '',
      service: '',
      description: '',
      quantity: 0,
      price_per_unit: 200,
      total: 0,
    },
  ]);

  const {
    billing_from,
    billing_to,
    email_from,
    email_to,
    address_to,
    address_from,
    date_issued,
    due_amount,
    due_date,
    dataSelect,
    currencies,
  } = formData;
  const { network, name, wallet_address } = currency;
  const dispatch = useDispatch();

  /* handleChange for the Currency */

  const handleCurrency = (value: any) => {
    setCurrency({ ...currency });
    setCurrency({ ...currency, name: value });
    // setFormData({ ...formData, currencies: [...currencies, { name: value }] });
    console.log(value);
  };

  /* handleChange for the Network currency */
  const handleNetwork = (value: any) => {
    setCurrency({ ...currency });
    setCurrency({ ...currency, network: value });
    // setFormData({
    //   ...formData,
    //   currencies: [...currencies, { network: value }],
    // });
    console.log(value);
  };

  /* handleChange for the Wallet Address */

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency({ ...currency });
    setCurrency({ ...currency, wallet_address: e.target.value });
    // setFormData({
    //   ...formData,
    //   currencies: [...currencies, { wallet_address: e.target.value }],
    // });
    // console.log(value);
  };

  /* handleChange for the Seviice form */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({
      ...errors,
      billing_from: '',
      billing_to: '',
    });
  };
  console.log(currency);

  /* handleChange for the Seviice form */
  const handleChange1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    const dataTemp = [...dataSelect];
    const index = dataTemp.findIndex((item: any) => item.id == id);
    const activeObj = { ...dataTemp[index], [e.target.name]: e.target.value };

    dataTemp[index] = activeObj;
    const dataSet = [...dataTemp];
    setData([...dataTemp]);

    setFormData({ ...formData, dataSelect: dataSet });
  };
  console.log(data);

  /* Delete function to delete a Row*/

  const removeData: any = (id: string) => {
    const filter = dataSelect.filter((item: any) => item.id !== id);
    setFormData({ ...formData, dataSelect: filter });
    // setData(filter);
  };

  const removeCurrency: any = (id: string) => {
    const filter = formData.currencies.filter((item: any) => item.id !== id);
    setFormData({ ...formData, currencies: filter });
  };

  /* Calculation to get the sum of the amounts */
  const totalAmount = data.map((el: any) => el.total);
  const tots = totalAmount.map(Number);
  console.log(tots);
  let sum = 0;
  tots.forEach((element: any) => {
    sum += element;
  });
  console.log(sum);

  /*  Add function to add a Row in the form */

  const handleClick: any = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ ...formData, dataSelect: [...dataSelect, { id: nanoid() }] });
    // setData();
  };

  /*  Add function to add a wallet currency  in the array  */

  const handleAddWallet: any = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const infos = { ...currency, id: nanoid() };
    setFormData({ ...formData, currencies: [...currencies, infos] });
  };

  /*  Click button to save the form */

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (validateStep1()) {
      const newCopy = {
        id: dataObject.id,
        formData,
      };
      dispatch(editInvoiceAsync(newCopy));
    }
  };

  console.log('Data', formData);
  console.log('Mama', holdData);

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 sm:p-6 xl:p-9">
          <div>
            <div className="mb-10 flex flex-wrap items-center justify-end gap-3.5">
              <button className="inline-flex items-center gap-2.5 rounded bg-primary px-4 py-[7px] font-medium text-white hover:bg-opacity-90">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3419 4.66885L11.5204 0.843848C11.2988 0.618848 10.9942 0.506348 10.6896 0.506348H4.04344C3.10191 0.506348 2.29883 1.29385 2.29883 2.27822V8.8876C2.29883 9.2251 2.57575 9.53447 2.93575 9.53447C3.29575 9.53447 3.57267 9.25322 3.57267 8.8876V2.2501C3.57267 1.96885 3.79421 1.74385 4.07114 1.74385H10.3296V5.34385C10.3296 5.68135 10.6065 5.99072 10.9665 5.99072H14.4834V8.71885C14.4834 9.05635 14.7604 9.36572 15.1204 9.36572C15.4804 9.36572 15.7573 9.08447 15.7573 8.71885V5.5126C15.6742 5.20322 15.5634 4.89385 15.3419 4.66885ZM11.5481 2.64385L13.625 4.7251H11.5481V2.64385Z"
                    fill=""
                  ></path>
                  <path
                    d="M15.0653 14.5688C14.733 14.5688 14.4284 14.8501 14.4284 15.2157V15.7782C14.4284 16.0595 14.2069 16.2845 13.9299 16.2845H4.04379C3.76687 16.2845 3.54533 16.0595 3.54533 15.7782V15.3845C3.54533 15.047 3.26841 14.7376 2.90841 14.7376C2.54841 14.7376 2.27148 15.0188 2.27148 15.3845V15.7501C2.27148 16.7063 3.04687 17.522 4.0161 17.522H13.9023C14.8438 17.522 15.6469 16.7345 15.6469 15.7501V15.1876C15.6746 14.8501 15.3976 14.5688 15.0653 14.5688Z"
                    fill=""
                  ></path>
                  <path
                    d="M12.6014 10.6875H14.1245C14.4568 10.6875 14.7614 10.4063 14.7614 10.0407C14.7614 9.67505 14.4845 9.3938 14.1245 9.3938H12.6014C11.8537 9.3938 11.2168 10.0407 11.2168 10.8V14.2032C11.2168 14.5407 11.4937 14.85 11.8537 14.85C12.2137 14.85 12.4906 14.5688 12.4906 14.2032V12.4313H13.543C13.8753 12.4313 14.1799 12.15 14.1799 11.7844C14.1799 11.4188 13.903 11.1375 13.543 11.1375H12.463V10.7719C12.463 10.7719 12.5183 10.6875 12.6014 10.6875Z"
                    fill=""
                  ></path>
                  <path
                    d="M8.8346 14.8782C9.80383 14.8782 10.6069 14.0626 10.6069 13.0501V11.1938C10.6069 10.1813 9.80383 9.36572 8.8346 9.36572H7.56075C7.22844 9.36572 6.92383 9.64697 6.92383 10.0126V14.2595C6.92383 14.597 7.20075 14.9063 7.56075 14.9063H8.8346V14.8782ZM8.16998 10.6313H8.8069C9.08383 10.6313 9.33306 10.8845 9.33306 11.1938V13.0501C9.33306 13.3595 9.08383 13.6126 8.8069 13.6126H8.16998V10.6313Z"
                    fill=""
                  ></path>
                  <path
                    d="M3.87716 14.8782C4.20947 14.8782 4.51408 14.5969 4.51408 14.2313V12.5438H5.871C6.20331 12.5438 6.50793 12.2625 6.50793 11.8969V10.0407C6.50793 9.70317 6.231 9.3938 5.871 9.3938H3.87716C3.54485 9.3938 3.24023 9.67505 3.24023 10.0407V14.2313C3.26793 14.5969 3.54485 14.8782 3.87716 14.8782ZM4.51408 10.6875H5.23408V11.2782H4.51408V10.6875Z"
                    fill=""
                  ></path>
                </svg>
                Save As PDF
              </button>
            </div>
            <form>
              <div className="flex flex-wrap justify-between gap-5">
                <div>
                  <div className="mb-2">
                    <p className="mb-1.5 font-medium text-black dark:text-white">
                      Billing From:
                    </p>
                    <input
                      required
                      type="text"
                      name="billing_from"
                      value={billing_from}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Company"
                      className="w-full border-stroke bg-gray rounded-lg border py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  {errors.billing_from == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.billing_from}
                    </div>
                  )}
                  <div className="mb-2">
                    <span className="font-medium text-black dark:text-white mb-1.5">
                      Email:{' '}
                    </span>
                    <input
                      type="email"
                      required
                      name="email_from"
                      value={email_from}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your full name"
                      className="w-full bg-gray  rounded-lg border border-stroke  py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  {errors.email_from == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.email_from}
                    </div>
                  )}
                  <span className="mt-1.5 block">
                    <span className="font-medium text-black dark:text-white">
                      Address:{' '}
                    </span>
                    <input
                      type="text"
                      required
                      name="address_from"
                      value={address_from}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your full name"
                      className="w-full bg-gray rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </span>
                  {errors.address_from == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.address_from}
                    </div>
                  )}
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-1.5 font-medium text-black dark:text-white">
                      Billing To:
                    </p>
                    <input
                      type="text"
                      name="billing_to"
                      required
                      value={billing_to}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Company"
                      className="w-full rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  {errors.billing_to == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.billing_to}
                    </div>
                  )}
                  <div className="mb-2">
                    <span className="font-medium text-black dark:text-white mb-1.5">
                      Email:{' '}
                    </span>
                    <input
                      type="text"
                      name="email_to"
                      required
                      value={email_to}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  {errors.email_to == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.email_to}
                    </div>
                  )}
                  <span className="mt-1.5 block">
                    <span className="font-medium text-black dark:text-white">
                      Address:{' '}
                    </span>
                    <input
                      type="text"
                      name="address_to"
                      required
                      value={address_to}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </span>
                  {errors.address_to == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.address_to}
                    </div>
                  )}
                </div>
              </div>
              <div className="my-7.5 grid grid-cols-1 border border-stroke dark:border-strokedark xsm:grid-cols-2 sm:grid-cols-4">
                <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0">
                  <h5 className="mb-1.5 font-bold text-black dark:text-white">
                    Invoice ID :
                  </h5>
                  <span className="text-sm font-medium"> #STK83084398239 </span>
                </div>
                <div className="border-b border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0 sm:border-r">
                  <h5 className="mb-1.5 font-bold text-black dark:text-white">
                    Date Issued :
                  </h5>
                  <span className="text-sm font-medium">
                    {' '}
                    <input
                      type="date"
                      required
                      name="date_issued"
                      value={date_issued}
                      onChange={(e) => handleChange(e)}
                      className="w-full rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />{' '}
                  </span>
                  {errors.date_issued == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.date_issued}
                    </div>
                  )}
                </div>

                <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark xsm:border-b-0">
                  <h5 className="mb-1.5 font-bold text-black dark:text-white">
                    Due Date :
                  </h5>
                  <span className="text-sm font-medium">
                    {' '}
                    <input
                      type="date"
                      required
                      name="due_date"
                      value={due_date}
                      onChange={(e) => handleChange(e)}
                      className="w-full rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </span>
                  {errors.due_date == '' ? null : (
                    <div className="text-red-600 text-[13px]">
                      {errors.due_date}
                    </div>
                  )}
                </div>
                <div className="border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark">
                  <h5 className="mb-1.5 font-bold text-black dark:text-white">
                    Due Amount :
                  </h5>
                  <span className="text-sm font-medium">
                    <input
                      type="number"
                      name="due_amount"
                      required
                      value={due_amount}
                      onChange={(e) => handleChange(e)}
                      placeholder="E.g $4,300"
                      className="w-full rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </span>
                </div>
              </div>
              {/* <div className="w-full "> */}
              <div className="w-full flex justify-end py-5">
                <button
                  onClick={(e) => handleClick(e)}
                  className="float-right inline-flex items-center gap-2.5 rounded bg-[#eec643] px-7.5 py-2.5 font-medium text-primary hover:bg-opacity-90"
                >
                  Add Row
                </button>
                {/* {/* </div> */}
              </div>

              <div className="border border-stroke dark:border-strokedark">
                <div className="max-w-full overflow-x-auto">
                  <div className="min-w-[670px]">
                    <div className="grid grid-cols-14 border-b  border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
                      <div className="col-span-3 ">
                        <h5 className="font-medium text-black dark:text-white">
                          Service
                        </h5>
                      </div>
                      <div className="col-span-4">
                        <h5 className="font-medium text-black dark:text-white">
                          Description
                        </h5>
                      </div>
                      <div className="col-span-2">
                        <h5 className="font-medium text-black dark:text-white">
                          Quantity
                        </h5>
                      </div>
                      <div className="col-span-2">
                        <h5 className="font-medium text-black dark:text-white">
                          Price Per Unit
                        </h5>
                      </div>
                      <div className="col-span-1">
                        <h5 className="text-right font-medium text-black dark:text-white">
                          Total
                        </h5>
                      </div>
                    </div>
                    {dataSelect?.map((el: any) => (
                      <div
                        key={el.id}
                        className="grid grid-cols-14 border-b gap-4  border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark"
                      >
                        <div className="col-span-3">
                          <input
                            type="text"
                            name="service"
                            value={el.service}
                            required
                            onChange={(e) => handleChange1(e, el.id)}
                            placeholder="Enter Service"
                            className="w-[250px]  rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="col-span-4">
                          <input
                            type="text"
                            // name={`description${el.id}`}
                            name="description"
                            value={el.description}
                            required
                            onChange={(e) => handleChange1(e, el.id)}
                            placeholder="Enter desription"
                            className="w-[80%] rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="col-span-2">
                          <input
                            type="number"
                            // name={`quantity${el.id}`}
                            name="quantity"
                            value={el.quantity}
                            required
                            onChange={(e) => handleChange1(e, el.id)}
                            placeholder="E.g 1"
                            className="w-[100%] rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="col-span-2">
                          <input
                            type="number"
                            // name={`price_per_unit${el.id}`}
                            name="price_per_unit"
                            value={el.price_per_unit}
                            required
                            onChange={(e) => handleChange1(e, el.id)}
                            placeholder="E.g $20"
                            className="w-[100%] rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div className="col-span-2">
                          <input
                            type="number"
                            // name={`total${el.id}`}
                            name="total"
                            value={el.total}
                            onChange={(e) => handleChange1(e, el.id)}
                            required
                            placeholder="Enter Total"
                            className="w-[100%] rounded-lg border border-stroke bg-gray py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </div>
                        <div
                          className="col-span-1 flex justify-end items-center"
                          onClick={() => removeData(el.id)}
                        >
                          <BsTrash3
                            className="cursor-pointer"
                            style={{ color: 'red' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col border-b  border-stroke  pl-5 pr-6 justify-start py-10 px-6">
                  <div
                    className={
                      formData.currencies.length == 0
                        ? 'hidden'
                        : 'rounded-md border border-stroke w-full  p-3 flex gap-2 overflow-x-auto mb-8'
                    }
                  >
                    {formData.currencies?.map((el: any) => (
                      <span
                        key={el?.id}
                        id="badge-dismiss-default"
                        className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                      >
                        {el?.name?.label}
                        <button
                          onClick={() => removeCurrency(el?.id)}
                          type="button"
                          className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                          data-dismiss-target="#badge-dismiss-default"
                          aria-label="Remove"
                        >
                          <svg
                            className="w-2 h-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Remove badge</span>
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="w-full flex gap-6">
                    <div className="w-[70%]">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                        Currency
                      </label>
                      <Select
                        // classNames={`border-stroke bg-gray`}
                        classNames={{
                          searchContainer: `border-stroke bg-gray`,
                        }}
                        primaryColor=""
                        value={name}
                        onChange={handleCurrency}
                        options={options}
                        isSearchable
                      />
                      {/* {errors.name == '' ? null : (
                        <div className="text-red-600 text-[13px]">
                          {errors.name}
                        </div>
                      )} */}
                    </div>
                    <div className="w-[70%]">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                        Network
                      </label>
                      <Select
                        primaryColor=""
                        value={network}
                        onChange={handleNetwork}
                        options={options}
                        isSearchable
                      />
                      {/* {errors.network == '' ? null : (
                        <div className="text-red-600 text-[13px]">
                          {errors.network}
                        </div>
                      )} */}
                    </div>
                    <div className=" w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                        Wallet Address
                      </label>
                      <input
                        type="text"
                        id="text"
                        name="name"
                        value={wallet_address}
                        onChange={(e) => handleAddress(e)}
                        className="border-stroke bg-gray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1jkjfiojieaeioioiugjhfncviiepqncow"
                        required
                      />
                      <div className="text-red-600 text-[13px]">
                        {/* {errors.wallet_address == '' ? null : (
                          <div className="text-red-600 text-[13px]">
                            {errors.wallet_address}
                          </div>
                        )} */}
                      </div>
                    </div>
                    <div className="w-full py-2">
                      <button
                        onClick={(e) => handleAddWallet(e)}
                        className="flex items-center gap-2.5 rounded bg-[#eec643] px-7.5 py-2.5 font-medium text-primary hover:bg-opacity-90"
                        style={{ marginTop: '13px' }}
                      >
                        Add Wallet
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end py-10 px-6">
                  <div className="max-w-65 w-full">
                    <p className="mt-4 flex justify-between  pt-5 dark:border-strokedark">
                      <span className="font-medium text-black dark:text-white">
                        Total
                      </span>
                      <span className="font-bold text-meta-3">${sum} </span>
                    </p>
                    <div className=" flex  gap-3">
                      <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="float-right mt-10 inline-flex items-center gap-2.5 rounded bg-primary px-12 py-2.5 font-medium text-white hover:bg-opacity-90"
                      >
                        {/* {load ? (
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline mr-3 w-4 h-4 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            ></path>
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        ) : null} */}
                        Save
                      </button>
                      <button className="float-right mt-10 inline-flex items-center gap-2.5 rounded bg-[#eec643] px-12 py-2.5 font-medium text-primary hover:bg-opacity-90">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default InvoicesId;
