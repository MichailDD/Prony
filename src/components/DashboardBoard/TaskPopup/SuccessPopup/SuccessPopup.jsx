import s from "./SuccessPopup.module.css"
const SuccessPopup = ({ onClose }) => {
  return (
    <div className={s.succes}>
      <div className={s.blok}>
      <img src="/src/assets/image/iconSucces.svg" alt="icon" />
      <h2 className={s.title}>This is a success message!</h2>
      </div>
      <img  onClick={onClose}src="/src/assets/image/iconClose.svg" alt="icon"   />
    </div>
  );
};

export default SuccessPopup;
