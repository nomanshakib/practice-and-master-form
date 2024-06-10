import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    /* const [name, handleNameChange] = useInputState('Raja Saheb') */
    const nameState = useInputState('NS Howlader');

    const handleSubmit = e => {
        console.log('form data', nameState.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center">
                <input {...nameState} /* value={name} onChange={handleNameChange} */ className="border-2 rounded-md border-red-700 mb-4" type="text" name="name" /><br />
                <input className="border-2 rounded-md border-red-700 mb-4" type="email" name="email" id="" /><br />
                <input className="border-2 rounded-md border-red-700 mb-4" type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;