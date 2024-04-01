import "./App.css";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layot/Layot";
import RegistrationForm from "./pages/Registration/Registration";
import LoginForm from "./pages/Login/Login";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/register"
              element={<RegistrationForm></RegistrationForm>}
            ></Route>
            <Route path="/login" element={<LoginForm></LoginForm>}></Route>
            <Route path="/contacts" element={<Contacts></Contacts>}></Route>
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
