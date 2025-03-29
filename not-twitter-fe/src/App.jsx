//import './App.css';
import Header from './components/Header';
import { getMessages } from './services/messageService'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageListPage from './pages/MessageListPage';
import NewMessagePage from './pages/NewMessagePage';
import LoginPage from './pages/LoginPage';

function App() {

  const [messages, setMessages] = useState([]);  

  // periodically refresh (timer)
  /* useEffect(() => {
    getMessages().then(
      (messages) => setMessages(messages)
    );

    const fetchMessagesInterval = setInterval(() => {
        getMessages().then(
          (messages) => setMessages(messages)
        );
      }, 10000);
    return () => clearInterval(fetchMessagesInterval);
  }, []); */
 
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
            element={<MessageListPage  messages={messages}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )


}

export default App;