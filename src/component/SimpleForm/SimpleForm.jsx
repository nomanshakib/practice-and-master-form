

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('Submitted');
    }
    return (
        <div className="">
            <h1 className="text-cyan-600 text-center mb-4">Simple Form</h1>
            <form onSubmit={handleSubmit} className="text-center">
                <input className="border-2 rounded-md border-red-700 mb-4" type="text" name="name" /><br />
                <input className="border-2 rounded-md border-red-700 mb-4" type="email" name="email" id="" /><br />
                <input className="border-2 rounded-md border-red-700 mb-4" type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;