// Step1.js

import React from 'react';

type Props = {
  setData: any;
  data: any;
};
// interface Payment {
//     name: string;
//     category: string;
// }

const Step1 = ({ data, setData }: Props) => {
  // const [formData, setFormData] = useState<Payment>({
  //     name: "",
  //     category: ""
  // })

  const { name } = data;
  const Category = ['Donations', 'Subscription', 'POS Terminal link'];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(event);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, category: e.target.value });
  };

  return (
    <form className="mb-7">
      <div className="mb-6">
        <label
          className="mb-3 block text-sm font-medium text-black dark:text-white"
          htmlFor="phoneNumber"
        >
          Name
        </label>
        <input
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleCategory(e)}
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
        >
          <option>Choose Category</option>
          {Category.map((item: any) => (
            <option key={item} value={item}>
              {item}{' '}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Step1;
