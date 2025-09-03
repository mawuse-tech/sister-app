import React from 'react';
import signup from '../../assets/images/sign2.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux-store/features/users/userThunks';

const SignupUser = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return 
    }

    if (password !== confirmPassword){
      alert('password mismatch')
      return
    }

    try {
      const result = await dispatch(registerUser(formData)).unwrap();
      console.log(result)
      alert('user signed up successfully')
      navigate("/login")

    } catch (err) {
      console.error("Registration error:", err);
      alert(err); 
    }
  }


  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center">
        {/* Card section */}
        <div className="bg-white w-full max-w-4xl rounded-xl border-1 border-gray-600 flex flex-col lg:flex-row overflow-hidden ">

          {/* left Side */}
          <div className="lg:w-1/2 p-6  w-full">
            <div><span className="font-bold mb-2 text-gray-700">Sister Sister</span></div>
            <div className='flex items-center justify-center'>
              <img src={signup} alt="sign up svg" />
            </div>

          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 p-6 flex text-gray-700 w-full lg:mt-5">

            <div>
              <p className="mb-4 text-3xl font-medium">Create an Account</p>
              <p className="text-sm mb-4">Please enter your details</p>

              <form action="" onSubmit={handleSubmit}>
                <div className='flex gap-2'>
                  <div>
                    <label className="text-sm mb-1" htmlFor="email">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-1" htmlFor="email">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                    />
                  </div>

                </div>

                <label className="text-sm mb-1" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input border-1 border-gray-500 w-full mb-4 text-gray-700 bg-white"
                />

                <div className='flex gap-2'>

                  <div>
                    <label className="text-sm mb-1" htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input border-1 border-gray-500 w-full text-gray-700 bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-1" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="input border-1 border-gray-500 w-full text-gray-700 bg-white"
                    />
                  </div>
                </div>

                <div className='bg-[#BA68C8] flex justify-center h-12 rounded-lg mt-4 text-white'>
                  <button className='cursor-pointer' type='submit'>Sign Up</button>
                </div>
              </form>

              <NavLink to="/login">
                <p className='text-gray-600 mt-1 text-sm' >Have an account? <span className='text-[#BA68C8] underline italic'>Sign In</span></p>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default SignupUser