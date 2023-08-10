import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

    const navigate = useNavigate();

    const signUpForm = async (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirmPassword').value;
        const mobileNumber = document.querySelector('#mobileNumber').value;
        const dateOfBirth = document.querySelector('#dateOfBirth').value;

        try {
            if (name && email && password && confirmPassword && mobileNumber) {
                const res = await fetch(`http://localhost:3999/sign-up/${name}/${email}/${password}/${confirmPassword}/${mobileNumber}/${dateOfBirth}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ dateOfBirth: dateOfBirth })
                })

                const data = await res.json();

                if (data.status === 200) {
                    alert('Account created successfully');
                    navigate('/sign-in');
                }
                else {
                    alert('Account could not be created!');
                }
            }
            else {
                alert('Except date of birth, no fields must be left empty!')
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form>
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign Up</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please enter all given fields to proceed with sign up</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <br />
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                                        <input type="current-password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="confirmPassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                                        <input type="current-password" id="confirmPassword" name="confirmPassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="mobileNumber" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                                        <input type="text" id="mobileNumber" name="mobileNumber" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="dateOfBirth" className="leading-7 text-sm text-gray-600">Date of Birth</label>
                                        <input type="date" id="dateOfBirth" name="dateOfBirth" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                {/* <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div> */}
                                <div className="p-2 w-full">
                                    <center>
                                        <button className="button is-primary flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={signUpForm}>Submit</button>
                                    </center>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a className="text-indigo-500">instance@proton.com</a>
                                    <p className="leading-normal my-5">49 Smith St.
                                        <br />Saint Cloud, MN 56301
                                    </p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default SignUpForm;