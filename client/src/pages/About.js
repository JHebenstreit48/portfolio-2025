import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ProfilePicture from '@/assets/images/profilePicture.jpg';
import '@/SCSS/AboutMe/AboutMe.scss';
import Bio from '@/components/About/Bio';
export default function About() {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { className: 'profilePicture', src: ProfilePicture, alt: 'Profile Picture' }) }), _jsx(Bio, {})] }) }));
}
