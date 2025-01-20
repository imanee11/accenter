import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/todo" element={<TodoPage />} /> */}
      </Routes>
    </>
  );
};

export default App;