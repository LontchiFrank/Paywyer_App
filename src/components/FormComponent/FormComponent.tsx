// FormComponent.js

import React, { useState } from 'react';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';


type Props = {
    offModal: any;
}
const FormComponent = ({ offModal }: Props) => {
    // State to track the current step
    const [currentStep, setCurrentStep] = useState(1);

    // Function to handle moving to the next step
    const nextStep = () => {
        setCurrentStep(currentStep + 1);

    };
    console.log(currentStep)
    // Function to handle moving to the previous step
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };


    return (
        <div>

            <ol className="flex items-center justify-between w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white mb-10  border-b-[1px] border-gray-200 dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                <li className={currentStep == 1 ? "flex items-center  text-primary dark:text-opacity-80" : "flex items-center text-gray-600 dark:text-gray-500"} >
                    <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        1
                    </span>
                    Payment <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                    </svg>
                </li>
                <li className={currentStep == 2 ? "flex items-center  text-primary dark:text-primary" : "flex items-center text-gray-600 dark:text-gray-500"}>
                    <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        2
                    </span>
                    Wallets <span className="hidden sm:inline-flex sm:ms-2"></span>
                    <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                    </svg>
                </li>

            </ol>


            {/* Your form fields */}
            {currentStep === 1 && <Step1 />}
            {currentStep === 2 && <Step2 />}
            {/* Add more steps as needed */}

            {/* Stepper component */}
            <div className="flex justify-between mt-24">
                <button onClick={prevStep} disabled={currentStep === 1} className="bg-gray-200 px-4 py-2 rounded-lg">Previous</button>
                <button onClick={currentStep == 2 ? () => offModal(false) : nextStep} className="bg-[#eec643] text-primary px-4 py-2 cursor-pointer rounded-lg">{currentStep !== 2 ? 'Next' : "Submit"}</button>
            </div>
        </div>
    );
};

export default FormComponent;