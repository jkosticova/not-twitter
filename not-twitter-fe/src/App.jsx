//import './App.css';
import Header from './components/Header';
import { getMessages } from './services/messageService'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MessageListPage from './pages/MessageListPage';
import NewMessagePage from './pages/NewMessagePage';

function App() {

  const [messages, setMessages] = useState([]);    
  
  const location = useLocation();  
 
  // periodically refresh (timer)
  useEffect(() => {
    setMessages(getMessages());
    const fetchMessagesInterval = setInterval(() => {
      setMessages(getMessages());
    }, 1000);
    return () => clearInterval(fetchMessagesInterval);
  }, []);

  return (
    <div className="container">
      <Header messages={messages} />
      {location.pathname === "/" && <MessageListPage messages={messages}  />}
      {location.pathname === "/compose" && <NewMessagePage setMessages={setMessages} />}         
    </div>
  )

}

export default App;