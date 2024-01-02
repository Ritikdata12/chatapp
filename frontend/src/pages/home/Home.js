import React from 'react'
// import styles from "./homestyle.css"
import styles from "./style.module.css"
import {useNavigate } from 'react-router-dom';

const Home = ({username, setusername, room, setroom, socket }) => {
    const navigate = useNavigate();

    const joinRoom = () => {
        if (room !== '' && username !== '') {
          socket.emit('join_room', { username, room });
        }

        navigate('/chat', { replace: true });
      };



  return (
    
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Welcome`}</h1>
        <input className={styles.input}
         placeholder='Username...'
         onChange={(e)=> setusername(e.target.value)}
         />

      <select className={styles.input} 
      onChange={(e) => setroom(e.target.value)}>
     <option>-- Select Room --</option>
     <option value="javascript">JavaScript</option>
     <option value="node">Node</option>
     <option value="express">Express</option>
     <option value="react">React</option>
    </select>


        <button
          className='btn btn-secondary'
          style={{ width: '100%' }}
          onClick={joinRoom} // Add this
        >
          Join Room
        </button>

      </div>
    </div>
    
  )
}

export default Home

