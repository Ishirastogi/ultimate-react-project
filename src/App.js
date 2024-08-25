import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import SearchAndFilterPage from "./pages/SearchAndFilterPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <Header />
            <ErrorBoundary>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/search" element={<SearchAndFilterPage />} />
                <Route path="/404" element={<ErrorPage statusCode={404} />} />
                <Route element={<ErrorPage statusCode={404} />} />
              </Routes>
            </ErrorBoundary>
            <Footer />
            <ToastContainer />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
