import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
// import Dashboard from './pages/Dashboard';
import ContactUs from './pages/ContactUs';
import ShoppingPage from './pages/ShoppingPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage' ;
import ProfilePage from './pages/ProfilePage';
import SubmitReview from './pages/SubmitReview'; 
import ProductDetails from './pages/ProductDetails';
import OccasionSuggestions from './pages/OccasionSuggestions';
import FlowerCategoryPage from './pages/FlowerCategoryPage';
import CityFlowerPage from './pages/CityFlowerPage';
import CategorySuggestionsPage from './pages/CategorySuggestionsPage'
// import SectionNavBar from './components/SectionNavBar';
import AboutPage from './pages/AboutPage';
import LikedPage from './components/LikedPage';
import CartPage from './components/CartPage';
import ThankYou from './components/ThankYou';
import SearchBar from './components/SearchBar';
import HelpPage from './pages/HelpPage';
import { bestSelling, sentiments, MakeItSpecial } from './data/products';
import SearchResults from './pages/SearchResults';
import ChatBot from './components/ChatBot';

function AppWrapper() {
  useEffect(() => {
    const allItems = [
      ...bestSelling,
      ...MakeItSpecial,
      ...Object.values(sentiments).flat()
    ];
    localStorage.setItem('allItems', JSON.stringify(allItems));
  }, []);

  return (
    <>
      <MyNavbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/submit-review/" element={<SubmitReview />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/product/:name" element={<ProductDetails />} /> */}
        {/* <Route path="/product/:occasion/:name" element={<ProductDetails />} /> */}
        <Route path="/sentiments/:occasion" element={<OccasionSuggestions />} />
        <Route path="/flowers/:flowerName" element={<FlowerCategoryPage />} />
        <Route path="/city/:cityName" element={<CityFlowerPage />} />
        <Route path="/category/:category" element={<CategorySuggestionsPage />} />
        {/* <Route path="/SectionNavBar" element={<SectionNavBar />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/search-bar" element={<SearchBar />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/search" element={<SearchResults />} />
         </Routes>
         <ChatBot/>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
