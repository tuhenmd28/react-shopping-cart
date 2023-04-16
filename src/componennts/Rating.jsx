import React from 'react'
import {AiTwotoneStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({rating,onClick,style}) => {
  return (
    <>
      {[...Array(5)].map((_,i)=>(
        <span key={i} onClick={()=>onClick(i)} style={style}>
            {rating>i?(
                <AiTwotoneStar style={{color:"white"}}/>
            ):(
                <AiOutlineStar style={{color:"white"}}/>
            )}
        </span>
      ))}
    </>
  )
}

export default Rating
