

function Body(){


    return(
        <div className="pt-20">
            <div className="flex pt-24 pr-51 pl-45">
                <div className="w-1/2 pt-3">
                    <h1 className="text-gray-700 font-bold mb-1.5 text-5xl">Crack your goal with </h1>
                    <h1 className="text-gray-700 font-bold text-5xl">India's top educators</h1>
                    <h2 className="mt-5 font-bold text-[17px]">Over <span className="text-green-500">10 crore</span> learners trust us for their preparation</h2>
                    <input className="mt-6 shadow-md rounded-[7px] mb-2 py-[11px] px-[142px] border appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number"  placeholder="Enter your phone number"/>
                    <h5 className="text-gray-700">We'll send an OTP for verification</h5>
                    <button className=" rounded-[8px] mt-5 border px-[190px] py-[11px]  bg-gray-700 hover:bg-gray-800 shadow-lg text-white">Join for free</button>
                </div> 
                <div className="w-1/2 flex justify-end"><img src="https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=640 1x, https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=1200 2x" alt="" /></div>
            </div>
            <div className=" pl-45 mt-30">
                <div className="">
                    <h1 className="text-gray-700 font-bold text-4xl">Select your goal / exam</h1>
                    <h1 className="text-gray-700 mt-1.5"><span className="text-green-500">200+</span> exams available for your preparation</h1>
                    <input className="mt-6 rounded-[7px] mb-2 py-[11px] px-[20px] w-285 border" type="text" placeholder="Type the goal / exam you're preparing for..." />
                    <h1 className="mt-9 text-gray-700 font-bold text-3xl">Popular Goals</h1>
                </div>
                <div className="mt-9 flex gap-6">
                    <button className="px-18 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/upsc.svg?q=75&auto=format%2Ccompress&w=256" alt="" />UPSC CSE - GS</button>  
                    <button className="px-22 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/iit_jee.svg?q=75&auto=format%2Ccompress&w=256" alt="" /> IIT JEE</button> 
                    <button className="px-22 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/neet_ug.svg?q=75&auto=format%2Ccompress&w=256" alt="" /> NEET UG</button> 
                    <button className="px-22 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/bank_exams.svg?q=75&auto=format%2Ccompress&w=256" alt="" /> Bank exams</button> 
                </div>
                <div className=" mt-5 flex gap-6">
                    <button className="px-11 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/ssc.svg?q=75&auto=format%2Ccompress&w=256" alt="" /> SSC JE & state AE exams</button> 
                    <button className="px-21 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/cat.svg?q=75&auto=format%2Ccompress&w=256" alt="" /> CAT & MBA </button> 
                    <button className="px-22 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/class_12.svg?q=75&auto=format%2Ccompress&w=256" alt="" /> CBSE class 12</button> 
                    <button className="px-19 py-25 border rounded-[12px] shadow-md"><img src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/ca.svg?q=75&auto=format%2Ccompress&w=256" alt="" /> CA Intermediate</button> 
                </div>
            </div>
        </div>
    )
}

export default Body