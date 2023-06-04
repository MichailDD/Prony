
import React, { useState } from 'react';
import s from "./TaskPopup.module.css"
import taskPopupState from './TaskPopupState';
import DashBoardRadio from '../DashBoardSettings/DashBoardRadio/DashBoardRadio';
import DashBoardTogle from '../DashBoardSettings/DashBoardTogle/DashBordTogle';
import DashBoardCheked from '../DashBoardSettings/DashBoardCheked/DashBoardCheked';

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
            
            <div  >
            <span className={s.privacy__span}>Privacy</span>
            <div  className={s.top__radio}>
           <DashBoardRadio title={taskPopupState[0].title1} descr={taskPopupState[1].descr1} name={'privacy'}/>
            <DashBoardRadio title={taskPopupState[0].title2} descr={taskPopupState[1].descr2 }name={'privacy'}/>
           </div>
            </div>
            <div >
            <span className={s.privacy__span}>Status</span>
            <div className={`${s.top__radio} ${s.top__radio__right}`}>
            <DashBoardRadio title={taskPopupState[0].title3} descr={taskPopupState[1].descr3} name={'loked'} />
            <DashBoardRadio title={taskPopupState[0].title4} descr={taskPopupState[1].descr4} name={'loked'}/>
            </div>
            </div>
        </div>
        <div className={s.bottom}>
          <div className={s.bottom__settings}>
            <DashBoardTogle title={taskPopupState[0].title5} descr={taskPopupState[1].descr5}  />
            <DashBoardTogle title={taskPopupState[0].title6} descr={taskPopupState[1].descr6}  />
          </div>
          <div className={s.bottom__settings}>
          <DashBoardCheked  title={taskPopupState[0].title7} descr={taskPopupState[1].descr7} name="post" />
          <DashBoardCheked  title={taskPopupState[0].title8} descr={taskPopupState[1].descr8} name="post" />
          </div>
        </div>
        <div className={s.buttons}>
      {/* <Button onClick={onClose} title={'Cancel'}/> */}
      <button onClick={onClose}  className={`${s.buttons__btn} ${s.inactive}`}>Cancel</button>
      <button onClick={handleAddTask} className={s.buttons__btn}>Submit</button>
      </div>
      </div>
     
     </div>
    
    </div>
  );
};

export default TaskForm;
