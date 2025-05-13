import { useState } from 'react';
import { checkEmail, register, logIn } from '../../services/auth.js'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isExistingUser, setIsExistingUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpData, setSignUpData] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    dob: '',
    agreeTerms: false,
    agreePrivacy: false,
    receiveOffers: false
  });

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const result = await checkEmail(email);
    console.log(result)
    if (result.exists) {
      setIsExistingUser(true);
    } else {
      setIsExistingUser(false);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const body = {
      "email": email,
      "password": password,
      "fName": signUpData.firstName,
      "lName": signUpData.lastName,
      "gender": signUpData.gender,
      "dob": signUpData.dob
    };
    const result = await register(body);
    localStorage.setItem('user', JSON.stringify(result.user));
    localStorage.setItem('token', result.token);
    navigate(-1);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const body = {
      "email": email,
      "password": password,
    };
    const result = await logIn(body);
    localStorage.setItem('user', JSON.stringify(result.user));
    localStorage.setItem('token', result.token);
    console.log('Logging in with:', { email, password });
    navigate(-1);
  };

  const handleSignUpChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignUpData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (isSignUp) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-indigo-600">IndiGo <span className="text-blue-800">BluChip.</span></h1>
            <p className="mt-2 text-sm text-gray-600">The most hassle-free, on-time loyalty program.</p>
          </div>

          <div className="mt-8  py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Welcome to IndiGo BluChip!</h2>
            <p className="text-sm text-gray-600 mb-6">
              Experience a rewarding journey as an IndiGo BluChip Member. The name in your IndiGo BluChip Account should match your government ID. IndiGo BluChips will be credited only if the name in your IndiGo BluChip Account is an exact match with the flight booking name.
            </p>

            <form className="space-y-6" onSubmit={handleSignUpSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="mt-2 space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={signUpData.gender === 'male'}
                      onChange={handleSignUpChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={signUpData.gender === 'female'}
                      onChange={handleSignUpChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First and Middle Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={signUpData.firstName}
                  onChange={handleSignUpChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={signUpData.lastName}
                  onChange={handleSignUpChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="text"
                  placeholder="DD-MM-YYYY"
                  required
                  value={signUpData.dob}
                  onChange={handleSignUpChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">Enter date of birth in (DD-MM-YYYY) format</p>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      required
                      checked={signUpData.agreeTerms}
                      onChange={handleSignUpChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                      I agree to the TERMS AND CONDITIONS of the IndiGo BluChip Program
                    </label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreePrivacy"
                      name="agreePrivacy"
                      type="checkbox"
                      required
                      checked={signUpData.agreePrivacy}
                      onChange={handleSignUpChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreePrivacy" className="font-medium text-gray-700">
                      I agree to the PRIVACY POLICY and consent to the processing of the personal data
                    </label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="receiveOffers"
                      name="receiveOffers"
                      type="checkbox"
                      checked={signUpData.receiveOffers}
                      onChange={handleSignUpChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="receiveOffers" className="font-medium text-gray-700">
                      I would like to receive the latest offers and deals from IndiGo and its partners. I can opt-out of the marketing communications at any time.
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandBlue hover:bg-brandBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(false)}
                className="text-sm text-brandBlue hover:text-indigo-500"
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-600">IndiGo <span className="text-blue-800">BluChip.</span></h1>
          <p className="mt-2 text-sm text-gray-600">The most hassle-free, on-time loyalty program.</p>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-center text-lg font-medium text-gray-900">
            {isExistingUser === null ? 'Login or Sign up for IndiGo BluChip' : 'Welcome back!'}
          </h2>

          {isExistingUser === null ? (
            <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandBlue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue
                </button>
              </div>
            </form>
          ) : isExistingUser ? (
            <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-8 space-y-6">
              <p className="text-sm text-gray-600">No account found with this email. Would you like to sign up?</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsExistingUser(null)}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try another email
              </button>
            </div>
          )}

          {isExistingUser === null && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(true)}
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Don't have an account? Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}