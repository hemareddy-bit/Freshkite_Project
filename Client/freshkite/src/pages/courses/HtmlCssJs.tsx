import Navbar from "@/src/components/common/navbar";
import Video from "@/src/components/common/video/Video";

export default function HtmlCssJs() {
    return (
        <div className="bg-slate-200 dark:bg-slate-900 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4">
                <nav className="bg-transparent dark:bg-transparent rounded-full p-4 mt-20 border border-gray-300 dark:border-gray-700 shadow-md max-w-6xl mx-auto">
                    <div className="flex justify-center space-x-8 lg:space-x-20">
                        <span className="text-lg lg:text-xl font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer">HTML</span>
                        <span className="text-lg lg:text-xl font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer">CSS</span>
                        <span className="text-lg lg:text-xl font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer">JavaScript</span>
                    </div>
                </nav>
                <h1 className="text-4xl font-bold text-slate-900 text-center mt-20 dark:text-slate-50">Videos</h1>

                <div className="mt-12 rounded-lg border-spacing-1">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <span className="text-3xl font-semibold text-gray-900 dark:text-slate-50 text-center">Topics</span>
                        <span className="text-3xl font-semibold text-gray-900 dark:text-slate-50 text-center">English</span>
                        <span className="text-3xl font-semibold text-gray-900 dark:text-slate-50 text-center">Tamil</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto hide-scrollbar">
                        <ul className="space-y-12">
                            {[1, 2, 3, 4].map((_, index) => (
                                <li key={index} className="grid grid-cols-3 gap-4 items-start">
                                    <span className="text-2xl text-gray-800 dark:text-slate-50 font-medium">HTML Basics</span>
                                    <div className="flex justify-center">
                                        <Video topic="html" />
                                    </div>
                                    <div className="flex justify-center">
                                        <Video topic="html" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
