// import React from 'react'
import { FaPlus } from 'react-icons/fa';

type Prop = {
    onClick: any
}

const Card = ({ onClick }: Prop) => {
    // const [open, setOpen] = useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    //     console.log(open);
    // };
    return (
        <div
            className="w-[300px] h-[230px] rounded-md shadow-sm border-[1px] border-primary flex justify-center items-center bg-white hover:bg-[#f1f6fe] cursor-pointer dark:bg-[#21354bf5] dark:hover:bg-[#283f59f5]"
            onClick={onClick}
        >
            <div className="flex flex-col">
                <div className='flex justify-center items-center'> <FaPlus style={{ fontSize: "28px" }} className="text-primary " /></div>
                {/* <FontAwesomeIcon
          icon={faPlus}
          style={{ fontSize: "28px" }}
          className="text-[#0b57d0] "
        /> */}
                <span className="text-[primary text-[1rem] ">Add Project</span>
            </div>
        </div>
    )
}

export default Card