import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.div}>
      <NavLink className={css.link} to="/register">
        Registration
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
