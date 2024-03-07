import React, { useState } from 'react'
import FormComponent from '../FormComponent/FormComponent';

type Props = {
    open: boolean;
    offModal: any;
}
const Modal = ({ open, offModal }: Props) => {
    // const [offModals, setOffModals] = useState(false)
    const sum = (num: any) => {
        offModal(num)
    }
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
                        <div className="flex min-h-full   items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform  overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                                    <div className="flex ">
                                        <div className="mt-3 w-[100%] text-center sm:mt-0 sm:text-left">
                                            <h3
                                                className="text-xl mb-3 font-semibold leading-6 text-gray-900"
                                                id="modal-title"
                                            >
                                                Create Payment
                                            </h3>
                                            <form >
                                                <div className="flex items-start mb-6"></div>
                                                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                                                </div> */}
                                            </form>
                                            <FormComponent offModal={sum} />
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