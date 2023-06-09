import TitlePages from '../../../components/TitlePages/TitlePages';
import s from './VotersPosts.module.css'
import voterPostsState from './VoterPostsState';
import VotersPostsCards from './VotersPostsCards/VoterPostsCard/VotersPostsCards';
const VotersPosts = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.wrapper__top}>
                <div className={s.wrapper__info}>
                <TitlePages title={voterPostsState[0].title}/>
                <span className={s.wrapper__subtitle}>{voterPostsState[0].title2}</span>
                </div>
                <div className={s.wrapper__actions}>
                    <img src={voterPostsState[1].icon} alt="export icon" />
                    <span className={s.wrapper__span}>Export</span>
                </div>
                </div>
                <div className={s.wrapper__board}>
                    <VotersPostsCards/>
                </div>
            </div>
        </div>
     );
}
 
export default VotersPosts;