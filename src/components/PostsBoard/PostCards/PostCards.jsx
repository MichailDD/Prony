import PostCard from "./PostCard/PostCard";
import s from "./PostCards.module.css"
import postCardState from "./PostsCardState";
const PostCards = (props) => {
    const colorCard ={backgroundColor:"#ffff"}
    return ( 
        <div className={s.wrapper}>
            <PostCard img={postCardState[1].imgAvatar}
                      name={postCardState[0].name} 
                      title={postCardState[2].title} 
                      time={postCardState[4].time } 
                      descr={postCardState[3].subtitle}
                      icon__like={postCardState[6].icon}
                      numberLike={postCardState[5].like}
                      icon__message= {postCardState[6].icon2}
                      numberMessege={postCardState[5].messege}
                      dotsIcon={postCardState[6].icon3}/>
                      <PostCard img={postCardState[1].imgAvatar2}
                      name={postCardState[0].name2} 
                      title={postCardState[2].title} 
                      time={postCardState[4].time } 
                      descr={postCardState[3].subtitle}
                      icon__like={postCardState[6].icon}
                      numberLike={postCardState[5].like}
                      icon__message= {postCardState[6].icon2}
                      numberMessege={postCardState[5].messege}
                      dotsIcon={postCardState[6].icon3}
                      style={colorCard}
                      />
                       <PostCard img={postCardState[1].imgAvatar3}
                      name={postCardState[0].name3} 
                      title={postCardState[2].title} 
                      time={postCardState[4].time } 
                      descr={postCardState[3].subtitle}
                      icon__like={postCardState[6].icon}
                      numberLike={postCardState[5].like}
                      icon__message= {postCardState[6].icon2}
                      numberMessege={postCardState[5].messege}
                      dotsIcon={postCardState[6].icon3}/>
                      <PostCard img={postCardState[1].imgAvatar4}
                      name={postCardState[0].name4} 
                      title={postCardState[2].title} 
                      time={postCardState[4].time } 
                      descr={postCardState[3].subtitle}
                      icon__like={postCardState[6].icon}
                      numberLike={postCardState[5].like}
                      icon__message= {postCardState[6].icon2}
                      numberMessege={postCardState[5].messege}
                      dotsIcon={postCardState[6].icon3}
                      style={colorCard}
                      />
                       <PostCard img={postCardState[1].imgAvatar5}
                      name={postCardState[0].name5} 
                      title={postCardState[2].title} 
                      time={postCardState[4].time } 
                      descr={postCardState[3].subtitle}
                      icon__like={postCardState[6].icon}
                      numberLike={postCardState[5].like}
                      icon__message= {postCardState[6].icon2}
                      numberMessege={postCardState[5].messege}
                      dotsIcon={postCardState[6].icon3}/>
                         <PostCard img={postCardState[1].imgAvatar6}
                      name={postCardState[0].name6} 
                      title={postCardState[2].title} 
                      time={postCardState[4].time } 
                      descr={postCardState[3].subtitle}
                      icon__like={postCardState[6].icon}
                      numberLike={postCardState[5].like}
                      icon__message= {postCardState[6].icon2}
                      numberMessege={postCardState[5].messege}
                      dotsIcon={postCardState[6].icon3}
                      style={colorCard}
                      />
                      
        </div>
     );
}
 
export default PostCards;