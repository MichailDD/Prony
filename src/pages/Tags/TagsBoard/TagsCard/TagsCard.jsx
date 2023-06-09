import React, { useState } from 'react';
import Modal from 'react-modal';
import  s from "./TagsCard.module.css"
import TitlePages from '../../../../components/TitlePages/TitlePages';
import tagsState from '../../TagsState';
import BlueBtn from '../../../../components/Buttons/BlueBtn/BlueBtn';
const TagsCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [task, setTask] = useState('');
  const [tagColor, setTagColor] = useState('');
  const [colorOptions] = useState(['red', 'blue', 'green']); // Предложенные цвета
  const [taskList, setTaskList] = useState([]); // Список задач

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleTagColorChange = (event) => {
    setTagColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Создание новой задачи
    const newTask = {
      task: task,
      color: tagColor,
    };

    // Добавление новой задачи в список задач
    setTaskList([...taskList, newTask]);

    // Сброс значений полей после добавления задачи
    setTask('');
    setTagColor('');

    closeModal();
  };

  return (
    <div className={s.main}>
        <div className={s.main__top}>
            <TitlePages title={tagsState[0].title1}/>
            <button onClick={openModal} className={s.add__btn}>{tagsState[0].title2}</button>
        </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Добавить задачу</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} onChange={handleTaskChange} placeholder="Введите задачу" />
          <div className="color-options">
            {colorOptions.map((color) => (
              <label className={s.label__color} key={color} style={{ backgroundColor: color }}>
                <input className={s.input__color}
                  type="radio"
                  name="color"
                  value={color}
                  checked={tagColor === color}
                  onChange={handleTagColorChange}
                  backgroundColor={color}

                />
                <span className="color-option" />
              </label>
            ))}
                      </div>
          <button type="submit">Добавить задачу</button>
        </form>
      </Modal>

      
      <div className={s.taskBoard}> 
      <div className={s.taskBoard__top}>
                <span className={`${s.name} ${s.taskBoard__title}`}>{tagsState[1].span1}</span>
                <span className={`${s.color} ${s.taskBoard__title}`}>{tagsState[1].span2}</span>
                <span className={`${s.privacy} ${s.taskBoard__title}`}>{tagsState[1].span3}</span>
      </div>
      <div className={s.taskBoard__card}>
      {taskList.map((task, index) => (
          <div className={s.task__color}key={index} style={{ backgroundColor: task.color }}>
            {task.task}   
                   
          </div>
        ))}
        {
            taskList.map((task,index)=>(
                <div  className={s.span} style={{backgroundColor:task.color}}></div>  
            ))
        }
      </div>
      </div>
    </div>
  );
};

export default TagsCard;
