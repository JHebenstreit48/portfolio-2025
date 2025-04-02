import Navigation from "@/components/HeaderAndNav/Navigation";
import "@/SCSS/HeaderNavAndFooter/Header.scss";

export default function Header() {
  return (
    <div className="GlassWrapper">
      <h1 className="Header">Justin Hebenstreit</h1>
      <Navigation />
    </div>
  );
}
