//import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageListPage from './pages/MessageListPage';
import NewMessagePage from './pages/NewMessagePage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

function App() {
  const [error, setError] = useState('');
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <div className="container">
      <BrowserRouter>
        <Header authStatus={authStatus} setAuthStatus={setAuthStatus} setError={setError} error={error} />
        <Routes>
          <Route
            path="/"
            element={<LoginPage error={error} setError={setError} setAuthStatus={setAuthStatus} />}
          />          
          <Route
            path="/compose"
            element={<NewMessagePage error={error} setError={setError} authStatus={authStatus} setAuthStatus={setAuthStatus} />}
          />
          <Route
            path="/messages"
            element={<MessageListPage error={error} setError={setError} setAuthStatus={setAuthStatus} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;