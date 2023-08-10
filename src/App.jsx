import { Routes, Route } from "react-router-dom";
import Search from "./pages/searchPage/Search";
import About from "./pages/aboutPage/About";
import LogInForm from "./pages/logInPage/LogInForm";
import RegisterPage from "./pages/registerPage/RegisterPage";
import Payment from "./pages/payment page/Payment";
import BookInfo from "./pages/bookInfoPage/BookInfo";
import PaymentDone from "./pages/payment page/PaymentDone";
import HomePage from "./pages/homePage/HomePage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/bookinfo/:bookId" element={<BookInfo />} />
        <Route path="/paymentDone" element={<PaymentDone />} />
      </Routes>
    </>
  );
}

export default App;
