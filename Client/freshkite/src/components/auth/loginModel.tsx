import { useContext } from 'react';
import { LoginContext } from '@/src/context/logincontext';
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from '@react-oauth/google';
import { useRouter } from 'next/router';

const LoginModal = () => {
    const router = useRouter();
    const context = useContext(LoginContext);

    if (!context) {
        throw new Error("LoginContext is undefined. Make sure you are wrapping your component tree in LoginProvider.");
    }

    const { showModal, setShowModal,} = context;
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    const handleSuccess = async (credentialResponse: CredentialResponse) => {
        const idToken = credentialResponse.credential;
        console.log('ID Token:', idToken);

        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idToken }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('User data:', data);
            setShowModal(false);
            router.push('/course');
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    const handleError = () => {
        console.error('Login failed');
    };

    return (
        <>
            {showModal ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-96 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-center mb-4">Sign in</h2>

                        <div className="flex flex-col items-center space-y-4">
                            <GoogleOAuthProvider clientId={clientId as string}>
                                <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                            </GoogleOAuthProvider>
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                            By signing in, you agree to our terms of service and privacy policy.
                        </p>

                        <div className="mt-6 text-center">
                            <button
                                className="text-red-500 inline-block px-10 py-1 border border-red-500 rounded-md hover:bg-red-500 hover:text-slate-50 transition duration-300"
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
}
export default LoginModal;