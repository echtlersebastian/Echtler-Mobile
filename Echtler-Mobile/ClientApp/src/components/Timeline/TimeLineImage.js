import React from 'react'
import './Timeline.css';



const TimeLineImage = props => {

    const { imgUrl } = props;

    return(    
        <div className="timeline-image">
            <img className="rounded-circle img-fluid" src={imgUrl}  alt=""/>
            
        </div>
    
        )
}
export default TimeLineImage;