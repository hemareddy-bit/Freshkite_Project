
export default function WebDev() {
    return (
        <div className="flex flex-row  bg-slate-200 dark:bg-gray-900 min text-black dark:text-white">
            {/* Header Section */}
            <section className="text-start py-16 ml-auto my-auto mr-32">
                <h1 className="text-4xl font-bold">Web Development</h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-400 max-w-md">
                    Master the fundamentals of
                    web development through a comprehensive and structured path.
                </p>
            </section>

            {/* Courses Section */}
            <section className="flex flex-wrap justify-center gap-8 mr-auto max-w-7xl py-8">
                {/* Course 1 */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80">
                    <div className="rounded-md mb-4">
                        <img src="/images/Html_Css_Js.png" alt="html css js" className="rounded-md" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">HTML CSS & JavaScript for Beginners</h3>
                    <p className="text-gray-700 dark:text-gray-400">Learn the foundations of coding interviews.</p>
                    <div className="flex justify-center items-center mt-4">
                        <span className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">View Content</span>
                    </div>
                </div>

                {/* Course 2 */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80">
                    <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-md mb-4">
                        <img src="/images/Mern-Stack-Developer.png" alt="Advanced Algorithms for biginersddfdfdsfsfs" className="rounded-md" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">MERN Stack for Beginners</h3>
                    <p className="text-gray-700 dark:text-gray-400">Learn React JS , Node JS express and Mongodb you would ever need.</p>
                    <div className="flex justify-center items-center mt-4">
                        <span className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">View Content</span>
                    </div>
                </div>
                
            </section>
        </div>
    )
}