
export default function ProblemSolving() {
    return(
        <div className="flex flex-row  bg-slate-200 dark:bg-gray-900 min text-black dark:text-white">
            {/* Header Section */}
            <section className="text-start py-16 ml-auto my-auto mr-32">
                <h1 className="text-4xl font-bold">Problem Solving</h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-400 max-w-md">
                    Master the fundamentals of
                    Problem Solving through a comprehensive and structured path.
                </p>
            </section>

            {/* Courses Section */}
            <section className="flex flex-wrap justify-center gap-8 mr-auto max-w-7xl py-8">
                {/* Course 1 */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80">
                    <div className="rounded-md mb-4">
                        <img src="/images/basic_problem_solving.png" alt="Algorithms & Data Structures for Beginners" className="rounded-md" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Basic Problem Solving </h3>
                    <p className="text-gray-700 dark:text-gray-400">Master If ,Loop, Sorting, Serching , Recursion!</p>
                    <div className="flex justify-center items-center mt-4">
                        <span className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">View Content</span>
                    </div>
                </div>

                {/* Course 2 */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80">
                    <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-md mb-4">
                        <img src="/images/Dsa.webp" alt="Advanced Algorithms for biginersddfdfdsfsfs" className="rounded-md" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Data Structures & Algorithms</h3>
                    <p className="text-gray-700 dark:text-gray-400">Learn the foundations of coding interviews.</p>
                    <div className="flex justify-center items-center mt-4">
                        <span className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">View Content</span>
                    </div>
                </div>
                
            </section>
        </div>
    )
}