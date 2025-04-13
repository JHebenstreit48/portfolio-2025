import { useState } from "react";
import '@/SCSS/ContactForm.scss';

export default function ContactForm() {

    interface Inputs {
        name: string;
        email: string;
        textarea: string;
    }

    const [inputs, setInputs] = useState<Inputs>({ name: "", email: "", textarea: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (

        <form className="formContainer" onSubmit={handleSubmit}>


            <label className="label">Name:</label>
            <input type="text"
                className="textField"
                name="name"
                value={inputs.name || ''}
                onChange={handleChange}
            />

            <label className="label">Email:</label>
            <input type="email"
                className="textField"
                name="email"
                value={inputs.email}
                onChange={handleChange}
            />

            <label className="label">Message:</label>
            <textarea
                className="messageField"
                name="textarea"
                value={inputs.textarea}
                onChange={handleChange}
            />

            <input type="submit" value="Submit" className="submitButton" />


        </form>

    )
}
