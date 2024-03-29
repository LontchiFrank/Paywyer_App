import React, { useState, useRef, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  editPayment,
  editPaymentAsync,
  getAllPaymentByIDAsync,
} from '../../features/PaymentSlice';
import ModalDelete from '../../components/Modal/ModalDelete';

const options = [
  { value: 'fox', label: '🦊 Fox' },
  { value: 'Butterfly', label: '🦋 Butterfly' },
  { value: 'Honeybee', label: '🐝 Honeybee' },
];
type Prop = {
  name: any;
  network: any;
  wallet_address: any;
};

function PaymentId() {
  const location = useLocation();
  const [forms, setForms] = useState<Prop>({
    name: '',
    network: '',
    wallet_address: '',
  });
  const [info, setInfo] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const dataObject = location.state.item;

  const data = useSelector((state: any) => state.payments?.data);
  const [elArray, setElArray] = useState<any>(dataObject);
  const [dataArray, setDataArray] = useState<any>();

  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPaymentByIDAsync(dataObject.id));
    setDataArray(data?.total_Revenue);
  }, [data]);

  /* remove currency badge from the array */
  const removeData = (id: string) => {
    let sampleArr = dataArray;
    const filterArray = sampleArr.filter((item: any) => item.id !== id);
    setDataArray(filterArray);
    const newObj = { ...elArray, total_Revenue: filterArray };
    const newCopy = {
      id: dataObject.id,
      newObj,
    };
    console.log(newCopy);
    dispatch(editPaymentAsync(newCopy));
  };

  console.log(dataObject.id);
  const { name, network, wallet_address } = forms;

  const handleChange = (value: any) => {
    console.log('value:', value);
    setForms({ ...forms });
    console.log(value);
    setForms({ ...forms, name: value });
  };
  const handleChange1 = (value: any) => {
    console.log('value:', value);
    setForms({ ...forms });
    console.log(value);
    setForms({ ...forms, network: value });
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value:', e.target.value);
    setForms({ ...forms });
    console.log(e.target.value);
    setForms({ ...forms, wallet_address: e.target.value });
  };

  const load = useSelector((state: any) => state.payments?.loading);
  const handleClick = () => {
    setInfo({ ...forms, id: nanoid() });
    const infos = { ...forms, id: nanoid() };
    const infoSet = [...dataArray, infos];
    setDataArray(infoSet);
    const newObj = {
      ...elArray,
      total_Revenue: infoSet,
    };
    setElArray(newObj);
    const newCopy = {
      id: dataObject.id,
      newObj,
    };
    dispatch(editPaymentAsync(newCopy));
  };

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
  console.log(dataArray);
  const handleModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = (num: boolean) => {
    setOpenModal(num);
  };

  return (
    <DefaultLayout>
      <ModalDelete open={openModal} close={handleCloseModal} />
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
                    : 'rounded-md border border-stroke w-full  p-3 flex gap-2 overflow-x-auto mb-8'
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
                    onChange={(e) => handleChange2(e)}
                    // onChange={(e) => handleAddress(e)}
                    className="border border-gray-300 bg-white  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              </div>
              <div className="flex gap-2 ">
                <button
                  onClick={handleClick}
                  className="flex gap-2 cursor-pointer bg-[#eec643] rounded-md border border-[#eec643] hover:bg-[#eec643] py-2 px-4 text-center hover:text-opacity-70 font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-4"
                >
                  <span className="text-[16px] flex">
                    {' '}
                    {load ? (
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
                    ) : null}{' '}
                    Add Currency{' '}
                  </span>
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
              <div className="w-[20px] h-[25px] flex justify-center items-center">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      d="M2,7 L20,7 M16,2 L21,7 L16,12 M22,17 L4,17 M8,12 L3,17 L8,22"
                    ></path>{' '}
                  </g>
                </svg>
              </div>
            </CardDataStats>
            <CardDataStats title="Total Revenue" total="0" levelUp>
              <div className="w-[20px] h-[25px] flex justify-center items-center">
                <svg
                  fill="#000000"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M136.948 908.811c5.657 0 10.24-4.583 10.24-10.24V610.755c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v287.816c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V610.755c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v287.816c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.96c5.657 0 10.24-4.583 10.24-10.24V551.322c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v347.249c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V551.322c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v347.249c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.342c5.657 0 10.24-4.583 10.24-10.24V492.497c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v406.692c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V492.497c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v406.692c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.958c5.657 0 10.24-4.583 10.24-10.24V441.299c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v457.892c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V441.299c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v457.892c0 28.278-22.922 51.2-51.2 51.2zm-6.205-841.902C677.379 271.088 355.268 367.011 19.245 387.336c-11.29.683-19.889 10.389-19.206 21.679s10.389 19.889 21.679 19.206c342.256-20.702 670.39-118.419 964.372-284.046 9.854-5.552 13.342-18.041 7.79-27.896s-18.041-13.342-27.896-7.79z"></path>
                    <path d="M901.21 112.64l102.39.154c11.311.017 20.494-9.138 20.511-20.449s-9.138-20.494-20.449-20.511l-102.39-.154c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z"></path>
                    <path d="M983.151 92.251l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827c.034-11.311-9.107-20.508-20.418-20.542s-20.508 9.107-20.542 20.418z"></path>
                  </g>
                </svg>
              </div>
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
            <span className="text-[18px] text-red-700 font-bold">
              Danger Zone
            </span>
            <div className="w-full mt-2 p">
              <div className="w-full flex justify-between">
                <div className="flex flex-col">
                  <span>Delete this payment</span>
                  <span>
                    Once you delete a payment, there is no going back. Please be
                    certain.
                  </span>
                </div>
                <button
                  onClick={handleModal}
                  className="w-[340px] border-red-700 bg-[#ffffff] font-medium  rounded border px-6 py-3 hover:bg-red-700 dark:hover:border-red-700 cursor-pointer focus:border-primary focus-visible:outline-none   dark:bg-meta-4 dark:hover:bg-red-700 hover:text-white  "
                >
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
