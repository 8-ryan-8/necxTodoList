import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import Home from './pages/Home';
import TaskNewsfeed from './pages/TaskNewsfeed';
import Auth from './pages/Auth';
import PrivateRoutes from './components/PrivateRoutes';

// contribution test

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.8rem',
          },
        }}
      />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/taskNewsfeed" element={<TaskNewsfeed />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
