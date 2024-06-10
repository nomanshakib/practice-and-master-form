import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be 6 characters or longer')
        }
        else {
            setError('');
            console.log(name, email, password);
        }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    
    return (
        <div>
            <h1 className="text-cyan-600 text-center mb-4">StateFul Form</h1>
            <form onSubmit={handleSubmit} className="text-center">
                <input value={name} onChange={handleNameChange} className="border-2 rounded-md border-red-700 mb-4" type="text" name="name" /><br />
                <input onChange={handleEmailChange} className="border-2 rounded-md border-red-700 mb-4" type="email" name="email" id="" /><br />
                <input onChange={handlePasswordChange} className="border-2 rounded-md border-red-700 mb-4" type="password" name="password" id="" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;