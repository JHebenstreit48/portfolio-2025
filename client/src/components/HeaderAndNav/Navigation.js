import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation, useNavigate } from 'react-router-dom';
import '@/SCSS/HeaderNavAndFooter/Navigation.scss';
const ListItems = (props) => {
    return (_jsx("button", { onClick: props.onClick, type: "button", className: `btn-lg ${props.isActive ? 'active-link' : ''}`, children: props.pageTitle }));
};
export default function Navigation() {
    const navigation = useNavigate();
    const currentTab = useLocation().pathname;
    const navLinks = [
        { pageTitle: 'About', path: () => navigation('/'), location: '/' },
        { pageTitle: 'Contact', path: () => navigation('/contact'), location: '/contact' },
        { pageTitle: 'Portfolio', path: () => navigation('/portfolio'), location: '/portfolio' },
        { pageTitle: 'Resume', path: () => navigation('/resume'), location: '/resume' },
    ];
    return (_jsx("div", { className: "Navigation", children: navLinks.map((navLink) => (_jsx(ListItems, { onClick: navLink.path, pageTitle: navLink.pageTitle, isActive: currentTab === navLink.location }, navLink.pageTitle))) }));
}
