import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { FaSearch, FaTimes } from 'react-icons/fa';
import TableThree from '../../components/Tables/TableThree';
import { Package } from '../../types/package';
import { BsPlus } from 'react-icons/bs';

const packageData: Package[] = [];

const Payment: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [arr, setArr] = useState<any[]>();

  const handleClick = () => {
    setOpen(false);
  };
  const handleClick1 = () => {
    setOpenModal(true);
  };
  const handleClick2 = (num: any) => {
    setOpenModal(num);
  };
  // const datas = JSON.parse(localStorage.getItem('dataInfo') || '') || false;
  console.log(arr);
  return (
    <DefaultLayout>
      <div className="w-full pb-9">
        <h1 className="text-primary text-[36px] font-[600] dark:text-white ">
          Payments
        </h1>
      </div>
      {open ? (
        <div
          className="flex flex-col  p-4 mb-10 text-sm text-blue-800 rounded-lg bg-blue-100 border border-blue-300  dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <div className="flex justify-between">
            <div>
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              Here you can create a Payment link (also known as Invoice), share
              it with your customers, and see all the information about the
              Payment links created previously.
            </div>
            <FaTimes
              className="text-primary font-normal"
              onClick={handleClick}
              style={{ fontSize: '20px' }}
            />
          </div>
          <div className="pl-7">
            <span className="font-semibold text-primary">How to Use:</span>
            <ol className="pl-4">
              <li className="list-disc text-primary">
                Press “Create payment link”
              </li>
              <li className="list-disc text-primary">
                Enter the details of your payment link and click “Confirm”
              </li>
              <li className="list-disc text-primary">
                Send the link to your customer.
              </li>
            </ol>
          </div>
        </div>
      ) : null}
      <div className="w-full flex justify-between  pb-9">
        <div className="flex w-full gap-4">
          <div className="w-1/3 ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Payment ID, Order ID..."
                className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />

              <span className="absolute right-4 top-4">
                <FaSearch style={{ color: '#b2b9c5', fontSize: '20px' }} />
              </span>
            </div>
          </div>
          <div className="mb-5">
            <input
              type="submit"
              value="Search"
              className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90"
            />
          </div>
        </div>
        {arr?.length == 0 ? null : (
          <div className="">
            <input
              type="submit"
              value={`Create Payment`}
              onClick={handleClick1}
              className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90"
            />
            {/* <button className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90" type='submit' > Create Payment </button> */}
          </div>
        )}
      </div>
      <TableThree
        data={arr}
        setData={setArr}
        openSet={openModal}
        clickCloseModal={handleClick2}
        setOpen={setOpenModal}
      />
    </DefaultLayout>
  );
};

export default Payment;
