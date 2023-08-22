import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { DogView } from "./pages/dogView";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SignUp } from "./pages/signup";
import { Login } from "./pages/login";
import { Dogs } from "./pages/dogs";
import { Private } from "./pages/private";
import { Contact } from "./pages/contact";
import { AboutUs } from "./pages/aboutUs";
import { FrequentlyAskedQuestions } from "./pages/frequentlyAskedQuestions";
import { Forgot } from "./pages/forgot";
import { Booking } from "./pages/booking";
import { ProductDisplay } from "./pages/checkout";
import { Success } from "./pages/success";
import { Canceled } from "./pages/canceled";
import { Report } from "./pages/report";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<Dogs />} path="/dogs" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<AboutUs />} path="/aboutUs" />
                        <Route element={<FrequentlyAskedQuestions />} path="/frequentlyAskedQuestions" />
                        <Route element={<Forgot />} path="/forgot" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Booking />} path="/booking" />
                        <Route element={<ProductDisplay />} path="/checkout" />
                        <Route element={<Success />} path="/success" />
                        <Route element={<Canceled />} path="/canceled" />
                        <Route element={<Report />} path="/report" />
                        <Route path="/dog/:id" element={<DogView />} />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);