import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Select from 'react-tailwindcss-select';
import DefaultLayout from '../../layout/DefaultLayout';
import { nanoid } from 'nanoid';

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

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 sm:p-6 xl:p-9">
          <div className="w-full">
            <span className="text-[12px]">Currencies</span>
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
          <div className="w-full flex gap-3">
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
              {/* {errors1.name == '' ? null : (
              <div className="text-red-600 text-[13px]">{errors1.name}</div>
            )} */}
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
              {/* {errors1.network == '' ? null : (
              <div className="text-red-600 text-[13px]">{errors1.network}</div>
            )} */}
            </div>
            <div className="flex gap-2 ">
              <button
                onClick={handleClick}
                className="w-full cursor-pointer bg-[#eec643] rounded-md border border-[#eec643] hover:bg-[#eec643] py-2 px-3 text-center hover:text-opacity-70 font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-2"
              >
                <span className="text-[16px] flex"> Add Currency </span>
              </button>
              {/* <input type="submit" value="Add Wallet" onClick={handleClick} /> */}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default PaymentId;
