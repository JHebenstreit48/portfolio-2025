import { useLocation, useNavigate } from 'react-router-dom';
import '@/SCSS/HeaderNavAndFooter/Navigation.scss';

interface NavigationLinks {
  pageTitle: string;
}

const ListItems = (props: NavigationLinks & { isActive: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`btn-lg ${props.isActive ? 'active-link' : ''}`}
    >
      {props.pageTitle}
    </button>
  );
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

  return (
    <div className="Navigation">
      {navLinks.map((navLink) => (
        <ListItems
          key={navLink.pageTitle}
          onClick={navLink.path}
          pageTitle={navLink.pageTitle}
          isActive={currentTab === navLink.location}
        />
      ))}
    </div>
  );
}
