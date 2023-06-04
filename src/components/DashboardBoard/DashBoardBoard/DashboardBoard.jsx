

import React, { useState } from 'react';
import Modal from 'react-modal';
import TaskForm from '../TaskPopup/TaskPopup';
import SuccessPopup from '../TaskPopup/SuccessPopup/SuccessPopup';
import s from "./DashBoard.module.css"
import TitlePages from '../../TitlePages/TitlePages';
const DashboardBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
    setIsSuccessPopupOpen(true);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
      <>

        <div className={s.main}>
      
      <div className={s.board__top}>
      <TitlePages title="Boards"/>
    
      <button className={s.button} onClick={() => setIsModalOpen(true)}>Create Board</button>
      </div>
      {isSuccessPopupOpen && (
        <SuccessPopup onClose={() => setIsSuccessPopupOpen(false)} />
      )}
      <ul>
        
        {tasks.map((task, index) => (
          <li key={index}>
            <img src="/src/assets/image/dotsIcon1.svg" alt="icon" />
            {task.title}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Task Modal"
        style={{
          overlay: {
            
          },
          content: {
            borderRadius: '20px', 
            backgroundColor:'#F9F9FC'
            
          },
        }}
      >
        <TaskForm
          onClose={() => setIsModalOpen(false)}
          onAddTask={handleAddTask}
        />
      </Modal>
     
    </div>
      </>
  );
};

export default DashboardBoard;
