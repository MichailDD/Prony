import BlueBtn from "../../components/Buttons/BlueBtn/BlueBtn";
import ChangelogList from "../../components/ChangelogList/ChangelogList";
import TitlePages from "../../components/TitlePages/TitlePages";
import s from "./Changelog.module.css"
const Changelog = (props) => {
    return (  
        <div className={s.main}>
            <div className={s.main__wrapper}>
            <div className={s.main__header}>
                <TitlePages title="Changelog records"/>
                <BlueBtn title='Add record'/>
            </div>
            <div className={s.main__list}>
                <ChangelogList/>
            </div>
            </div>
        </div>
    );
}
 
export default Changelog;