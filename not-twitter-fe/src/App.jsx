//import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageListPage from './pages/MessageListPage';
import NewMessagePage from './pages/NewMessagePage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

function App() {
  const [error, setError] = useState('');

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage error={error} setError={setError}/>}
          />
          <Route
            path="/compose"
            element={<NewMessagePage error={error} setError={setError}/>}
          />
          <Route
            path="/messages"
            element={<MessageListPage error={error} setError={setError}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )


}

export default App;