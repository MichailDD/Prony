

import React, { useState } from 'react';
import Modal from 'react-modal';
import TaskForm from '../TaskPopup/TaskPopup';
import SuccessPopup from '../TaskPopup/SuccessPopup/SuccessPopup';
import s from "./DashBoard.module.css"
import TitlePages from '../../TitlePages/TitlePages';
import EyeIcon from '../../BoardIcon/EyeIcon/EyeIcon';
import LockIcon from '../../BoardIcon/LockIcon/LockIcon';
import icon1 from '/src/assets/image/dotsIcon1.svg'
import icon2 from "/src/assets/image/dotsIcon2.svg"
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
           <img src={icon1} alt="icon" />
            {task.title}
           </div>
           <span className={s.number}>12</span>
           <div className={s.actions}>
            <EyeIcon/>
            <LockIcon/>
           <img  onClick={() => handleDeleteTask(index)} src={icon2} alt="icon" />
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


// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import { ChromePicker } from 'react-color';

// const TaskAdder = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [task, setTask] = useState('');
//   const [tagColor, setTagColor] = useState('');
//   const [colorOptions] = useState(['red', 'blue', 'green']); // Предложенные цвета

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleTaskChange = (event) => {
//     setTask(event.target.value);
//   };

//   const handleTagColorChange = (color) => {
//     setTagColor(color.hex);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Добавьте вашу логику обработки добавления задачи здесь
//     // Например, вы можете вызвать функцию для добавления задачи в список

//     // Сбросить значения полей после добавления задачи
//     setTask('');
//     setTagColor('');

//     closeModal();
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Добавить задачу</button>

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         <h2>Добавить задачу</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={task} onChange={handleTaskChange} placeholder="Введите задачу" />
//           <div>
//             <span>Выберите цвет:</span>
//             <div className="color-options">
//               {colorOptions.map((color) => (
//                 <div
//                   key={color}
//                   className="color-option"
//                   style={{ backgroundColor: color, border: tagColor === color ? '2px solid #000' : 'none' }}
//                   onClick={() => setTagColor(color)}
//                 ></div>
//               ))}
//             </div>
//             {tagColor && (
//               <div className="selected-color" style={{ backgroundColor: tagColor }}>
//                 &nbsp;
//               </div>
//             )}
//           </div>
//           <button type="submit">Добавить задачу</button>
//         </form>
//         <ChromePicker
//           color={tagColor}
//           onChangeComplete={handleTagColorChange}
//           disableAlpha={true}
//           className="color-picker"
//         />
//       </Modal>
//     </div>
//   );
// };

// export default TaskAdder;
