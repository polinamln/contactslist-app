import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.div}>
        <Navigation className={css.link}></Navigation>
        <AuthNav className={css.link}></AuthNav>
      </div>
    </div>
  );
}
//   {
//     isLoggedIn ? <UserMenu /> : <AuthNav />;
//   }

// Компонент AppBar має рендерити компонент навігації Navigation та AuthNav. Водночас авторизований користувач замість AuthNav має бачити UserMenu.

// Обов'язково очищайте колекцію контактів у стані при логауті користувача.
