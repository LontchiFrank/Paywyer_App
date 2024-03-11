// Step2.js

import React, { useState, useEffect } from 'react';
import { FaPlusCircle, } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import Select from "react-tailwindcss-select";
import { BsTrash3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];
type Props = {
    setDatas: any,
    datas: any
}
type Prop = {
    name: any,
    network: any,
    id: string
}

const Step2 = ({ datas, setDatas }: Props) => {
    const [forms, setForms] = useState<Prop>({
        name: '',
        network: '',
        id: nanoid()
    });
    const { name, network } = forms;
    const handleChange = (value: any) => {
        console.log("value:", value);
        setForms({ ...forms, })
        setForms({ ...forms, name: value })
        // setDatas({ ...datas, total_Revenue: [...total_Revenue, { name: value }] });
    };
    const handleChange1 = (value: any) => {
        console.log("value:", value);
        setForms({ ...forms, network: value })
        // setDatas({ ...datas, total_Revenue: [...total_Revenue, { network: value }] });
    };
    const [data, setData] = useState<{ id: string }[]>([{ id: '' }]);

    // const removeData: any = (id: string) => {
    //     const filter = data.filter(item => item.id !== id)
    //     setData(filter)
    //     console.log(data)

    // }


    const { total_Revenue } = datas;
    const handleClick: any = () => {
        console.log(forms)
        const data1 = { ...total_Revenue, forms };
        // setData([...data, { id: nanoid() }])
        setDatas({ ...datas, total_Revenue: [...total_Revenue, forms] })
    }
    useEffect(() => {
        console.log("Updated array:", datas);
    }, [datas]);


    return (
        <div className=' h-full'>
            <div className=" mb-10">
                <div className='mb-8' >
                    <div className='w-full h-3/4 flex flex-col  mb-8'>
                        <div className='w-full flex justify-center items-center'>
                            <div className='w-[90%] flex gap-2 overflow-x-auto mb-3'>
                                {
                                    datas.total_Revenue.map((el: any, index: any) =>
                                        <span key={index} id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                                            {el.name.label}
                                            <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                                                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span className="sr-only">Remove badge</span>
                                            </button>
                                        </span>
                                        // )
                                    )
                                }
                            </div>
                        </div>
                        <div className='w-full flex justify-end' >
                            {/* <BsTrash3 className='text-[#CA2C2C] text-[0.98rem] cursor-pointer' onClick={() => removeData(el.id)} /> */}
                        </div>
                        <div className='w-full flex gap-6'>
                            <div className='w-1/2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                    Currency
                                </label>
                                <Select
                                    primaryColor='primary'
                                    value={name}
                                    onChange={handleChange}
                                    options={options}
                                    isSearchable
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                    Network
                                </label>
                                <Select
                                    primaryColor='primary'
                                    value={network}
                                    onChange={handleChange1}
                                    options={options}
                                    isSearchable
                                />
                            </div>
                        </div>
                    </div>


                    <div className=' w-full'>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            Wallet Address
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="name"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1jkjfiojieaeioioiugjhfncviiepqncow"
                            required
                        />
                    </div>
                </div>

                <div className=' flex gap-2 '>
                    {/* <span className='flex items-center text-primary hover:text-opacity-60 cursor-pointer' onClick={handleClick}> <FaPlusCircle /></span>
                    <span className='text-primary hover:text-opacity-60 font-medium cursor-pointer' onClick={handleClick}>
                        Add Wallet
                    </span> */}
                    <input
                        type='submit'
                        value='   Add Wallet'
                        className="inline-flex items-center justify-center rounded-md border border-[#eec643] py-4 px-3 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                        onClick={handleClick}
                    />


                </div>
            </div >
        </div>
    );
};

export default Step2;
