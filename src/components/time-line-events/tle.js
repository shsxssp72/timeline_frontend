import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Timeline,
    TimelineEvent
} from '../time-line';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Menu from '../menu';
import {Icon} from "semantic-ui-react";

const globalStyles = {
    backgroundColor: 'rgb(238, 239, 239)',
    height: '100vh',
    fontFamily: 'Arial',
    overflow: 'scroll'
};

class TLE extends React.Component{
    static propTypes = {
        timelineEvents: PropTypes.array
    };

    render() {
        let showEvents = this.props.timelineEvents.map((item, index) => {
            return (
                <TimelineEvent title={item.name}
                               createdAt={item.time}
                               titleStyle={{fontSize: 'small'}}
                >
                    {item.content}
                </TimelineEvent>
            );
        });
        return (
            <div style={globalStyles}>
                <h2 className="ui icon header" style={{margin: '30px 0px 0px 35px',color:'#7f7f7f'}}>
                    <Icon name={'clock'} />
                    <div className="content">
                        Time Line
                    </div>
                </h2>
                <div className="ui labeled right floated button" tabIndex="0" style={{margin: '50px',backgroundColor:'#1BB394',color:'#E5FFFB'}}>
                    <div className="ui grey button" style={{backgroundColor:'#1BB394',color:'#E5FFFB'}}>Update</div>
                    <a className="ui basic label">
                        0
                    </a>
                </div>
                <Timeline style={{fontSize: 'medium', margin: '0px 0px 0px 70px'}}>
                    {showEvents}
                </Timeline>
                <div className="ui right floated button" style={{margin: '50px',backgroundColor:'#1BB394',color:'#E5FFFB'}}>More...</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>({
    timelineEvents : state._eventsUpdate.currentEvents
});

export default connect(mapStateToProps)(TLE);