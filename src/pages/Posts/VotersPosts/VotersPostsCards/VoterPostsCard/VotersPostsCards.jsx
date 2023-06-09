import VotersPostsCard from "./VotersPostsCard";
import voterPostsCardsState from "./VotersPostsCardsState";
import s from "./VotersPostsCards.module.css"
const VotersPostsCards = (props) => {
    const style = {
        backgroundColor:'#F8F8F8'
    }
    return ( 
        <div className={s.main}>
            <VotersPostsCard 
            image={voterPostsCardsState[1].avatar1} 
            name={voterPostsCardsState[0].name} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}/>
             <VotersPostsCard 
            image={voterPostsCardsState[1].avatar2} 
            name={voterPostsCardsState[0].name2} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}
            style={style}
            />
            <VotersPostsCard 
            image={voterPostsCardsState[1].avatar3} 
            name={voterPostsCardsState[0].name3} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}/>
               <VotersPostsCard 
            image={voterPostsCardsState[1].avatar4} 
            name={voterPostsCardsState[0].name4} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}
            style={style}
            />
             <VotersPostsCard 
            image={voterPostsCardsState[1].avatar5} 
            name={voterPostsCardsState[0].name5} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}/>
                <VotersPostsCard 
            image={voterPostsCardsState[1].avatar6} 
            name={voterPostsCardsState[0].name6} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}
            style={style}
            />
             <VotersPostsCard 
            image={voterPostsCardsState[1].avatar7} 
            name={voterPostsCardsState[0].name7} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}/>
                 <VotersPostsCard 
            image={voterPostsCardsState[1].avatar8} 
            name={voterPostsCardsState[0].name8} 
            time={voterPostsCardsState[2].time}
            icon={voterPostsCardsState[3].icon}
            style={style}
            />
        </div>
     );
}
 
export default VotersPostsCards;