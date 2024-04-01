import { useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar";
import css from "./Layot.module.css";
import { selectError, selectLoading } from "../../redux/auth/selectors";

export default function Layout({ children }) {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.div}>
      <AppBar />
      {children}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong! Please try again.</p>}
    </div>
  );
}
