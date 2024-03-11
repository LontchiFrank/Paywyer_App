import React, { useState } from 'react'
import FormComponent from '../FormComponent/FormComponent';
import { FaTimes } from 'react-icons/fa';

type Props = {
    open: boolean;
    offModal: any;
    info: any,
    setInfo: any
    packages: any
    setPackages: any
    setOffModals: any
}
const Modal = ({ open, offModal, info, setInfo, packages, setPackages, setOffModals }: Props) => {
    // const [offModals, setOffModals] = useState(false)
    const sum = (num: any) => {
        offModal(num)
        setOffModals(num)
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
                                            <div className='w-full flex justify-between'>
                                                <h3
                                                    className="text-xl mb-3 font-semibold leading-6 text-gray-900"
                                                    id="modal-title"
                                                >
                                                    Create Payment
                                                </h3>
                                                <FaTimes style={{ fontSize: '20px' }} className='cursor-pointer' onClick={() => offModal(false)} />
                                            </div>
                                            <FormComponent offModal={sum} info={info} setInfo={setInfo} packages={packages} setPackages={setPackages} />
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