import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { FaSearch, FaTimes } from 'react-icons/fa'
import TableTwo from '../../components/Tables/TableTwo'

function Transactions() {
    return (
        <DefaultLayout>

            <div className='w-full pb-9'>
                <h1 className='text-primary text-[36px] font-[600] dark:text-white '>Transactions</h1>
            </div>
            <div className='flex w-full gap-4'>
                <div className='w-1/3 '>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Transaction ID, Status..."
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
            <TableTwo />
        </DefaultLayout>
    )
}

export default Transactions