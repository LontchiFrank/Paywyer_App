import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';

const productData: Product[] = [
  {
    image: ProductOne,
    name: 'Apple Watch Series 7',
    category: '20/03/2024',
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: '20/03/2024',
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: '20/03/2024',
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    category: '20/03/2024',
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {/* <Modal open={openModal || openSet} offModal={offModal} setOffModals={offModals} info={info} setInfo={setInfo} packages={packages} setPackages={setPackages} /> */}
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Transaction ID
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Date & Time
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Amount
              </th>



            </tr>
          </thead>
          {/* {productData.length <= 0 &&
            <tbody className='w-full flex items-center translate-x-[95%]'>
              <div className='w-full flex flex-col justify-center items-center  py-6  gap-2'>
                <span>You don’t have any complete payments yet.</span>
                <div className="mb-5">
                  <input
                    type="submit"
                    onClick={onModal}
                    value="Create Payment"
                    className="w-full cursor-pointer rounded-lg border border-[#eec643] bg-[#eec643] p-4 text-primary font-medium transition hover:bg-opacity-90"
                  />
                </div>
              </div>
            </tbody>
          } */}
          <tbody>

            {
              productData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>

                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {/* {packageItem.total_Revenue.name} */}
                      <p className="text-sm pl-7">{packageItem.category}</p>
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.price}
                      {/* <p className="text-sm">{packageItem.total_Revenue.name.label}</p> */}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-green-500 dark:text-white">
                      ${packageItem.profit}
                      {/* <p className="text-sm">{packageItem.total_Revenue.name.label}</p> */}
                    </p>
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default TableTwo;
