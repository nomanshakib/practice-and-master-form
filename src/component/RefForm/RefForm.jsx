import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    },[])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    };

    return (
        <div>
            <h1 className="text-cyan-600 text-center mb-4">Ref. Form</h1>
            <form onSubmit={handleSubmit} className="text-center">
                <input ref={nameRef} className="border-2 rounded-md border-red-700 mb-4" type="text" name="name" /><br />
                <input ref={emailRef} className="border-2 rounded-md border-red-700 mb-4" type="email" name="email" id="" /><br />
                <input ref={passwordRef} className="border-2 rounded-md border-red-700 mb-4" type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;