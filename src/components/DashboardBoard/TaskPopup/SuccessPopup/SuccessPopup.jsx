import s from "./SuccessPopup.module.css"
import img1 from "/src/assets/image/iconSucces.svg"
import img2 from "/src/assets/image/iconClose.svg"
const SuccessPopup = ({ onClose }) => {
  return (
    <div className={s.succes}>
      <div className={s.blok}>
      <img src={img1} alt="icon" />
      <h2 className={s.title}>This is a success message!</h2>
      </div>
      <img  onClick={onClose}src={img2} alt="icon"   />
    </div>
  );
};

export default SuccessPopup;
