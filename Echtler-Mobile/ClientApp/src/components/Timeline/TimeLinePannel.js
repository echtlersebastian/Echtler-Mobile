import React from 'react'
import TimeLineImage from './TimeLineImage'
import './Timeline.css';

import Typography from '@material-ui/core/Typography';

function TimeLinePannel({ title, subheading, caption, imgUrl }){

    return (<li className="timeline-pannel">
    <TimeLineImage imgUrl={imgUrl}></TimeLineImage>
    <div className="timeline-panel">
    <div className="timeline-heading">
                    <Typography align="right" variant="h5">{title}</Typography>
                    <Typography align="right" variant="h6">{subheading}</Typography>
                    </div>
                    <div className="timeline-body">
                    <Typography align="right" variant="body1">{caption}</Typography>
                    </div>
    </div>
</li>
    )
}
export default TimeLinePannel;