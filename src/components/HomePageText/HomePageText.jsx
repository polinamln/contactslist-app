import { useSelector } from "react-redux";
import css from "./HomePageText.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function HomePageText() {
  const user = useSelector(selectUser);
  return (
    <div className={css.text}>
      <p>
        Hello, <span className={css.textAccent}>{user.name}</span> ! Our web
        application offers a convenient way to store and manage your phone
        contacts securely. With our platform, you can keep all your contact
        information private and accessible only to you. Easily add, edit, and
        delete contacts as needed, ensuring that your personal information
        remains confidential. Experience peace of mind knowing that your
        contacts are safely stored and organized with our user-friendly
        interface. <br />
        <span className={css.textAccent}>Enjoy your use!</span>
      </p>
    </div>
  );
}
