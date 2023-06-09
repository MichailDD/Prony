import s from "./Statistic.module.css"
import icon from "/src/assets/image/arrowMenu.svg"
const Statistic = (props) => {
    return ( 
        <div className={s.main}>
          <div className={s.blok__info}>
          <div className={s.text}>
            <span className={s.title}>Statistic</span>
            </div>
            <div className={s.checked}>
                <div className={s.checked__blok}>
                <input   className={s.input} type="radio" name="statistic" />  <span className={`${s.span} ${s.users}`}>Users</span>
                    </div>           
                    <div className={s.checked__blok}>
                    <input className={s.input} type="radio" name="statistic" />  <span className={`${s.span} ${s.voters}`}>Voters</span>

                        </div>   
                        <div className={s.checked__blok}>
                        <input className={s.input} type="radio" name="statistic" />  <span className={`${s.span} ${s.posts}`}>Posts</span>

                            </div>        
            </div>
          </div>
            <div className={s.days}>
                <span>last 90 days</span>
                <img className={s.icon} src={icon}alt="arrow" />
            </div>
        </div>
     );
}
 
export default Statistic;