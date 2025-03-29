//import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageListPage from './pages/MessageListPage';
import NewMessagePage from './pages/NewMessagePage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage/>}
          />
          <Route
            path="/compose"
            element={<NewMessagePage/>}
          />
          <Route
            path="/messages"
            element={<MessageListPage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )


}

export default App;