import React from 'react'

type Props = {
    open: boolean;
    offModal: any;
}
const Modal = ({ open, offModal }: Props) => {
    return (
        <div>
            {open ? (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform w-[70%] overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    {/* <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                                        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                                            </span>
                                        </li>
                                        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <span className="me-2">2</span>
                                                Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="me-2">3</span>
                                            Confirmation
                                        </li>
                                    </ol> */}
                                    <div className="flex ">
                                        <div className="mt-3 w-[100%] text-center sm:mt-0 sm:text-left">
                                            <h3
                                                className="text-xl mb-3 font-semibold leading-6 text-gray-900"
                                                id="modal-title"
                                            >
                                                Create Payment
                                            </h3>
                                            <form >
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
                                                        placeholder="Name of Food"
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
                                                        <option>Ecommerce</option>
                                                        <option>Business</option>
                                                        <option>Education</option>
                                                        {/* {Category.map((item: any) => (
                              // console.log(first)
                              <option key={item} value={item}>
                                {item}{" "}
                              </option>
                            ))} */}
                                                    </select>
                                                </div>


                                                <div className="flex items-start mb-6"></div>
                                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="submit"
                                                        // onClick={(e) => handleSubmit(e)}
                                                        className="inline-flex w-full justify-center rounded-md bg-[#eec643] px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-opacity-80 sm:ml-3 sm:w-auto"
                                                    >

                                                        Next
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => offModal(false)}
                                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Modal