import React, { useState } from 'react'
import Card from '../../components/Cards/Card';
import ReactDOM from "react-dom";
import { FaTimes } from 'react-icons/fa';

type Prop = {
    open: boolean,
    children: any,
    // close:boolean
}

function BusinessCreate({ open, children }: Prop) {
    return ReactDOM.createPortal(
        <div
            className={`w-full h-screen bg-white z-10 text-black flex absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
        >
            <div className="w-3/4 p-24">{children}</div>
            <div className="w-1/4 flex flex-col justify-between back1">
                <div></div>
                <div className="w-full">
                    <img src="/images/3.png" style={{ width: '100%' }} />
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")!
    );
}

const Hero: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        console.log(open);
    };
    return (
        <>
            <div className="w-full h-screen back" >
                <BusinessCreate open={open}>
                    <div className="flex gap-5 pb-16">
                        <div className="flex items-center">
                            <FaTimes className="text-[#041e49b3] text-[20px]" onClick={() => setOpen(false)} />
                        </div>
                        <h2 className="text-[22px] text-[#041e49b3] leading-[24px] ">
                            Create a project
                        </h2>
                    </div>
                    <div>
                        <h1 className="text-[#041e49] text-[43px] leading-[54px] mb-10 font-medium">
                            Let's start  your project{" "}
                        </h1>
                        <div className='w-[70%]'>
                            <form>
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your Project name"
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />

                                        {/* <span className="absolute right-4 top-4">
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.5">
                                                    <path
                                                        d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                                                        fill=""
                                                    />
                                                    <path
                                                        d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                                                        fill=""
                                                    />
                                                </g>
                                            </svg>
                                        </span> */}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        What kind of Project?
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="E.g Business, Education, Ecommerce"
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />

                                        {/* <span className="absolute right-4 top-4">
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.5">
                                                    <path
                                                        d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                                                        fill=""
                                                    />
                                                </g>
                                            </svg>
                                        </span> */}
                                    </div>
                                </div>



                                <div className="mb-5">
                                    <input
                                        type="submit"
                                        value="Create Application"
                                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                                    />
                                </div>



                            </form>
                        </div>
                    </div>

                </BusinessCreate>
                <div className="container mx-4 px-12 "></div>

                <div className='w-full h-screen flex overflow-x-hidden  gap-4 '>
                    <div className="w-2/3   dark:bg-[rgba(4,30,73,0.67)]">

                        <div className="pt-16 px-[12rem]">
                            <h3 className="text-[#041e49] font-semibold pb-4 text-[1.3rem] dark:text-[#d8d8d8]">
                                Your Paywyer Projects
                            </h3>
                            <div className="w-full flex flex-wrap mb-16">
                                <Card onClick={handleClick} />
                            </div>
                            <div className="w-full border border-t-[0.6px] border-[#a9b7cf]">
                                {" "}
                            </div>
                            <div className="pt-16 w-full">
                                <div className="p-6 flex w-full ">
                                    <div className="w-full bg-white p-2 border-[0.6px] border-primary  rounded-md">
                                        <h3 className="text-[#041e49] pb-4 text-[1.3rem] dark:text-[#d8d8d8]">
                                            Paywyer Project containers for your apps
                                        </h3>
                                        <span className="text-[#041e49b3] text-[1rem] dark:text-[#b5b5b5]">
                                            Apps in a project share features like Real-time Analytics.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-end bg-[#eec643] dark:bg-base-100">
                        <div className='w-full flex items-end'>
                            <img src='/images/5.svg' />
                        </div>
                    </div>
                </div>



            </div>




        </>
    )
}

export default Hero


// import BusinessCreate from "./BusinessCreate";
// import Card from "./Card";
// import React, { useState, useRef } from "react";
// import ReactDOM from "react-dom";
// import App from "../../../App";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";

// function BusinessCreate({ open, children, close }) {
//   return ReactDOM.createPortal(
//     <div
//       className={`w-full h-screen bg-white z-10 text-black flex absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ${
//         open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//       }`}
//     >
//       <div className="w-3/4 p-24">{children}</div>
//       <div className="w-1/4 flex flex-col justify-between bg-[#a3e5fd]">
//         <div></div>
//         <div className="">
//           <img src="/images/3.jpg" />
//         </div>
//       </div>
//     </div>,
//     document.getElementById("modal-root")
//   );
// }

// function TemplatePointers() {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(true);
//     console.log(open);
//   };

//   return (
//     <>
//       <div className="w-full overflow-x-hidden ">
//         <BusinessCreate open={open}>
//           <div className="flex gap-5 pb-16">
//             <div className="flex items-center">
//               {" "}
//               <FontAwesomeIcon
//                 icon={faTimes}
//                 className="text-[#041e49b3] text-[20px]"
//                 onClick={() => setOpen(false)}
//               />
//             </div>
//             <h2 className="text-[22px] text-[#041e49b3] leading-[24px] ">
//               Create a project
//             </h2>
//           </div>
//           <div>
//             <h1 className="text-[#041e49] text-[43px] leading-[54px] mb-20 font-medium">
//               Let's start with a name for
//               <br /> your project{" "}
//             </h1>
//             <div className="w-[500px] mb-7">
//               <input
//                 placeholder="Enter your project name"
//                 className="w-full focus:outline-none border-b-2 placeholder:text-[28px] pt-3 placeholder:text-[#041e499e]"
//               />
//             </div>
//             <button className="py-5 px-10 bg-blue-500 text-white rounded-md">
//               Continue
//             </button>
//           </div>
//         </BusinessCreate>
//         <div
//         //   className={`w-full h-screen bg-blue-500 z-10 text-white flex justify-center items-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ${
//         //     open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         //   }`}
//         ></div>
//         <div className="container mx-4 px-12 "></div>
//         <div className="w-full h-[25vh] bg-indigo-300 dark:bg-[rgba(4,30,73,0.67)]">
//           <div className="w-full relative ">
//             <div className="absolute lg:top-[1rem]  md:top-[-4rem] ">
//               <img
//                 src="/images/1.png"
//                 style={{ width: "40%", height: "90%" }}
//               />
//             </div>
//           </div>
//           <div className="w-full relative ">
//             <div className="absolute lg:top-[-3rem] right-[-12rem]  md:top-[-4rem] ">
//               <img
//                 src="/images/2.png"
//                 style={{ width: "70%", height: "20%" }}
//               />
//             </div>
//           </div>
//           <div className="pt-16 px-[12rem] relative">
//             <h3 className="text-[#041e49] pb-4 text-[1.3rem] dark:text-[#d8d8d8]">
//               Your Paywyer Projects
//             </h3>
//             <div className="w-full flex flex-wrap mb-16">
//               <Card onClick={handleClick} />
//             </div>
//             <div className="w-full border border-t-[0.6px] border-[#a9b7cf]">
//               {" "}
//             </div>
//             <div className="pt-16 w-[70%]">
//               <div className="p-6 flex w-full border-[0.6px] border-[#a9b7cf]  rounded-md">
//                 <div className="w-1/4 p-2">
//                   <h3 className="text-[#041e49] pb-4 text-[1.3rem] dark:text-[#d8d8d8]">
//                     Paywyer Project containers for your apps
//                   </h3>
//                   <span className="text-[#041e49b3] text-[1rem] dark:text-[#b5b5b5]">
//                     Apps in a project share features like Real-time Analytics
//                   </span>
//                 </div>
//                 <div className="w-3/4 flex justify-between bg-[#a3e5fd] py-4 rounded-md">
//                   <div style={{ height: "50%", width: "50%" }}>
//                     <img src="/images/3.jpg" />
//                   </div>
//                   <div style={{ height: "50%", width: "50%" }}>
//                     <img src="/images/4.jpg" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-[75vh] bg-white dark:bg-base-100"></div>
//       </div>
//     </>
//   );
// }

// export default TemplatePointers;

// ReactDOM.render(<TemplatePointers />, document.getElementById("root"));
