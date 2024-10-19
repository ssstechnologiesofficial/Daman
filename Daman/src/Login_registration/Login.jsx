import React, { useState } from 'react';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to track forgot password form

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setIsEmailLogin(false); // Reset to phone login when toggling
    setIsForgotPassword(false); // Reset forgot password when toggling
  };

  const handleLoginTypeChange = (type) => {
    setIsEmailLogin(type === 'email');
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setIsRegistering(false);
  };

  return (
    <div>
      {/* Fixed Logo Container */}
      <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-gradient-to-r from-red-500 to-red-400 z-10">
        <div
          className="text-white cursor-pointer ps-3 pb-1"
          onClick={() => handleBackToLogin()}
        >
          #
        </div>
        <img
          src="../../public/Image/damanWlogo.png"
          className="sm:w-[120px] w-[140px] my-2 object-contain"
          alt="Logo"
        />
        <div className="w-10"></div>
        {/* Placeholder for spacing on the right */}
      </div>

      {/* Main Content Area */}
      <div className="flex justify-center flex-col items-center bg-gradient-to-r from-red-500 to-red-400 mt-14">
        <div className="flex justify-start flex-col px-5">
          <h4 className="text-white font-semibold text-lg mb-2 mt-2">
            {isRegistering
              ? 'Register'
              : isForgotPassword
              ? 'Forgot password'
              : 'Log in'}
          </h4>
          <p className="text-white text-xs mb-8 pe-10 text-start">
            {isRegistering
              ? 'Please register by phone number or email'
              : isForgotPassword
              ? 'Please retrieve/change your password through your mobile phone number or emial'
              : 'Please log in with your phone number or email. If you forget your password, please contact customer service.'}
          </p>
        </div>
      </div>

      <div className="bg-slate-100 h-full p-5">
        {!isRegistering && !isForgotPassword ? (
          <div className="flex flex-col justify-start px-2">
            {/* Login Form */}
            <div className="flex justify-around mb-4 border-b-2 ">
              <div
                className="flex justify-center flex-col items-center cursor-pointer "
                onClick={() => handleLoginTypeChange('phone')}
              >
                <h1 className={isEmailLogin ? 'text-gray-400' : 'text-black'}>
                  @
                </h1>
                <span
                  className={`border-b-2 w-full font-bold ${
                    isEmailLogin
                      ? 'text-gray-400'
                      : 'text-black border-b-red-400'
                  }`}
                >
                  Phone number
                </span>
              </div>
              <div
                className="flex justify-center flex-col items-center cursor-pointer"
                onClick={() => handleLoginTypeChange('email')}
              >
                <h1 className={isEmailLogin ? 'text-black' : 'text-gray-400'}>
                  @
                </h1>
                <span
                  className={`border-b-2 w-full font-bold ${
                    isEmailLogin
                      ? 'text-black border-b-red-400'
                      : 'text-gray-400'
                  }`}
                >
                  Email Login
                </span>
              </div>
            </div>

            {/* Dynamic Input Fields */}
            {isEmailLogin ? (
              <div className="flex flex-col mb-4 font-normal">
                <label className="py-2 text-lg">Email</label>
                <input
                  className="px-4 py-2 rounded-lg"
                  type="email"
                  placeholder="Please enter your email"
                />
              </div>
            ) : (
              <div className="flex flex-col mb-4 font-normal">
                <label className="py-2 text-lg">Phone number</label>
                <div className="flex gap-4">
                  <select className="w-20 rounded-md px-3 py-3">
                    <option disabled selected>
                      +91
                    </option>
                    <option value="+91 India">+91 India</option>
                  </select>
                  <input
                    className="px-4 py-2 rounded-lg w-full"
                    type="number"
                    placeholder="Please enter the phone number"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col justify-start font-normal">
              <label className="py-2 text-lg">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-xl"
              />
              <div className="text-sm font-medium opacity-60 py-4">
                <label className="inline-flex items-center gap-1">
                  <input type="checkbox" />
                  Remember Password
                </label>
              </div>
            </div>

            <button className="bg-gradient-to-r from-red-500 to-red-400 text-2xl text-white font-semibold px-20 rounded-3xl py-2 my-4">
              Log in
            </button>
            <button
              type="button"
              className="border text-red-500 border-red-400 text-2xl px-16 font-semibold rounded-3xl py-2"
              onClick={toggleForm}
            >
              Register
            </button>
            <div className="flex justify-around m-6 items-center">
              <div
                className="m-1 text-sm cursor-pointer"
                onClick={handleForgotPassword}
              >
                <img
                  src="../../public/Image/forgetPasswordIcon.png"
                  alt="Forget Password"
                />
                <div>Forget Password</div>
              </div>
              <div className="m-1 text-sm">
                <img
                  src="../../public/Image/customerServiceIcon.png"
                  alt="Customer Service"
                />
                <div>Customer Service</div>
              </div>
            </div>
          </div>
        ) : isForgotPassword ? (
          <div className="flex flex-col justify-start px-2">
            {/* Forgot Password Form */}
            <div className="flex flex-col mb-4 font-normal">
              <div className="flex items-center flex-col mb-4 font-normal border-b-2 border-b-red-400">
                <h1>%</h1>
                <p className="pb-2 text-red-500 font-semibold text-lg">
                  phone reset
                </p>
              </div>

              <label className="py-2">Phone number</label>
              <div className="flex gap-4">
                <select className="w-20 rounded-md px-4">
                  <option disabled selected>
                    +91
                  </option>
                  <option value="+91 India">+91 India</option>
                </select>
                <input
                  className="px-4 py-3 rounded-lg w-full"
                  type="number"
                  placeholder="Please enter the phone number"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 font-normal">
              <label className="py-2">A new Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col mb-4 font-normal">
              <label className="py-2">Confirm new Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col mb-2 font-normal">
              <label className="py-2">Verification Code</label>
              <input
                type="text"
                placeholder="please enter the confirmation code"
                className="px-4 py-2 rounded-lg"
              />
            </div>

            <div className="text-sm font-medium opacity-60 py-5">
              <label className="inline-flex items-center gap-1">
                <input type="checkbox" />I have read and agree
                <span className="text-red-600 font-semibold">
                  [Privacy Agreement]
                </span>
              </label>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-red-300 text-xl text-white font-semibold px-20 rounded-3xl py-2 mb-2">
              Reset
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-start px-8">
            {/* Registration Form */}
            <div className="flex items-center flex-col mb-4 font-normal border-b-2 border-b-red-400">
              <h1>%</h1>
              <p className="pb-4 text-red-500 font-semibold text-lg">
                Register your phone
              </p>
            </div>
            <div className="flex flex-col mb-4 font-normal">
              <label className="py-2">Phone number</label>
              <div className="flex gap-4">
                <select className="w-20 rounded-md px-3">
                  <option disabled selected>
                    +91
                  </option>
                  <option value="+91 India">+91 India</option>
                </select>
                <input
                  className="px-4 py-2 rounded-lg w-full"
                  type="number"
                  placeholder="Please enter the phone number"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start font-normal">
              <label className="py-3">Set Password</label>
              <input
                type="password"
                placeholder="Set Password"
                className="px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start font-normal">
              <label className="py-3">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start font-normal">
              <label className="py-3">Invite code</label>
              <input
                type="text"
                placeholder="Please enter the invitation code"
                className="px-4 py-2 rounded-lg"
              />
            </div>
            <div className="text-sm font-medium opacity-60 py-7">
              <label className="inline-flex items-center gap-1">
                <input type="checkbox" />I have read and agree
                <span className="text-red-600 font-semibold">
                  [Privacy Agreement]
                </span>
              </label>
            </div>

            <button className="bg-gradient-to-r from-red-500 to-red-300 text-xl text-white font-semibold px-20 rounded-3xl py-2 mb-2">
              Register
            </button>
            <button
              type="button"
              className="border border-red-500 px-16 rounded-3xl py-2 text-center text-red-400 text-lg font-bold mt-3"
              onClick={toggleForm}
            >
              <span className="me-2 text-sm font-normal opacity-70 text-black">
                I have an account
              </span>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
