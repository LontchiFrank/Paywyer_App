// import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { FaEnvelope, FaUser } from 'react-icons/fa6';
// import userThree from '../images/user/user-03.png';
import DefaultLayout from '../layout/DefaultLayout';
// import Select from "react-tailwindcss-select";
import { FaKey, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import SwitcherThree from '../components/Switchers/SwitcherThree';

const Settings = () => {
  const Category = ['ID Card', 'Passport'];

  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedPassport, setSelectedPassport] = useState<File>();
  const [selectedIDFront, setSelectedFront] = useState<File>();
  const [selectedIDBack, setSelectedIDBack] = useState<File>();
  const [open, setOpen] = useState<any>(false);

  const handleImagePassportChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedPassport(file);
      console.log(selectedPassport);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        console.log(result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(open);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      console.log(selectedImage);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        console.log(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageIDFront = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFront(file);
      // console.log(selectedFile)
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        console.log(result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageIDBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedIDBack(file);
      // console.log(selectedFile)
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        console.log(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [category, setCatetegory] = useState<any>();
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCatetegory(e.target.value);
  };
  // console.log(selectedFile)

  const handleClick = () => {
    setSelectedPassport(undefined);
  };
  const handleClickIDFront = () => {
    setSelectedFront(undefined);
  };
  const handleClickIDBack = () => {
    setSelectedIDBack(undefined);
  };

  const handleImageClick = () => {
    setSelectedImage(undefined);
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270 ">
        {/* <Breadcrumb pageName="Settings" /> */}

        <div className="grid grid-cols-5 gap-8 mb-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className=" rounded border border-stroke flex">
                        <span className="pl-4 flex items-center bg-gray">
                          <FaUser />
                        </span>
                        <input
                          className="w-full bg-gray py-3 pl-2.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Devid Jhon"
                          defaultValue="Devid Jhon"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+990 3343 7865"
                        defaultValue="+990 3343 7865"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className=" rounded border border-stroke flex">
                      <span className="pl-4 flex items-center bg-gray">
                        <FaEnvelope />
                      </span>
                      <input
                        className="w-full    bg-gray py-3 pl-2.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="devidjond45@gmail.com"
                        defaultValue="devidjond45@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Two Factor Authentication (Recommended)
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    A verification code has been sent to your email. This code
                    will be valid in 15minutes.
                  </div>
                  <div className="flex justify-between">
                    <label>Enable 2FA</label>
                    <SwitcherThree open={open} setOpen={setOpen} />
                  </div>

                  {/* <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className=" rounded border border-stroke flex">
                      <span className="pl-4 flex items-center bg-gray">
                        <FaKey />
                      </span>
                      <input
                        className="w-full bg-gray py-3 pl-2.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name=""
                        id=""
                        placeholder="Please Enter the Code here"
                        defaultValue=""
                      />
                      <div className="flex justify-end gap-4.5">
                        <button
                          className="flex justify-center rounded-r-md bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                          type="submit"
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  KYC Verification
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex flex-col  gap-3">
                    <label className="block mb-2 text-md font-medium text-gray-900 dark:text-black">
                      Select any National Identity Card
                    </label>
                    <select
                      id="countries"
                      name="category"
                      // onClick={(e) => console.log(e, "select")}
                      onChange={(e) => handleCategory(e)}
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>Choose Document</option>
                      {Category?.map((item: any) => (
                        <option key={item} value={item}>
                          {item}{' '}
                        </option>
                      ))}
                    </select>
                  </div>
                  {category == 'ID Card' && (
                    <div className="flex flex-col gap-2">
                      {selectedIDFront ? null : (
                        <div className="flex flex-col">
                          <label className="mb-2">
                            Upload the Front of ID Card
                          </label>
                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                              onChange={(e) => handleImageIDFront(e)}
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{' '}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 5Mb)</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedIDBack ? null : (
                        <div className="flex flex-col">
                          <label className="mb-2">
                            Upload the Back of ID Card
                          </label>
                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                              onChange={handleImageIDBack}
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{' '}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 5Mb)</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {selectedIDFront && (
                    <div className="mb-4">
                      <span className="pb-2">
                        <p className="mb-2">Uploaded ID Front Image</p>
                      </span>

                      <div className="w-fit  bg-gray focus:border-primary focus-visible:outline-none dark:border-strokedark  dark:bg-meta-4 dark:text-white dark:focus:border-primary p-2 rounded-md">
                        <div className="flex gap-2 justify-center items-center">
                          {' '}
                          <p className="p-0 m-0">
                            File uploaded: {selectedIDFront.name}
                          </p>
                          <span className="flex gap-2">
                            <div className="w-[30px] h-[40px] flex items-center">
                              <svg
                                viewBox="-16 0 174 174"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {' '}
                                  <g clip-path="url(#clip0)">
                                    {' '}
                                    <path
                                      d="M140.574 92.148C140.754 108.639 140.994 125.129 141.082 141.621C141.113 147.449 140.658 153.279 140.622 159.109C140.57 167.485 134.059 172.548 126.472 172.708C110.982 173.036 95.4872 173.397 79.9963 173.32C61.8053 173.228 43.6149 172.754 25.4284 172.284C21.1686 172.07 16.9241 171.617 12.7152 170.927C7.57737 170.211 2.50251 164.344 2.3148 158.755C1.84092 144.631 1.30934 130.506 1.15379 116.378C0.811838 85.2952 0.732428 54.2094 0.42198 23.1266C0.378005 18.7114 0.383912 14.3974 2.06282 10.2402C3.54352 6.56468 5.60704 3.44306 9.68618 2.31285C10.983 1.9677 12.315 1.77255 13.6564 1.73086C19.4892 1.5018 25.3392 1.52068 31.1583 1.13541C52.4932 -0.277026 73.8248 0.820507 95.159 0.993124C97.2134 0.948027 99.2552 1.32076 101.161 2.08851C103.067 2.85626 104.798 4.00284 106.247 5.45929C113.161 12.0227 120.577 18.0568 127.734 24.3668C130.679 26.9627 133.47 29.733 136.369 32.382C137.179 33.0789 137.835 33.9363 138.296 34.9003C138.758 35.8642 139.013 36.9133 139.047 37.9813C139.282 43.9199 139.69 49.8562 139.743 55.796C139.854 67.9134 139.776 80.0327 139.776 92.152L140.574 92.148ZM93.2753 9.37294C91.3142 9.21673 89.657 8.99482 87.9958 8.96725C73.8517 8.72743 59.7075 8.51011 45.5629 8.31538C39.1689 8.22677 32.7735 8.19067 26.3788 8.15129C23.1299 8.1316 19.8739 8.03013 16.6329 8.19553C12.0995 8.42722 10.6963 9.72231 9.88243 14.1506C9.0643 18.3395 8.87114 22.6262 9.30938 26.8717C9.57113 29.2121 9.70397 31.5653 9.70718 33.9202C9.77676 73.6295 9.83031 113.338 9.86799 153.046C9.83878 153.943 9.88026 154.841 9.99197 155.731C10.8176 160.851 13.5133 163.93 19.1046 164.156C40.7684 165.029 62.432 165.024 84.1037 164.656C95.1045 164.47 106.107 164.383 117.11 164.262C119.801 164.232 122.499 164.339 125.183 164.192C129.592 163.951 131.915 161.526 131.867 157.075C131.815 152.259 131.446 147.446 131.367 142.629C131.271 136.798 131.466 130.96 131.301 125.132C130.897 110.783 130.204 96.4405 129.923 82.0897C129.701 70.6523 129.923 59.2075 129.942 47.7636C129.942 46.7909 129.942 45.819 129.942 44.8293C129.524 44.7269 129.099 44.6557 128.67 44.6165C121.824 44.753 114.978 44.9595 108.132 45.0107C106.113 45.0261 104.1 44.8082 102.131 44.3614C97.5744 43.3185 96.1941 41.6503 95.7386 36.9706C95.3704 33.1776 95.1059 29.3738 94.7665 25.5782C94.3005 20.3407 93.8043 15.1054 93.2753 9.37294ZM102.715 14.948L102.076 15.1845C103.168 22.3425 104.259 29.5001 105.397 36.9692C111.961 36.2617 118.36 36.297 125.466 35.6092L102.715 14.948Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M79.979 109.48C85.1818 105.685 90.1523 102.026 95.1555 98.422C99.0785 95.5997 101.541 95.6956 104.922 99.2089C107.483 101.876 109.85 104.724 112.004 107.73C114.744 111.549 117.023 115.699 119.778 119.506C122.856 123.761 124.455 128.572 125.889 133.505C126.804 136.655 125.287 139.358 121.933 139.993C120.158 140.271 118.362 140.395 116.565 140.367C113.198 140.415 109.829 140.345 106.462 140.364C82.9942 140.501 59.5271 140.651 36.0595 140.812C32.5809 140.839 29.1023 141.186 25.6237 141.285C24.0545 141.358 22.4819 141.264 20.9329 141.001C17.052 140.263 15.6317 136.441 18.095 133.38C22.3835 128.05 26.7586 122.791 31.0773 117.482C34.0511 113.826 36.8662 110.031 39.966 106.486C43.8785 102.013 47.9025 97.6265 52.0801 93.4004C55.0657 90.3812 58.589 89.9218 62.1844 92.4519C66.0765 95.284 69.7612 98.3911 73.2109 101.749C75.6446 104.04 77.651 106.783 79.979 109.48ZM26.009 133.854C46.6489 132.886 66.9245 133.098 87.7704 133.296C86.7984 132.033 86.2234 131.247 85.6097 130.495C81.2123 125.109 76.885 119.666 72.3885 114.37C69.1278 110.527 65.7122 106.807 62.2225 103.169C60.8632 101.753 59.1108 100.713 57.4594 99.4419C53.2688 102.824 49.4017 106.589 45.9079 110.687C42.13 115.133 38.2346 119.482 34.4259 123.901C31.5938 127.194 28.8142 130.535 26.009 133.854ZM98.6413 105.549L83.9079 115.152L98.1373 132.392L116.951 131.818C113.328 124.928 101.526 107.961 98.6413 105.55V105.549Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M83.7801 86.7904C80.1171 86.8442 76.8583 83.8506 76.8701 80.4436C76.8826 77.0241 80.5877 73.7135 84.3734 73.7404C87.5035 73.7627 90.4983 76.8908 90.497 80.1364C90.4951 83.5697 87.2994 86.7392 83.7801 86.7904Z"
                                      fill="#000000"
                                    ></path>{' '}
                                  </g>{' '}
                                  <defs>
                                    {' '}
                                    <clipPath id="clip0">
                                      {' '}
                                      <rect
                                        width="141.113"
                                        height="173.93"
                                        fill="white"
                                        transform="translate(0.334473 0.0107422)"
                                      ></rect>{' '}
                                    </clipPath>{' '}
                                  </defs>{' '}
                                </g>
                              </svg>
                            </div>
                            <FaTimes
                              className="cursor-pointer"
                              onClick={handleClickIDFront}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedIDBack && (
                    <div className="mb-4">
                      <span className="pb-2">
                        <p className="mb-2">Uploaded ID Back Image</p>
                      </span>

                      <div className="w-fit  bg-gray focus:border-primary focus-visible:outline-none dark:border-strokedark  dark:bg-meta-4 dark:text-white dark:focus:border-primary p-2 rounded-md">
                        <div className="flex gap-2 justify-center items-center">
                          {' '}
                          <p className="p-0 m-0">
                            File uploaded: {selectedIDBack.name}
                          </p>
                          <span className="flex gap-2">
                            <div className="w-[30px] h-[40px] flex items-center">
                              <svg
                                viewBox="-16 0 174 174"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {' '}
                                  <g clip-path="url(#clip0)">
                                    {' '}
                                    <path
                                      d="M140.574 92.148C140.754 108.639 140.994 125.129 141.082 141.621C141.113 147.449 140.658 153.279 140.622 159.109C140.57 167.485 134.059 172.548 126.472 172.708C110.982 173.036 95.4872 173.397 79.9963 173.32C61.8053 173.228 43.6149 172.754 25.4284 172.284C21.1686 172.07 16.9241 171.617 12.7152 170.927C7.57737 170.211 2.50251 164.344 2.3148 158.755C1.84092 144.631 1.30934 130.506 1.15379 116.378C0.811838 85.2952 0.732428 54.2094 0.42198 23.1266C0.378005 18.7114 0.383912 14.3974 2.06282 10.2402C3.54352 6.56468 5.60704 3.44306 9.68618 2.31285C10.983 1.9677 12.315 1.77255 13.6564 1.73086C19.4892 1.5018 25.3392 1.52068 31.1583 1.13541C52.4932 -0.277026 73.8248 0.820507 95.159 0.993124C97.2134 0.948027 99.2552 1.32076 101.161 2.08851C103.067 2.85626 104.798 4.00284 106.247 5.45929C113.161 12.0227 120.577 18.0568 127.734 24.3668C130.679 26.9627 133.47 29.733 136.369 32.382C137.179 33.0789 137.835 33.9363 138.296 34.9003C138.758 35.8642 139.013 36.9133 139.047 37.9813C139.282 43.9199 139.69 49.8562 139.743 55.796C139.854 67.9134 139.776 80.0327 139.776 92.152L140.574 92.148ZM93.2753 9.37294C91.3142 9.21673 89.657 8.99482 87.9958 8.96725C73.8517 8.72743 59.7075 8.51011 45.5629 8.31538C39.1689 8.22677 32.7735 8.19067 26.3788 8.15129C23.1299 8.1316 19.8739 8.03013 16.6329 8.19553C12.0995 8.42722 10.6963 9.72231 9.88243 14.1506C9.0643 18.3395 8.87114 22.6262 9.30938 26.8717C9.57113 29.2121 9.70397 31.5653 9.70718 33.9202C9.77676 73.6295 9.83031 113.338 9.86799 153.046C9.83878 153.943 9.88026 154.841 9.99197 155.731C10.8176 160.851 13.5133 163.93 19.1046 164.156C40.7684 165.029 62.432 165.024 84.1037 164.656C95.1045 164.47 106.107 164.383 117.11 164.262C119.801 164.232 122.499 164.339 125.183 164.192C129.592 163.951 131.915 161.526 131.867 157.075C131.815 152.259 131.446 147.446 131.367 142.629C131.271 136.798 131.466 130.96 131.301 125.132C130.897 110.783 130.204 96.4405 129.923 82.0897C129.701 70.6523 129.923 59.2075 129.942 47.7636C129.942 46.7909 129.942 45.819 129.942 44.8293C129.524 44.7269 129.099 44.6557 128.67 44.6165C121.824 44.753 114.978 44.9595 108.132 45.0107C106.113 45.0261 104.1 44.8082 102.131 44.3614C97.5744 43.3185 96.1941 41.6503 95.7386 36.9706C95.3704 33.1776 95.1059 29.3738 94.7665 25.5782C94.3005 20.3407 93.8043 15.1054 93.2753 9.37294ZM102.715 14.948L102.076 15.1845C103.168 22.3425 104.259 29.5001 105.397 36.9692C111.961 36.2617 118.36 36.297 125.466 35.6092L102.715 14.948Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M79.979 109.48C85.1818 105.685 90.1523 102.026 95.1555 98.422C99.0785 95.5997 101.541 95.6956 104.922 99.2089C107.483 101.876 109.85 104.724 112.004 107.73C114.744 111.549 117.023 115.699 119.778 119.506C122.856 123.761 124.455 128.572 125.889 133.505C126.804 136.655 125.287 139.358 121.933 139.993C120.158 140.271 118.362 140.395 116.565 140.367C113.198 140.415 109.829 140.345 106.462 140.364C82.9942 140.501 59.5271 140.651 36.0595 140.812C32.5809 140.839 29.1023 141.186 25.6237 141.285C24.0545 141.358 22.4819 141.264 20.9329 141.001C17.052 140.263 15.6317 136.441 18.095 133.38C22.3835 128.05 26.7586 122.791 31.0773 117.482C34.0511 113.826 36.8662 110.031 39.966 106.486C43.8785 102.013 47.9025 97.6265 52.0801 93.4004C55.0657 90.3812 58.589 89.9218 62.1844 92.4519C66.0765 95.284 69.7612 98.3911 73.2109 101.749C75.6446 104.04 77.651 106.783 79.979 109.48ZM26.009 133.854C46.6489 132.886 66.9245 133.098 87.7704 133.296C86.7984 132.033 86.2234 131.247 85.6097 130.495C81.2123 125.109 76.885 119.666 72.3885 114.37C69.1278 110.527 65.7122 106.807 62.2225 103.169C60.8632 101.753 59.1108 100.713 57.4594 99.4419C53.2688 102.824 49.4017 106.589 45.9079 110.687C42.13 115.133 38.2346 119.482 34.4259 123.901C31.5938 127.194 28.8142 130.535 26.009 133.854ZM98.6413 105.549L83.9079 115.152L98.1373 132.392L116.951 131.818C113.328 124.928 101.526 107.961 98.6413 105.55V105.549Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M83.7801 86.7904C80.1171 86.8442 76.8583 83.8506 76.8701 80.4436C76.8826 77.0241 80.5877 73.7135 84.3734 73.7404C87.5035 73.7627 90.4983 76.8908 90.497 80.1364C90.4951 83.5697 87.2994 86.7392 83.7801 86.7904Z"
                                      fill="#000000"
                                    ></path>{' '}
                                  </g>{' '}
                                  <defs>
                                    {' '}
                                    <clipPath id="clip0">
                                      {' '}
                                      <rect
                                        width="141.113"
                                        height="173.93"
                                        fill="white"
                                        transform="translate(0.334473 0.0107422)"
                                      ></rect>{' '}
                                    </clipPath>{' '}
                                  </defs>{' '}
                                </g>
                              </svg>
                            </div>
                            <FaTimes
                              className="cursor-pointer"
                              onClick={handleClickIDBack}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPassport
                    ? null
                    : category === 'Passport' && (
                        <div className="flex flex-col gap-2">
                          <label className="mb-2">Upload Passport Image</label>
                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                              onChange={(e) => handleImagePassportChange(e)}
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{' '}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 5Mb)</p>
                            </div>
                          </div>
                        </div>
                      )}
                  {selectedPassport && (
                    <div className="mb-4">
                      <span className="pb-2">
                        <p className="mb-2">Uploaded Passport Image</p>
                      </span>

                      <div className="w-fit  bg-gray focus:border-primary focus-visible:outline-none dark:border-strokedark  dark:bg-meta-4 dark:text-white dark:focus:border-primary p-2 rounded-md">
                        <div className="flex gap-2 justify-center items-center">
                          {' '}
                          <p className="p-0 m-0">
                            File uploaded: {selectedPassport.name}
                          </p>
                          <span className="flex gap-2">
                            <div className="w-[30px] h-[40px] flex items-center">
                              <svg
                                viewBox="-16 0 174 174"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {' '}
                                  <g clip-path="url(#clip0)">
                                    {' '}
                                    <path
                                      d="M140.574 92.148C140.754 108.639 140.994 125.129 141.082 141.621C141.113 147.449 140.658 153.279 140.622 159.109C140.57 167.485 134.059 172.548 126.472 172.708C110.982 173.036 95.4872 173.397 79.9963 173.32C61.8053 173.228 43.6149 172.754 25.4284 172.284C21.1686 172.07 16.9241 171.617 12.7152 170.927C7.57737 170.211 2.50251 164.344 2.3148 158.755C1.84092 144.631 1.30934 130.506 1.15379 116.378C0.811838 85.2952 0.732428 54.2094 0.42198 23.1266C0.378005 18.7114 0.383912 14.3974 2.06282 10.2402C3.54352 6.56468 5.60704 3.44306 9.68618 2.31285C10.983 1.9677 12.315 1.77255 13.6564 1.73086C19.4892 1.5018 25.3392 1.52068 31.1583 1.13541C52.4932 -0.277026 73.8248 0.820507 95.159 0.993124C97.2134 0.948027 99.2552 1.32076 101.161 2.08851C103.067 2.85626 104.798 4.00284 106.247 5.45929C113.161 12.0227 120.577 18.0568 127.734 24.3668C130.679 26.9627 133.47 29.733 136.369 32.382C137.179 33.0789 137.835 33.9363 138.296 34.9003C138.758 35.8642 139.013 36.9133 139.047 37.9813C139.282 43.9199 139.69 49.8562 139.743 55.796C139.854 67.9134 139.776 80.0327 139.776 92.152L140.574 92.148ZM93.2753 9.37294C91.3142 9.21673 89.657 8.99482 87.9958 8.96725C73.8517 8.72743 59.7075 8.51011 45.5629 8.31538C39.1689 8.22677 32.7735 8.19067 26.3788 8.15129C23.1299 8.1316 19.8739 8.03013 16.6329 8.19553C12.0995 8.42722 10.6963 9.72231 9.88243 14.1506C9.0643 18.3395 8.87114 22.6262 9.30938 26.8717C9.57113 29.2121 9.70397 31.5653 9.70718 33.9202C9.77676 73.6295 9.83031 113.338 9.86799 153.046C9.83878 153.943 9.88026 154.841 9.99197 155.731C10.8176 160.851 13.5133 163.93 19.1046 164.156C40.7684 165.029 62.432 165.024 84.1037 164.656C95.1045 164.47 106.107 164.383 117.11 164.262C119.801 164.232 122.499 164.339 125.183 164.192C129.592 163.951 131.915 161.526 131.867 157.075C131.815 152.259 131.446 147.446 131.367 142.629C131.271 136.798 131.466 130.96 131.301 125.132C130.897 110.783 130.204 96.4405 129.923 82.0897C129.701 70.6523 129.923 59.2075 129.942 47.7636C129.942 46.7909 129.942 45.819 129.942 44.8293C129.524 44.7269 129.099 44.6557 128.67 44.6165C121.824 44.753 114.978 44.9595 108.132 45.0107C106.113 45.0261 104.1 44.8082 102.131 44.3614C97.5744 43.3185 96.1941 41.6503 95.7386 36.9706C95.3704 33.1776 95.1059 29.3738 94.7665 25.5782C94.3005 20.3407 93.8043 15.1054 93.2753 9.37294ZM102.715 14.948L102.076 15.1845C103.168 22.3425 104.259 29.5001 105.397 36.9692C111.961 36.2617 118.36 36.297 125.466 35.6092L102.715 14.948Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M79.979 109.48C85.1818 105.685 90.1523 102.026 95.1555 98.422C99.0785 95.5997 101.541 95.6956 104.922 99.2089C107.483 101.876 109.85 104.724 112.004 107.73C114.744 111.549 117.023 115.699 119.778 119.506C122.856 123.761 124.455 128.572 125.889 133.505C126.804 136.655 125.287 139.358 121.933 139.993C120.158 140.271 118.362 140.395 116.565 140.367C113.198 140.415 109.829 140.345 106.462 140.364C82.9942 140.501 59.5271 140.651 36.0595 140.812C32.5809 140.839 29.1023 141.186 25.6237 141.285C24.0545 141.358 22.4819 141.264 20.9329 141.001C17.052 140.263 15.6317 136.441 18.095 133.38C22.3835 128.05 26.7586 122.791 31.0773 117.482C34.0511 113.826 36.8662 110.031 39.966 106.486C43.8785 102.013 47.9025 97.6265 52.0801 93.4004C55.0657 90.3812 58.589 89.9218 62.1844 92.4519C66.0765 95.284 69.7612 98.3911 73.2109 101.749C75.6446 104.04 77.651 106.783 79.979 109.48ZM26.009 133.854C46.6489 132.886 66.9245 133.098 87.7704 133.296C86.7984 132.033 86.2234 131.247 85.6097 130.495C81.2123 125.109 76.885 119.666 72.3885 114.37C69.1278 110.527 65.7122 106.807 62.2225 103.169C60.8632 101.753 59.1108 100.713 57.4594 99.4419C53.2688 102.824 49.4017 106.589 45.9079 110.687C42.13 115.133 38.2346 119.482 34.4259 123.901C31.5938 127.194 28.8142 130.535 26.009 133.854ZM98.6413 105.549L83.9079 115.152L98.1373 132.392L116.951 131.818C113.328 124.928 101.526 107.961 98.6413 105.55V105.549Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M83.7801 86.7904C80.1171 86.8442 76.8583 83.8506 76.8701 80.4436C76.8826 77.0241 80.5877 73.7135 84.3734 73.7404C87.5035 73.7627 90.4983 76.8908 90.497 80.1364C90.4951 83.5697 87.2994 86.7392 83.7801 86.7904Z"
                                      fill="#000000"
                                    ></path>{' '}
                                  </g>{' '}
                                  <defs>
                                    {' '}
                                    <clipPath id="clip0">
                                      {' '}
                                      <rect
                                        width="141.113"
                                        height="173.93"
                                        fill="white"
                                        transform="translate(0.334473 0.0107422)"
                                      ></rect>{' '}
                                    </clipPath>{' '}
                                  </defs>{' '}
                                </g>
                              </svg>
                            </div>
                            <FaTimes
                              className="cursor-pointer"
                              onClick={handleClick}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedImage ? null : (
                    <div className="flex flex-col gap-2">
                      <label className="mb-2">Upload Selfie Image</label>
                      <div
                        id="FileUpload"
                        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                          onChange={handleImage}
                        />
                        <div className="flex flex-col items-center justify-center space-y-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                fill="#3C50E0"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                fill="#3C50E0"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                fill="#3C50E0"
                              />
                            </svg>
                          </span>
                          <p>
                            <span className="text-primary">
                              Click to upload
                            </span>{' '}
                            or drag and drop
                          </p>
                          <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                          <p>(max, 5Mb)</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedImage && (
                    <div className="mb-4">
                      <span className="pb-2">
                        <p className="mb-2">Uploaded Passport Image</p>
                      </span>

                      <div className="w-fit  bg-gray focus:border-primary focus-visible:outline-none dark:border-strokedark  dark:bg-meta-4 dark:text-white dark:focus:border-primary p-2 rounded-md">
                        <div className="flex gap-2 justify-center items-center">
                          {' '}
                          <p className="p-0 m-0">
                            File uploaded: {selectedImage.name}
                          </p>
                          <span className="flex gap-2">
                            <div className="w-[30px] h-[40px] flex items-center">
                              <svg
                                viewBox="-16 0 174 174"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {' '}
                                  <g clip-path="url(#clip0)">
                                    {' '}
                                    <path
                                      d="M140.574 92.148C140.754 108.639 140.994 125.129 141.082 141.621C141.113 147.449 140.658 153.279 140.622 159.109C140.57 167.485 134.059 172.548 126.472 172.708C110.982 173.036 95.4872 173.397 79.9963 173.32C61.8053 173.228 43.6149 172.754 25.4284 172.284C21.1686 172.07 16.9241 171.617 12.7152 170.927C7.57737 170.211 2.50251 164.344 2.3148 158.755C1.84092 144.631 1.30934 130.506 1.15379 116.378C0.811838 85.2952 0.732428 54.2094 0.42198 23.1266C0.378005 18.7114 0.383912 14.3974 2.06282 10.2402C3.54352 6.56468 5.60704 3.44306 9.68618 2.31285C10.983 1.9677 12.315 1.77255 13.6564 1.73086C19.4892 1.5018 25.3392 1.52068 31.1583 1.13541C52.4932 -0.277026 73.8248 0.820507 95.159 0.993124C97.2134 0.948027 99.2552 1.32076 101.161 2.08851C103.067 2.85626 104.798 4.00284 106.247 5.45929C113.161 12.0227 120.577 18.0568 127.734 24.3668C130.679 26.9627 133.47 29.733 136.369 32.382C137.179 33.0789 137.835 33.9363 138.296 34.9003C138.758 35.8642 139.013 36.9133 139.047 37.9813C139.282 43.9199 139.69 49.8562 139.743 55.796C139.854 67.9134 139.776 80.0327 139.776 92.152L140.574 92.148ZM93.2753 9.37294C91.3142 9.21673 89.657 8.99482 87.9958 8.96725C73.8517 8.72743 59.7075 8.51011 45.5629 8.31538C39.1689 8.22677 32.7735 8.19067 26.3788 8.15129C23.1299 8.1316 19.8739 8.03013 16.6329 8.19553C12.0995 8.42722 10.6963 9.72231 9.88243 14.1506C9.0643 18.3395 8.87114 22.6262 9.30938 26.8717C9.57113 29.2121 9.70397 31.5653 9.70718 33.9202C9.77676 73.6295 9.83031 113.338 9.86799 153.046C9.83878 153.943 9.88026 154.841 9.99197 155.731C10.8176 160.851 13.5133 163.93 19.1046 164.156C40.7684 165.029 62.432 165.024 84.1037 164.656C95.1045 164.47 106.107 164.383 117.11 164.262C119.801 164.232 122.499 164.339 125.183 164.192C129.592 163.951 131.915 161.526 131.867 157.075C131.815 152.259 131.446 147.446 131.367 142.629C131.271 136.798 131.466 130.96 131.301 125.132C130.897 110.783 130.204 96.4405 129.923 82.0897C129.701 70.6523 129.923 59.2075 129.942 47.7636C129.942 46.7909 129.942 45.819 129.942 44.8293C129.524 44.7269 129.099 44.6557 128.67 44.6165C121.824 44.753 114.978 44.9595 108.132 45.0107C106.113 45.0261 104.1 44.8082 102.131 44.3614C97.5744 43.3185 96.1941 41.6503 95.7386 36.9706C95.3704 33.1776 95.1059 29.3738 94.7665 25.5782C94.3005 20.3407 93.8043 15.1054 93.2753 9.37294ZM102.715 14.948L102.076 15.1845C103.168 22.3425 104.259 29.5001 105.397 36.9692C111.961 36.2617 118.36 36.297 125.466 35.6092L102.715 14.948Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M79.979 109.48C85.1818 105.685 90.1523 102.026 95.1555 98.422C99.0785 95.5997 101.541 95.6956 104.922 99.2089C107.483 101.876 109.85 104.724 112.004 107.73C114.744 111.549 117.023 115.699 119.778 119.506C122.856 123.761 124.455 128.572 125.889 133.505C126.804 136.655 125.287 139.358 121.933 139.993C120.158 140.271 118.362 140.395 116.565 140.367C113.198 140.415 109.829 140.345 106.462 140.364C82.9942 140.501 59.5271 140.651 36.0595 140.812C32.5809 140.839 29.1023 141.186 25.6237 141.285C24.0545 141.358 22.4819 141.264 20.9329 141.001C17.052 140.263 15.6317 136.441 18.095 133.38C22.3835 128.05 26.7586 122.791 31.0773 117.482C34.0511 113.826 36.8662 110.031 39.966 106.486C43.8785 102.013 47.9025 97.6265 52.0801 93.4004C55.0657 90.3812 58.589 89.9218 62.1844 92.4519C66.0765 95.284 69.7612 98.3911 73.2109 101.749C75.6446 104.04 77.651 106.783 79.979 109.48ZM26.009 133.854C46.6489 132.886 66.9245 133.098 87.7704 133.296C86.7984 132.033 86.2234 131.247 85.6097 130.495C81.2123 125.109 76.885 119.666 72.3885 114.37C69.1278 110.527 65.7122 106.807 62.2225 103.169C60.8632 101.753 59.1108 100.713 57.4594 99.4419C53.2688 102.824 49.4017 106.589 45.9079 110.687C42.13 115.133 38.2346 119.482 34.4259 123.901C31.5938 127.194 28.8142 130.535 26.009 133.854ZM98.6413 105.549L83.9079 115.152L98.1373 132.392L116.951 131.818C113.328 124.928 101.526 107.961 98.6413 105.55V105.549Z"
                                      fill="#000000"
                                    ></path>{' '}
                                    <path
                                      d="M83.7801 86.7904C80.1171 86.8442 76.8583 83.8506 76.8701 80.4436C76.8826 77.0241 80.5877 73.7135 84.3734 73.7404C87.5035 73.7627 90.4983 76.8908 90.497 80.1364C90.4951 83.5697 87.2994 86.7392 83.7801 86.7904Z"
                                      fill="#000000"
                                    ></path>{' '}
                                  </g>{' '}
                                  <defs>
                                    {' '}
                                    <clipPath id="clip0">
                                      {' '}
                                      <rect
                                        width="141.113"
                                        height="173.93"
                                        fill="white"
                                        transform="translate(0.334473 0.0107422)"
                                      ></rect>{' '}
                                    </clipPath>{' '}
                                  </defs>{' '}
                                </g>
                              </svg>
                            </div>
                            <FaTimes
                              className="cursor-pointer"
                              onClick={handleImageClick}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
