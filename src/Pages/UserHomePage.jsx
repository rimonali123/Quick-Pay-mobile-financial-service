
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaMoneyBillTransfer, FaMobileRetro } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaHandHoldingUsd, FaRegLightbulb  } from "react-icons/fa";
import { GiWallet , GiTakeMyMoney} from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";


const UserHomePage = () => {
    return (
        <div>
            <div className="text-3xl h-24 bg-violet-700 flex justify-between items-center text-white">
                <div className="flex gap-3">
                    <button>
                        <img src="https://i.ibb.co/nDKHjY3/portait-drawing.webp" alt="" className="self-center flex-shrink-0 w-10 ml-5 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    </button>
                    <p>this persion name</p>
                    <p className="ml-20">this is balance</p>
                </div>

                <button className="flex items-center mr-5"><IoIosNotificationsOutline /></button>
            </div>

            <div className="grid grid-cols-4 gap-10">

                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center"><FaMoneyBillTransfer  className="w-64 h-64" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Send money</p>
                </div>

                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center items-center"><FaMobileRetro  className="w-56 h-56" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Mobile Recharge</p>
                </div>
                
                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center items-center"><BsCashCoin  className="w-56 h-56" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Cash out</p>
                </div>
                
                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center items-center"><FaHandHoldingUsd  className="w-56 h-56" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Payment</p>
                </div>
                
                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center items-center"><GiWallet  className="w-56 h-56" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Add money</p>
                </div>
                
                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center items-center"><FaRegLightbulb   className="w-56 h-56" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Pay bill</p>
                </div>
                
                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center items-center"><TbMoneybag   className="w-56 h-56" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Savings</p>
                </div>
                
                <div className="mt-10">
                    <button className="h-64 w-72 bg-orange-400 text-white flex justify-center items-center"><GiTakeMyMoney   className="w-56 h-56" /></button>
                    <p className="text-4xl font-bold text-center text-black ">Loan</p>
                </div>

            </div>
        </div>
    )
}

export default UserHomePage;