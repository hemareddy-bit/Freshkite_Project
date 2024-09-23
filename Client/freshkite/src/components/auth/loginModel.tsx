import { useContext } from 'react';
import { LoginContext } from '@/src/context/logincontext';

const LoginModal = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("LoginContext is undefined. Make sure you are wrapping your component tree in LoginProvider.");
    }
    const { showModal, setShowModal } = context;
    return (
        <>
            {showModal ? (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
               <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-96 p-6 rounded-lg shadow-lg">
                   {/* Modal Header */}
                   <h2 className="text-xl font-semibold text-center mb-4">Sign in</h2>
           
                   {/* Social Sign In Options */}
                   <div className="flex flex-col items-center space-y-4">
                       <button
                           className="flex items-center justify-center w-xl p-3 bg-slate-200 text-gray-800  font-medium rounded-md hover:bg-gray-200  transition"
                       >
                           <img src="/images/google.icon.ico" alt="Google" className="w-6 h-6 mr-2" />
                           Sign in with Google
                       </button>
                   </div> 
           
                   {/* Terms of Service */}
                   <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                       By signing in,freshkite you agree to our terms of service and privacy policy.
                   </p>
           
                   {/* Cancel Button */}
                   <div className="mt-6 text-center">
                       <button
                           className=" text-red-500 inline-block px-10 py-1 border border-red-500 rounded-md hover:bg-red-500 hover:text-slate-50 transition duration-300"
                           onClick={() => setShowModal(false)}
                       >
                           Cancel
                       </button>
                   </div>
               </div>
           </div>
           
            ) : null}
        </>
    );
};

export default LoginModal;
