import React, { useState } from 'react';
import FormComponent from '../FormComponent/FormComponent';
import { FaTimes } from 'react-icons/fa';

type Props = {
  open: boolean;
  close: any;
};
const ModalDelete = ({ open, close }: Props) => {
  // const [offModals, setOffModals] = useState(false)
  //   const sum = (num: any) => {
  //     offModal(num);
  //     setOffModals(num);
  //   };

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
                  <div className="flex flex-col">
                    <div className="mt-3 w-[100%] text-center sm:mt-0 sm:text-left">
                      <div className="w-full flex justify-between">
                        <h3
                          className="text-xl mb-3 font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Delete Payment
                        </h3>
                        <FaTimes
                          style={{ fontSize: '20px' }}
                          className="cursor-pointer"
                          onClick={
                            () => close(false)
                            //     {
                            //     offModal(false);
                            //     clickCloseModal(false);
                            //   }
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <span>Delete this payment</span>
                        <span className="mb-4">
                          Once you delete a payment, there is no going back.
                          Please be certain.
                        </span>
                      </div>
                    </div>
                    <button className="w-full border-red-700 bg-[#ffffff] font-medium  rounded border px-6 py-3 hover:bg-red-700 dark:hover:border-red-700 cursor-pointer focus:border-primary focus-visible:outline-none   dark:bg-meta-4 dark:hover:bg-red-700 hover:text-white  ">
                      Delete Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalDelete;
