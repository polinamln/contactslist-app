import "./App.css";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layot/Layot";
import RegistrationForm from "./pages/Registration/Registration";
import LoginForm from "./pages/Login/Login";
import Contacts from "./pages/Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { SelectRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const isRefreshing = useSelector(SelectRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h3 className="load">Loading...</h3>
  ) : (
    <div>
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationForm></RegistrationForm>}
                ></RestrictedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginForm />} />}
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contacts></Contacts>}></PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Layout>

      {/* <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong! Please try again.</p>}
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}

export default App;

// Для обгортки компонентів публічних і приватних сторінок використовуйте компоненти PrivateRoute та RestrictedRoute.

// / - маршрут домашньої сторінки додатка, де можна розмістити інформацію про додаток чи його розробника. Рендерить компонент Home.
// /register - публічний маршрут для реєстрації нового користувача, на якому рендериться компонент сторінки Registration з формою RegistrationForm.
// /login - публічний маршрут для логіна існуючого користувача, на якому рендериться компонент сторінки Login з формою LoginForm.
// /contacts - приватний маршрут для роботи зі списком контактів користувача, на якому рендериться компонент сторінки Contacts.
