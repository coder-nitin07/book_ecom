import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    const signup = (e) => {
        e.preventDefault();

        if (username === '' || email === '' || password === '' || address === '') {
            setError('Please fill the input fields.')
            console.log('Please fill the input fields.');
        } else {
            setError(null);

            // AFter while backend we connect this from backend.
            console.log('Login successfully');
        }
    };

    // When the user types in the input fields, the error message will disappeaerr.
    const handleInputChange = () => {
        if (error) {
            setError(null);
        }
    };
    return (
        <>
            <div className="flex justify-center items-center h-[100%] bg-gray-100 py-12">
                <div className="bg-white p-10 rounded-md shadow-md w-80">
                    <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>

                    {/* Create a form */}
                    <form className="" onSubmit={signup} >

                        {/* Username */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 ">
                                Username
                            </label>
                            <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id='username' value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    handleInputChange();
                                }}
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 ">
                                Email
                            </label>
                            <input type="email" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id='email' value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    handleInputChange();
                                }}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label htmlFor="passowrd" className="block text-gray-700 text-sm font-bold mb-2 ">
                                Password
                            </label>
                            <input type="password" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id='password' value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    handleInputChange();
                                }}
                            />
                        </div>

                         {/* Username */}
                         <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 ">
                                Username
                            </label>
                            <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id='username' value={username}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    handleInputChange();
                                }}
                            />
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2 ">
                                Address
                            </label>
                            <textarea rows={5} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id='address' value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                    handleInputChange();
                                }}
                            />
                        </div>

                        {/* If user send invlid crendentials so throwing a error on display. */}
                        {error && (
                            <div className="bg-red-700 border text-white px-4 py-3 rounded relative mb-4">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}


                        {/* Login Button */}
                        <button type="submit" className="bg-gray-500 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded focus:outline-none">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp