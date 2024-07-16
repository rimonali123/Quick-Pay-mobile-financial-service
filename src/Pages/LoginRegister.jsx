import { Link } from "react-router-dom";


const LoginRegister = () => {
    return (
        <div className="w-full h-screen bg-violet-700">
            <div className="flex flex-row items-center gap-5 justify-center ">
                <img src="https://i.ibb.co/pPCm9Yv/logo.png" className="w-32 mt-20  rounded-xl" alt="" />
                <p className="text-4xl font-bold text-white mt-12">Quick Pay- আস্থায় ও ভরসায় <br /> বিশ্বস্ততার সাথে- প্রয়োজনের পাশে</p>
            </div>
            <div className="flex justify-center">
                <button className="text-white text-4xl text-center font-bold">Register/Login</button>
            </div>
            <div className="flex gap-10 mt-10 items-center justify-center">
                <div className="text-white text-2xl font-bold space-y-2 flex flex-col gap-2">
                    <p>Your Number or Email</p>
                    <p>Your Password</p>

                </div>
                <div className="text-white text-2xl font-bold space-y-2 flex flex-col">
                    
                    <input type="text" className="text-black p-2 rounded-xl border-none" />
                    <input type="text" className="text-black p-2 rounded-xl" />

                </div>
            </div>
            <div className="flex justify-between px-10 mt-10">
                <Link to="/">
                    <button className="text-white text-2xl font-bold border p-2 rounded-lg hover:bg-black hover:text-white">Back</button>
                </Link>
                <Link to="/userHomePage">
                    <button className="text-white text-2xl font-bold border p-2 rounded-lg hover:bg-black hover:text-white">Next</button>
                </Link>

            </div>
        </div>
    );
};

export default LoginRegister;