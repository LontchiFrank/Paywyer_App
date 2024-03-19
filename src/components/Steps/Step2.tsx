// Step2.js

import React, { useState, useEffect } from 'react';
// import { FaPlusCircle, } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import Select from 'react-tailwindcss-select';
// import { BsTrash3 } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

const options = [
  { value: 'fox', label: '🦊 Fox' },
  { value: 'Butterfly', label: '🦋 Butterfly' },
  { value: 'Honeybee', label: '🐝 Honeybee' },
];
type Props = {
  setDatas: any;
  datas: any;
};
type Prop = {
  name: any;
  network: any;
};

const Step2 = ({ datas, setDatas }: Props) => {
  const [forms, setForms] = useState<Prop>({
    name: '',
    network: '',
  });
  const [errors1, setErrors1] = useState<any>({
    name: '',
    network: '',
    wallet_address: '',
  });

  const validateStep2 = () => {
    let step2Errors: any = {};
    if (!forms.name.trim()) {
      step2Errors.name = 'Currency is required';
    }
    if (!forms.network.trim()) {
      step2Errors.category = 'Network is required';
    }
    setErrors1({ ...errors1, ...step2Errors });
    return Object.keys(step2Errors).length === 0;
  };
  useEffect(() => {
    console.log('Updated array:', datas);
    setDatas(datas);
  }, [datas]);
  const [info, setInfo] = useState<any>();
  const { name, network } = forms;
  const handleChange = (value: any) => {
    console.log('value:', value);
    setForms({ ...forms });
    setForms({ ...forms, name: value });
    // setDatas({ ...datas, total_Revenue: [...total_Revenue, { name: value }] });
  };
  const handleChange1 = (value: any) => {
    console.log('value:', value);
    setForms({ ...forms, network: value });
    // setDatas({ ...datas, total_Revenue: [...total_Revenue, { network: value }] });
  };

  const removeData: any = (id: string) => {
    const filter = datas.total_Revenue?.filter((item: any) => item.id !== id);
    setDatas({ ...datas, total_Revenue: filter });
    console.log(datas, 'hey');
  };

  const { total_Revenue } = datas;
  const handleClick: any = () => {
    console.log(forms);
    // setInfo({ ...forms, id: nanoid() })
    const infos = { ...forms, id: nanoid() };
    if (validateStep2()) {
      // Form submission logic here
      setDatas({ ...datas, total_Revenue: [...total_Revenue, infos] });
    }
  };

  return (
    <div className=" h-full">
      <div className=" mb-10">
        <div className="mb-8">
          <div className="w-full h-3/4 flex flex-col  mb-4">
            <div
              className={
                datas.total_Revenue.length == 0
                  ? 'w-full flex justify-center items-center'
                  : 'w-full flex flex-col'
              }
            >
              {datas.total_Revenue.length == 0 ? null : (
                <p className="font-semibold pb-2">Wallets</p>
              )}
              <div
                className={
                  datas.total_Revenue.length == 0
                    ? 'hidden'
                    : 'rounded-md border border-gray-300 w-full  p-3 flex gap-2 overflow-x-auto mb-8'
                }
              >
                {datas.total_Revenue?.map((el: any) => (
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
            <div className="w-full flex justify-end">
              {/* <BsTrash3 className='text-[#CA2C2C] text-[0.98rem] cursor-pointer' onClick={() => removeData(el.id)} /> */}
            </div>
            <div className="w-full flex gap-6">
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
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
                {errors1.name == '' ? null : (
                  <div className="text-red-600 text-[13px]">{errors1.name}</div>
                )}
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Network
                </label>
                <Select
                  primaryColor="primary"
                  value={network}
                  onChange={handleChange1}
                  options={options}
                  isSearchable
                />
                {errors1.network == '' ? null : (
                  <div className="text-red-600 text-[13px]">
                    {errors1.network}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className=" w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Wallet Address
            </label>
            <input
              type="text"
              id="text"
              name="name"
              className="border-stroke bg-gray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1jkjfiojieaeioioiugjhfncviiepqncow"
              required
            />
            <div className="text-red-600 text-[13px]">
              {errors1.wallet_address == '' ? null : (
                <div className="text-red-600 text-[13px]">
                  {errors1.wallet_address}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex gap-2 ">
          <input
            type="submit"
            value="Add Wallet"
            className="inline-flex w-full items-center justify-center cursor-pointer rounded-md border border-[#eec643] hover:bg-[#eec643] py-3 px-3 text-center hover:text-opacity-70 font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-4"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
