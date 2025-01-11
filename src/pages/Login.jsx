import { useState } from "react";

const LogIn = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const login = (e)=>{
      e.preventDefault();

      if(email === '' || password === ''){
          setError('Please fill the input fields.')
          console.log('Please fill the input fields.');
      } else{
          setError(null);

          // AFter while backend we connect this from backend.
          console.log('Login successfully');
      }
  };

  const handleInputChange = () => {
    if (error) {
      setError(null);
    }
  };

  return (
    <>
        <div className="flex justify-center items-center h-screen bg-gray-100 gradient">
            <div className="bg-white p-10 rounded-md shadow-md w-80 form-div">
                <h2 className="text-center text-2xl font-bold mb-4">Login</h2>

                {/* Create a form */}
                <form className="" onSubmit={ login } >

                  {/* Email */}
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 ">
                          Email
                      </label>
                      <input type="email" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                            id='email' value={ email } 
                            onChange={(e)=> {
                              setEmail(e.target.value);
                              handleInputChange(); 
                            } }
                      />
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                      <label htmlFor="passowrd" className="block text-gray-700 text-sm font-bold mb-2 ">
                              Password
                      </label>
                      <input type="password" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                            id='password' value={ password } 
                            onChange={(e)=> {
                            setPassword(e.target.value);
                            handleInputChange(); 
                          } }
                      />
                  </div>

                  {/* If user send invlid crendentials so throwing a error on display. */}
                  {  error && (
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
  );
};

export default LogIn;
