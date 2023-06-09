

import React, { useState } from 'react';
import Modal from 'react-modal';
import TaskForm from '../TaskPopup/TaskPopup';
import SuccessPopup from '../TaskPopup/SuccessPopup/SuccessPopup';
import s from "./DashBoard.module.css"
import TitlePages from '../../TitlePages/TitlePages';
import EyeIcon from '../../BoardIcon/EyeIcon/EyeIcon';
import LockIcon from '../../BoardIcon/LockIcon/LockIcon';
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
        <div className={s.name}>
          <span className={s.name__span}>Name</span>
          <span className={s.name__span}>Posts</span>
        </div>
      <ul className={s.dashboard__list}>
        
        {tasks.map((task, index) => (
          <li key={index} className={s.dashboard__item}>
           <div className={s.list__blok}>
           <div className={s.list__left}>
           <img src="/src/assets/image/dotsIcon1.svg" alt="icon" />
            {task.title}
           </div>
           <span className={s.number}>12</span>
           <div className={s.actions}>
            <EyeIcon/>
            <LockIcon/>
           <img  onClick={() => handleDeleteTask(index)} src="/src/assets/image/dotsIcon2.svg" alt="icon" />
           </div>
           </div>
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
            backgroundColor:'#F9F9FC',
            border:'2px solid #1565C0',
            
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

