import React from 'react';
import InputBody from '../InputBody/InputBody';
import './RadioForm.scss';

const RadioForm = ({ name, text, title, value, checked, setChecked, className, payment }) => {
  return (
    <label
      className={`radio ${className ? className : ''} ${payment ? 'pay' : ''} ${
        checked === value ? 'active' : ''
      }`}>
      <input
        className='radio__input'
        type='radio'
        name={name}
        // value={value}
        // checked={checked === value}
        // onChange={(e) => {
        //   setChecked(e.currentTarget.value);
        // }}
      />
      <div className='radio__custom'></div>
      <InputBody className={'radio__body'} title={title} text={text} />
      {payment ? (
        <div className='radio__pay-num'>
          <p>{payment[0]}</p>
          <p>{payment[1]}</p>
          <p>{payment[2]}</p>
          <p>{payment[3]}</p>
        </div>
      ) : (
        <></>
      )}
    </label>
  );
};

export default RadioForm;
