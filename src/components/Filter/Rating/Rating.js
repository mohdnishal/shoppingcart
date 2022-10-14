import React from 'react'
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
function Rating({Rating,onClick,style}) {
  return (
    <>
    {[...Array(5)].map((pos,index)=>(
        <span key={index} onClick={()=>onClick(index)} style={style}>
            {Rating>index?(
                <AiFillStar fontSize="15px" />
            ):(
                <AiOutlineStar fontSize="15px"/>
            )}
        </span>

    ))}
      
    </>
  )
}

export default Rating
