import BoardCardTask from "../BoardsCardTask";
import boardCardTaskState from "../BoardsCardTaskState";
const BoardCards = (props) => {
    return ( 
        <div>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
            <BoardCardTask icon={boardCardTaskState[2].icon1}
            info={boardCardTaskState[0].title}
            number={boardCardTaskState[1].number} 
            icon2={boardCardTaskState[2].icon2}/>
        </div>
     );
}
 
export default BoardCards;