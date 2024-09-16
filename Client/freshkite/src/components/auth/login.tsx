import { LoginContext } from "@/src/context/logincontext";
import { useContext } from "react";


 export default function LoginBtn() {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("LoginContext is undefined. Make sure you are wrapping your component tree in LoginProvider.");
    }
    const { showModal, setShowModal } = context;
    const showLogin = ()=>{
        setShowModal(showModal ? false : true);
    }
    return(
        <div>
            <button className="px-8 py-2  text-slate-100 bg-blue-600 rounded" onClick={showLogin}>Login</button>
        </div>
    )
}