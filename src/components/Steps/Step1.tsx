// Step1.js

import React from 'react';

const Step1: React.FC = () => {
    return (
        <div className='mb-7'>
            <div className="mb-6">
                <label
                    // for="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="text"
                    name="name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    //   value={name}
                    //   onChange={(e) => handleChange(e)}
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Select your Category
                </label>
                <select
                    id="countries"
                    name="category"
                    // onClick={(e) => console.log(e, "select")}
                    // onChange={(e) => handleCategory(e)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option>Choose Category</option>
                    <option>Donations</option>
                    <option>Subscriptions</option>
                    <option>POS Terminal link</option>
                    {/* {Category.map((item: any) => (
                              // console.log(first)
                              <option key={item} value={item}>
                                {item}{" "}
                              </option>
                            ))} */}
                </select>
            </div>
        </div>
    );
};

export default Step1;
