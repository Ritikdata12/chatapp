import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import "./App.css";
import { useState } from 'react';
import io from 'socket.io-client';
import Chat from './pages/chat';

const socket = io.connect('http://localhost:4000');

function App() {
  const[username, setusername] = useState('');
  const[room, setroom] = useState('');


  return (
    <>
    <Router>
      <div className='App'>
      <Routes>
        <Route path = "/" 
        element={
        <Home
        username = {username}
        setusername = {setusername}
        room = {room}
        setroom = {setroom}
        socket = {socket}
        />
        }
        />
        <Route path='/chat' element={<Chat username={username} room={room} socket={socket}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
