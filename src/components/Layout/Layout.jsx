import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <header className={css.container}>
        <Logo />
        <Navigation />
      </header>
      {children}
    </>
  );
}
