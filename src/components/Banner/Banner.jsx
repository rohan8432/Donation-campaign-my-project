

const Banner = () => {
    return (
        <div className="relative py-4">
            <div className="relative">
                <img src="/Resources/back.jpg" alt="" />
                 <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <div className="w-40 absolute bottom-52 left-96">
                <input type="text" className="w-96 px-1 h-11 rounded-md outline-none text-red-400 font-semibold" placeholder="Search here" />
            </div>
        </div>
    );
};

export default Banner;