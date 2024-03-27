import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { useGetInvoicesQuery } from '../../services/apiInvoice';
// import { useGetInvoicesQuery } from '../../services/apiInvoice';

function TableInvoices() {
  const { data, isLoading } = useGetInvoicesQuery();
  // const pack = JSON.parse(localStorage.getItem('data') || '') || false;
  console.log(data);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {/* <Modal open={openModal || openSet} offModal={offModal} setOffModals={offModals} info={info} setInfo={setInfo} packages={packages} setPackages={setPackages} /> */}
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Billing To
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Date Issue
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Due Date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Amount
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <div className="w-full ">
                <div className="flex p-4 justify-center items-center  translate-x-[135%]">
                  <img
                    src="/images/6.svg"
                    style={{ width: '30px', height: '35px' }}
                  />
                </div>
              </div>
            ) : (
              data &&
              data.length <= 0 && (
                <tbody className="w-full flex items-center translate-x-[95%]">
                  <div className="w-full flex flex-col justify-center items-center  py-6  gap-2">
                    <span>You don’t have any complete Invoice yet.</span>
                    <div className="mb-5">
                      <Link to="/invoice/create-invoice">
                        <input
                          type="submit"
                          // onClick={() => console.log('mamam')}
                          value="Create Invoice"
                          className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90"
                        />
                      </Link>
                    </div>
                  </div>
                </tbody>
              )
            )}
            {/* {data && data?.length <= 0 && (
              <tbody className="w-full flex items-center translate-x-[75%]">
                <div className="w-full flex flex-col justify-center items-center  py-6  gap-2">
                  <span>You don’t have any complete Invoice yet.</span>
                  <div className="mb-5">
                    <Link to="/invoice/create-invoice">
                      <input
                        type="submit"
                        // onClick={onModal}
                        value="Create Invoice"
                        className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90"
                      />
                    </Link>
                  </div>
                </div>
              </tbody>
            )} */}
            {[...(data || [])].reverse()?.map((packageItem: any, key: any) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.billing_to}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {/* {packageItem.total_Revenue.name} */}
                    <p className="text-sm pl-7">{packageItem.date_issued}</p>
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.due_date}
                    {/* <p className="text-sm">{packageItem.total_Revenue.name.label}</p> */}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-green-500 dark:text-white">
                    ${packageItem.due_amount}
                    {/* <p className="text-sm">{packageItem.total_Revenue.name.label}</p> */}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <Link
                    // element={packageItem}
                    to={`/invoice/invoiceId/${packageItem.id}`}
                    state={{
                      item: packageItem,
                    }}
                    className=" dark:text-white hover:opacity-90 cursor-pointer hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableInvoices;
