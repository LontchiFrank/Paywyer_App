// Step2.js

import React, { useState } from 'react';
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const Step2 = () => {
    const [animal, setAnimal] = useState(null);

    const handleChange = (value: any) => {
        console.log("value:", value);
        setAnimal(value);
    };


    return (
        <div className='m-5 h-full'>
            <div className=" mb-10">
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Select your Currency
                </label> */}
                <div className='w-full h-3/4 flex gap-6'>
                    <div className='w-1/2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                            Currency
                        </label>
                        <Select
                            primaryColor='indigo'
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
                            primaryColor='indigo'
                            value={animal}
                            onChange={handleChange}
                            options={options}
                            isSearchable
                        />
                    </div>
                </div>

            </div>
            <div className='mb-20 w-full'>
                <label
                    // for="title"
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
                    //   value={name}
                    //   onChange={(e) => handleChange(e)}
                    required
                />
            </div>
        </div >
    );
};

export default Step2;
