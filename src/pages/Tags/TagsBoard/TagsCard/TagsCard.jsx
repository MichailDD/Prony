import React, { useState } from 'react';
import Modal from 'react-modal';
import  s from "./TagsCard.module.css"
import TitlePages from '../../../../components/TitlePages/TitlePages';
import tagsState from '../../TagsState';
import tagsCardSate from './TagsCardState';
import Button from '../../../../components/Buttons/Button/Button';
import BlueBtn from '../../../../components/Buttons/BlueBtn/BlueBtn';
const TagsCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [task, setTask] = useState('');
  const [tagColor, setTagColor] = useState('');
  const [colorOptions] = useState(['#B71C1C', '#DE3B31', '#FF6B62', '#43A047','#62C966','#ADF1B0','#0F498C','#1565C0','#4A98F1','#A4CEFF','#FF9800','#FFD600','#FFED8D','#474747','#818181','#CCCCCC','#6D28AE','#A258E7',' #CD98FF','#E6CBFF']); 
  const [taskList, setTaskList] = useState([]); 

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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
         style={{
          overlay: {
            
          },
          content: {
            borderRadius: '20px', 
            backgroundColor:'#F9F9FC',
            border:'2px solid #1565C0',
            width:'600px',
            height:'460px',
            marginLeft:'30%',
            marginTop:'200px'

          },
        }}>
        <form onSubmit={handleSubmit}>
          <div className={s.input__blok}><input className={s.input__task} type="text" value={task} onChange={handleTaskChange} placeholder="Enter a tag" />
          <span className={s.input__title}>Name</span></div>
          <span className={s.input__title}>Color</span>
          <div className={s.color__options}>
            {colorOptions.map((color) => (
              <label className={s.label__color} key={color} style={{ backgroundColor: color }}>
                {/* <img className={s.label__img} src={tagsCardSate[0].icon5} alt="icon" /> */}
                <input className={s.input__color}
                  type="radio"
                  name="color"
                  value={color}
                  checked={tagColor === color}
                  onChange={handleTagColorChange}
                  backgroundColor={color}
                />
                <span className={s.option} />
              </label>
            ))}
          </div>
          <div className={s.color__privacy}>
          <span className={s.input__title}>Privacy</span>
          <div className={s.input__radio}>
            <div className={s.input}>
            <input className={s.input__input} type="radio" name="privacy" id="privacy" />      <span className={s.color__span}>Public</span>

            </div>
                <input className={s.input__input}  type="radio" name="privacy" id="privacy" />      <span className={s.color__span}>Private</span>
          </div>
          <span className={s.input__title}>Private tags are only visible to moderators.</span>
          </div>
          <div className={s.actions}>
            <Button title={'Cancel'}/>
          <button className={s.btn} type="submit"> Submit</button>
          </div>
        </form>
      </Modal>

      
      <div className={s.taskBoard}> 
      <div className={s.taskBoard__top}>
                <span className={`${s.name} ${s.taskBoard__title}`}>{tagsState[1].span1}</span>
                <span className={`${s.color} ${s.taskBoard__title}`}>{tagsState[1].span2}</span>
                <span className={`${s.privacy} ${s.taskBoard__title}`}>{tagsState[1].span3}</span>
      </div>
      <div className={s.taskBoard__cards}>
              {taskList.map((task, index) => (
              <div className={s.task__color}>
                {/* <div className={s.task__tagName}>
                {task.task} 
                </div> */}
                <div className={s.taskBoard__item}>
                <img src={tagsCardSate[0].icon1} alt="icon" />
                <div style={{ backgroundColor: task.color }} className={s.item}>{task.task} </div>
                </div>
                  <div className={s.color__info}>
                  <div className={s.span} style={{backgroundColor:task.color}}></div>  
                  <span className={s.color__status}>private</span>
                  </div>
                  <div className={s.color__actions}>
                  <img src={tagsCardSate[0].icon2} alt="icon" />
                  <img src={tagsCardSate[0].icon3} alt="icon" />
                  <img src={tagsCardSate[0].icon4} alt="icon" />
                  </div>
                   </div>
        ))}          
      </div>
      </div>
    </div>
  );
};

export default TagsCard;
