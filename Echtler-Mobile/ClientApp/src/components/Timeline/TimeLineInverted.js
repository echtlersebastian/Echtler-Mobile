import React from 'react'
import TimeLineImage from './TimeLineImage'
import './Timeline.css';
import Typography from '@material-ui/core/Typography';

class TimeLineInverted extends React.Component{

    render(){
        return(<li className="timeline-inverted">
                <TimeLineImage imgUrl = {this.props.imgUrl}></TimeLineImage>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                    <Typography align="left" variant="h5">{this.props.title}</Typography>
                    <Typography align="left" variant="h6">{this.props.subheading}</Typography>
                    </div>
                    <div className="timeline-body">
                    <Typography align="left" variant="body1">{this.props.caption}</Typography>
                    </div>
                </div>
        </li>   
      )
}
}

export default TimeLineInverted;
