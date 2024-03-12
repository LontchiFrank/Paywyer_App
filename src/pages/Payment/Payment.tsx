import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { FaSearch, FaTimes } from 'react-icons/fa'
import TableThree from '../../components/Tables/TableThree'
import { Package } from '../../types/package';
import { BsPlus } from 'react-icons/bs';

const packageData: Package[] = []

const Payment: React.FC = () => {
    // const [open, setOpen] = useState(true);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [arr, setArr] = useState<any[]>()

    const handleClick1 = () => {
        setOpenModal(true
        )

    }

    console.log(arr)
    return (
        <DefaultLayout>
            <div className='w-full pb-9'>
                <h1 className='text-primary text-[36px] font-[600] dark:text-white '>Payments</h1>
            </div>

            <div className='w-full flex justify-between  pb-9'>
                <div className='flex w-full gap-4'>
                    <div className='w-1/3 '>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Payment ID, Order ID..."
                                className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />

                            <span className="absolute right-4 top-4">
                                <FaSearch style={{ color: '#b2b9c5', fontSize: '20px' }} />
                            </span>
                        </div>


                    </div>
                    <div className="mb-5">
                        <input
                            type="submit"
                            value="Search"
                            className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90"
                        />
                    </div>
                </div>
                {
                    arr?.length == 0 ? null : <div className=''>
                        <input
                            type="submit"
                            value={`Create Payment`}
                            onClick={handleClick1}
                            className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90"
                        />
                        {/* <button className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90" type='submit' > Create Payment </button> */}
                    </div>
                }

            </div>
            <TableThree data={arr} setData={setArr} openSet={openModal} setOpen={setOpenModal} />

        </DefaultLayout>
    )
}

export default Payment