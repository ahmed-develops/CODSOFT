import { useNavigate } from "react-router-dom";

const LandingPage = ({saveEmail}) => {

    const navigator = useNavigate();

    const validateUserRequest = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#email').value;

        // Sending data from frontend to the backend for validation using Fetch API
        const res = await fetch(`http://localhost:3000/${email}`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json' 
            }
        });

        const data = await res.json();

        if (data.status === 200) {
            saveEmail({
                email: email
            });
            navigator('/tasks');
        }
        else {
            alert('No such email exists in our database!');
        }
    };

    return (
        <>
            <form>
                <input id='email' type='email'></input>
                <button onClick={validateUserRequest}> Connect your email </button>
            </form>
        </>
    );
};

export default LandingPage;