import Link from "next/link"
import LoginBtn from "../auth/login"
import ToggleTheme from "./theme"
export default function Navbar() {
    return (
        <div>
            <nav className="bg-slate-50 dark:bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-slate-800 dark:text-white text-lg font-sans font-bold">
                        <Link href="/">
                                <img
                                    src="https://static.wixstatic.com/media/dce153_2dc52316c9134a4bb8f9341e7ef27c23~mv2.png/v1/fill/w_360,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/freshkite_edited.png"
                                    alt="Your image alt text"
                                    width={200}
                                    height={200}
                                ></img>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4 ml-auto cursor-pointer">
                        <LoginBtn />
                        <ToggleTheme />
                    </div>
                </div>
            </nav>

        </div>
    )
}