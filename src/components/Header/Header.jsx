import MenuTitle from '../MenuTitle/MenuTitle';
import s from './Header.module.css';
import headerState from './HeaderState';
const Header = (props) => {
  return (
    <header>
      <div className={s.header}>
        <div className={s.header__blok}>
          <div className={s.header__left}>
            <img src={headerState[0].logo} alt='logo' />
          </div>
          <div className={s.header__right}>
            <div className={s.check}>
              {/* <input className={s.input}   type="radio" name="theme"  /><span className={s.theme__title}>{headerState[1].text1}</span>
                   <input   className={s.input} type="radio" name="theme"  /><span className={s.theme__title}>{headerState[1].text2}</span> */}
              <label className={s.label}>
                <input type='radio' name='name1' className={s.input} />
                <span className={s.fake}></span>
                <span className={s.theme__title}>{headerState[1].text1}</span>
              </label>
              <label className={s.label}>
                <input type='radio' name1='name1' className={s.input} />
                <span className={s.fake}></span>
                <span className={s.theme__title}>{headerState[1].text2}</span>
              </label>
            </div>
            <div className={s.person}>
              <div className={s.image}>
                <img src={headerState[0].avatar} alt='avatar photo' />
              </div>
              <div className={s.info__avatar}>
                <div className={s.avatar__title}>
                  <MenuTitle menu__title={headerState[1].text3} />
                </div>
                <div className={s.online}>
                  <div className={s.green}></div>
                  <span className={s.green__status}>{headerState[1].text4}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
