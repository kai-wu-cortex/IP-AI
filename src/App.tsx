import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Overview from './pages/Overview';
import ContentCreation from './pages/ContentCreation';
import Publishing from './pages/Publishing';
import Modeling from './pages/Modeling';
import Ecommerce from './pages/Ecommerce';
import CustomerService from './pages/CustomerService';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Overview />} />
              <Route path="create" element={<ContentCreation />} />
              <Route path="pricing" element={<Pricing />} />
              
              {/* Pro Features */}
              <Route element={<ProtectedRoute requiredSla="pro" />}>
                <Route path="publish" element={<Publishing />} />
                <Route path="modeling" element={<Modeling />} />
              </Route>

              {/* Enterprise Features */}
              <Route element={<ProtectedRoute requiredSla="enterprise" />}>
                <Route path="ecommerce" element={<Ecommerce />} />
                <Route path="service" element={<CustomerService />} />
              </Route>
            </Route>
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
