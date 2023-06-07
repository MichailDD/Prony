import BlueBtn from "../Buttons/BlueBtn/BlueBtn";
import Button from "../Buttons/Button/Button";
import InputPhoto from "../InputPhoto/InputPhoto";
import s from "./CreatePostModal.module.css"
import createPostModalState from "./CreatePostModalState";
const CreatePostModal = (props) => {
    return ( 
        <div className={s.blok}>
            <div className={s.blok__top}>
                <span className={s.blok__title}>{createPostModalState[0].inputTitle}</span>
                <div className={s.blok__input}>
                    <span className={s.input__spanBr}>1 board</span>
                    <img src={createPostModalState[1].imgIcon} alt="icon" />
                </div>
            </div>
            <div className={s.blok__top}>
                <span className={s.blok__title}>{createPostModalState[0].inputTitle2}</span>
                <div className={s.blok__input}>
                    <span className={s.blok__title}>Enter post title</span>
                    <img src={createPostModalState[1].imgIcon} alt="icon" />
                </div>
            </div>
            <div className={s.blok__area}>
            <span className={s.blok__title}>{createPostModalState[0].inputTitle3}</span>
            <textarea className={s.area} placeholder="Enter detailes" name="bord" ></textarea>
            </div>
            <div className={s.input__photo}>
            <span className={s.blok__title}>{createPostModalState[0].inputTitle4}</span>

            <InputPhoto img={createPostModalState[1].imgIcon2} icon={createPostModalState[1].imgIcon3}/>
            </div>
            <div className={s.blok__top}>
                <span className={s.blok__title}>{createPostModalState[0].inputTitle5}</span>
                <div className={s.blok__input}>
                <span className={s.blok__title}>no selection</span>
                    <img src={createPostModalState[1].imgIcon} alt="icon" />
                </div>
            </div>
            <div className={s.blok__top}>
                <span className={s.blok__title}>{createPostModalState[0].inputTitle6}</span>
                <div className={s.blok__input}>
                    <span className={s.input__spanBr}>first status</span>
                    <img src={createPostModalState[1].imgIcon} alt="icon" />
                </div>
            </div>
            <div className={s.buttons}>
                <Button title={'Cancel'}/>
                <button className={s.btn}>Submit</button>
            </div>

        </div>
     );
}
 
export default CreatePostModal;