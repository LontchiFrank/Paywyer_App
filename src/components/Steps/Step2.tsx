// Step2.js

import React, { useState } from 'react';
import { FaPlusCircle, } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import Select from "react-tailwindcss-select";
import { BsTrash3 } from 'react-icons/bs';

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const Step2: React.FC = () => {
    const [animal, setAnimal] = useState(null);

    const handleChange = (value: any) => {
        console.log("value:", value);
        setAnimal(value);
    };
    const [data, setData] = useState<{ id: string }[]>([{ id: '' }]);

    const removeData: any = (id: string) => {
        const filter = data.filter(item => item.id !== id)
        setData(filter)
        console.log(data)

    }

    const handleClick: any = () => {
        setData([...data, { id: nanoid() }])
    }


    return (
        <div className=' h-full'>
            <div className=" mb-10">
                {data.length == 0 && <div className='w-full'>
                    <div className='w-full flex justify-center mb-6'>
                        <span className=' text-center text-primary text-[20px] font-normal'>Please Create Wallet
                            <br /><span className=' text-[14px]'> There is no wallet here</span>
                        </span>

                    </div>
                    <div className='mb-3'>
                        <img src='images/1.svg' />
                    </div>
                </div>}
                {
                    data?.map((el) => <div className='mb-8' key={el.id} >
                        <div className='w-full h-3/4 flex flex-col  mb-8'>
                            <div className='w-full flex justify-end' >
                                <BsTrash3 className='text-[#CA2C2C] text-[0.98rem] cursor-pointer' onClick={() => removeData(el.id)} />
                                {/* <h3 className='text-[#CA2C2C] text-[0.98rem] cursor-pointer' onClick={() => removeData(el.id)}>Remove</h3> */}
                            </div>
                            <div className='w-full flex gap-6'>
                                <div className='w-1/2'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                        Currency
                                    </label>
                                    <Select
                                        primaryColor='primary'
                                        value={animal}
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
                                        value={animal}
                                        onChange={handleChange}
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
                    </div>)
                }
                <div className=' flex gap-2 '>
                    <span className='flex items-center text-primary hover:text-opacity-60 cursor-pointer' onClick={handleClick}> <FaPlusCircle /></span>
                    <span className='text-primary hover:text-opacity-60 font-medium cursor-pointer' onClick={handleClick}>
                        Add Wallet
                    </span>
                </div>
            </div >
        </div>
    );
};

export default Step2;
