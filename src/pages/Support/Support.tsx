import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa6';

function Support() {
  const [values, setValues] = useState<any>();
  const options = ['Transaction', 'Payment'];
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setData({ ...data, category: e.target.value });
    console.log(e.target.value);
    setValues(e.target.value);
  };
  console.log(values);

  return (
    <DefaultLayout>
      <div className="w-full pb-9">
        <h1 className="text-primary text-[36px] font-[600] dark:text-white ">
          Support
        </h1>
      </div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Ask any problem here
          </h3>
        </div>
        <div className="pt-7 px-7 pb-4">
          <label className="mb-3 block text-black dark:text-white">Email</label>
          <input
            type="text"
            placeholder="johndoe@gmail."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="pt-4 px-7 pb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Select your Problem
          </label>
          <select
            id="countries"
            name="category"
            // onClick={(e) => console.log(e, "select")}
            onChange={(e) => handleCategory(e)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Choose Category</option>
            {options?.map((item: any) => (
              <option key={item} value={item}>
                {item}{' '}
              </option>
            ))}
          </select>
        </div>
        {values == 'Transaction' ? (
          <div className=" w-1/3 pt-0 px-7 pb-4">
            <label className="mb-3 block text-black dark:text-white">
              Transaction ID
            </label>
            <input
              type="text"
              placeholder="Enter Transaction ID"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        ) : null}
        <div className="pt-2 px-7 pb-4">
          <label className="mb-3 block text-black dark:text-white">
            Enter Message
          </label>
          <textarea
            rows={6}
            placeholder="Type message here"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>
        <div className="w-full p-7 flex justify-end ">
          <Link
            to="#"
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Send <FaPaperPlane className="ml-2" />
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Support;
