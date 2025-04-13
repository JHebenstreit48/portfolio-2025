import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import '@/SCSS/ContactForm.scss';
export default function ContactForm() {
    const [inputs, setInputs] = useState({ name: "", email: "", textarea: "" });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    };
    return (_jsxs("form", { className: "formContainer", onSubmit: handleSubmit, children: [_jsx("label", { className: "label", children: "Name:" }), _jsx("input", { type: "text", className: "textField", name: "name", value: inputs.name || '', onChange: handleChange }), _jsx("label", { className: "label", children: "Email:" }), _jsx("input", { type: "email", className: "textField", name: "email", value: inputs.email, onChange: handleChange }), _jsx("label", { className: "label", children: "Message:" }), _jsx("textarea", { className: "messageField", name: "textarea", value: inputs.textarea, onChange: handleChange }), _jsx("input", { type: "submit", value: "Submit", className: "submitButton" })] }));
}
