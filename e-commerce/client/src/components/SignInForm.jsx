import { NavLink, useNavigate } from "react-router-dom";

const SignInForm = () => {
    const navigate = useNavigate();

    const signInForm = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        console.log(email, password);

        try {
            if (email && password) {
                const res = await fetch(`http://localhost:3999/sign-in/${email}/${password}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    }
                });

                const data = await res.json();

                if (data.status === 200) {
                    navigate('/marketplace');
                }
                else if (data.status === 408) {
                    alert('Email does not exist!');
                }
                else {
                    alert('Please enter a correct password!');
                }
            }
            else {
                alert('Please do not leave any field empty!');
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign In</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter your credentials to proceed with sign in.</p>
                        </div>
                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className="relative flex-grow w-full">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative flex-grow w-full">
                                <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="current-password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <NavLink className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={signInForm}>Submit</NavLink>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default SignInForm;