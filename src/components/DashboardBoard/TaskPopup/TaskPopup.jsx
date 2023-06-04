
import React, { useState } from 'react';
import s from "./TaskPopup.module.css"
import taskPopupState from './TaskPopupState';
import DashBoardRadio from '../DashBoardSettings/DashBoardRadio/DashBoardRadio';
const TaskForm = ({ onClose, onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask({ title: newTask });
      setNewTask('');
    }
  };

  return (
    <div className={s.popup}>
      <h2 className={s.title}>Edit Board</h2>
     <div className={s.popup__menu}>
     {/* <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <button onClick={onClose}>Cancel</button> */}
      <div className={s.left}>
     <div className={s.blok}>
        <span className={s.span}>Board name</span>
     <input
        className={s.input}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
     </div>
      <div className={s.blok}>
      <span className={s.span}>URL</span>
      <input  className={s.input} type="text" name="" id="" />
      </div>
      <div className={s.blok}>
      <span className={s.span}>Description</span>
      <textarea  className={`${s.input__descr} ${s.input}`} type="text" name="" id="" />
      </div>
      </div>

      <div className={s.right}>
        <div className={s.top}>
            <div className={s.top__left}  >
            <DashBoardRadio title={taskPopupState[0].title1} descr={taskPopupState[1].descr1}/>
            <DashBoardRadio title={taskPopupState[0].title2} descr={taskPopupState[1].descr2}/>
            </div>
            <div className={s.top__right}>

            </div>
        </div>
      </div>

     </div>
    </div>
  );
};

export default TaskForm;
