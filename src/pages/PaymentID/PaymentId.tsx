import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-tailwindcss-select';
import DefaultLayout from '../../layout/DefaultLayout';
import CardDataStats from '../../components/CardDataStats';
import { nanoid } from 'nanoid';
import ChartPayment from '../../components/Charts/ChartPayment';
import { FaClipboard, FaPlus } from 'react-icons/fa6';
import TransactionPayment from '../Transactions/TransactionPayment';
import { BiClipboard } from 'react-icons/bi';
import { BsClipboard, BsClipboard2 } from 'react-icons/bs';
import { IoMdClipboard } from 'react-icons/io';

const options = [
  { value: 'fox', label: '🦊 Fox' },
  { value: 'Butterfly', label: '🦋 Butterfly' },
  { value: 'Honeybee', label: '🐝 Honeybee' },
];
type Prop = {
  name: any;
  network: any;
};

function PaymentId() {
  const location = useLocation();
  const [forms, setForms] = useState<Prop>({
    name: '',
    network: '',
  });
  const [info, setInfo] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const dataObject = location.state.item;
  const activeIndex = location.state.index;

  //   console.log(dataObject);
  //   const dataArray = dataObject.total_Revenue;
  //   console.log(dataObject?.total_Revenue);

  const [dataArray, setDataArray] = useState<any>(dataObject?.total_Revenue);
  const [originalArr, setOriginalArr] = useState<any>(
    location.state.originalArr,
  );

  const removeData = (id: string) => {
    let sampleArr = dataArray;
    const filterArray = sampleArr.filter((item: any) => item.id !== id);
    setDataArray(filterArray);
    let copy = originalArr;

    copy[activeIndex]['total_Revenue'] = filterArray;

    setOriginalArr(copy);
    localStorage.setItem('dataInfo', JSON.stringify(copy));

    //GET CURRENT ID
    // let currentIndex: any;
    // copy.map((item: any, index1: number) => {
    //   filterArray.map((elem: any, index2: number) => {
    //     if (item.id === elem.id) {
    //       currentIndex = index1;
    //     }
    //   });
    // });

    // console.log(originalArr, filterArray);

    // originalArr?.total_Revenue
  };
  const { name, network } = forms;

  const handleChange = (value: any) => {
    console.log('value:', value);
    setForms({ ...forms });
    console.log(value);
    setForms({ ...forms, name: value });

    // setDatas({ ...datas, total_Revenue: [...total_Revenue, { name: value }] });
  };
  const handleChange1 = (value: any) => {
    console.log('value:', value);
    setForms({ ...forms });
    console.log(value);
    setForms({ ...forms, network: value });
    // setDatas({ ...datas, total_Revenue: [...total_Revenue, { name: value }] });
  };
  const handleClick = () => {
    setInfo({ ...forms, id: nanoid() });
    const infos = { ...forms, id: nanoid() };
    setDataArray([...dataArray, infos]);
  };
  let copy = originalArr;
  copy[activeIndex]['total_Revenue'] = dataArray;
  localStorage.setItem('dataInfo', JSON.stringify(copy));
  console.log(dataArray);

  /// Copy Handler
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      inputRef.current.blur();
      setOpen(true);
      setTimeout(() => setOpen(false), 1000);
    }
  };

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-6 sm:p-6 xl:p-12">
          <div className='"rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark mb-3'>
            <div className="w-full">
              <span className="text-[12px] dark:text-white">Currencies</span>
              {dataArray?.length == 0 && null}
              <div
                className={
                  dataArray?.length == 0
                    ? 'hidden'
                    : 'rounded-md border border-gray-300 w-full  p-3 flex gap-2 overflow-x-auto mb-8'
                }
              >
                {dataArray?.map((el: any) => (
                  <span
                    key={el?.id}
                    id="badge-dismiss-default"
                    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {el?.name?.label}
                    <button
                      onClick={() => removeData(el?.id)}
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
            </div>
            <div className="w-full flex flex-col gap-3 ">
              <div className="w-full flex gap-3">
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Currency
                  </label>
                  <Select
                    //   classNames={`border-stroke bg-gray`}
                    primaryColor="red"
                    value={name}
                    onChange={handleChange}
                    options={options}
                    isSearchable
                  />
                  {/* {errors1.name == '' ? null : (
              <div className="text-red-600 text-[13px]">{errors1.name}</div>
            )} */}
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Network
                  </label>
                  <Select
                    primaryColor="primary"
                    value={network}
                    onChange={handleChange1}
                    options={options}
                    isSearchable
                  />
                  {/* {errors1.network == '' ? null : (
              <div className="text-red-600 text-[13px]">{errors1.network}</div>
            )} */}
                </div>
              </div>
              <div className="flex gap-2 ">
                <button
                  onClick={handleClick}
                  className="flex gap-2 cursor-pointer bg-[#eec643] rounded-md border border-[#eec643] hover:bg-[#eec643] py-2 px-4 text-center hover:text-opacity-70 font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-4"
                >
                  <span className="text-[16px] flex"> Add Currency </span>
                  <FaPlus style={{ fontSize: '15px' }} className="mt-1" />
                </button>
                {/* <input type="submit" value="Add Wallet" onClick={handleClick} /> */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-2">
            <CardDataStats
              title="Total Transactions"
              total="0"
              // rate=""
              levelUp
            >
              <svg
                className="fill-primary dark:fill-white"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                  fill=""
                />
                <path
                  d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                  fill=""
                />
              </svg>
            </CardDataStats>
            <CardDataStats title="Total Revenue" total="0" levelUp>
              <svg
                className="fill-primary dark:fill-white"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
                  fill=""
                />
                <path
                  d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
                  fill=""
                />
              </svg>
            </CardDataStats>
          </div>
          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <ChartPayment />
          </div>
          <div className="mt-6">
            <TransactionPayment />
          </div>
          <div className="w-full mt-7  ">
            <span className="text-[18px] font-bold">Developer</span>
            <div className="w-full mt-6 mb-3">
              <div className="w-full inline-flex rounded border border-stroke bg-gray focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4">
                <input
                  className="w-full  bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  ref={inputRef}
                  type="text"
                  defaultValue="Text to copy"
                />
                <button onClick={handleCopy}>
                  <IoMdClipboard className="text-[18px] mr-5" />{' '}
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              {open && (
                <div className=" w-[300px] rounded border border-stroke  flex justify-center items-center bg-green-50 p-3">
                  <span className="text-green-500 ">Copied to Clipboard!</span>
                </div>
              )}
            </div>
          </div>
          <div className="w-full mt-4 ">
            <span className="text-[18px] font-bold">Danger Zone</span>
            <div className="w-full mt-2 p">
              <div className="w-full flex justify-between">
                <div className="flex flex-col">
                  <span>Delete this payment</span>
                  <span>
                    Once you delete a payment, there is no going back. Please be
                    certain.
                  </span>
                </div>
                <button className="w-[340px] border-red-700 bg-[#ffffff] font-medium  rounded border px-6 py-3 hover:bg-red-700 dark:hover:border-red-700 cursor-pointer focus:border-primary focus-visible:outline-none   dark:bg-meta-4 dark:hover:bg-red-700 hover:text-white  ">
                  Delete Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default PaymentId;
