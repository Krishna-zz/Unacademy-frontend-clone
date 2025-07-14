

function Header(){

    return(
        <nav className="bg-gray-50  fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between ">
                <div className="flex items-center gap-[3px] translate-x-13">
                    <img className="h-9 w-9" src="https://static.uacdn.net/production/_next/static/images/Mobile-Logo.svg?q=75&auto=format%2Ccompress&w=48" alt="" />
                    <h1 className="text-2xl"><span className="text-green-500">un</span><span className="text-blue-500">academy</span></h1>
                </div>
                <div className="flex items-center space-x-4 mr-20 ">
                    <button className="rounded-4xl px-2 py-2 shadow-md border-b-gray-100"><img src="https://static.uacdn.net/production/_next/static/images/giftHomePage.svg?q=75&auto=format%2Ccompress&w=32 1x, https://static.uacdn.net/production/_next/static/images/giftHomePage.svg?q=75&auto=format%2Ccompress&w=48 2x" alt="" /></button>
                    <button className="rounded-[5px] border bg-white hover:bg-gray-100 px-7 py-[6px] shadow-md ">Login</button>
                    <button className="rounded-[5px] border px-[9px] py-[7px]  bg-gray-700 hover:bg-gray-800 shadow-md text-white">Join for free</button>
                </div>
            </div>
        </nav>
    )
}

export default Header