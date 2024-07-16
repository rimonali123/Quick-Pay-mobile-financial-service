

const WelcomePage = () => {
    return (
        <div className="w-full h-screen bg-violet-400">
            <div className="flex flex-col items-center mb-10 gap-10 ">
                <img src="https://i.ibb.co/pPCm9Yv/logo.png" className="w-60 mt-20 rounded-xl" alt="" />
                <div className="text-white text-7xl font-bold">
                    <p>Quick Pay - তে</p>
                    <p>আপনাকে স্বাগতম</p>

                </div>
            </div>
            <div className="flex justify-end pr-5">
                <button className="text-white text-2xl font-bold border p-2 rounded-lg hover:bg-teal-400 hover:text-red-400">Next</button>
            </div>
        </div>
    );
};

export default WelcomePage;