import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Timeline,
    TimelineEvent
} from '../time-line';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Menu from '../menu';

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
                <h2 className="ui icon header" style={{margin: '30px 0px 0px 35px'}}>
                    <i className="clock icon"/>
                    <div className="content">
                        Time Line
                    </div>
                </h2>
                <div className="ui labeled right floated button" tabIndex="0" style={{margin: '50px'}}>
                    <div className="ui grey button">更新</div>
                    <a className="ui basic label">
                        0
                    </a>
                </div>
                <Timeline style={{fontSize: 'medium', margin: '0px 0px 0px 70px'}}>
                    {showEvents}
                </Timeline>
                <div className="ui grey right floated button" style={{margin: '50px'}}>更多..</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>({
    timelineEvents : state._eventsUpdate.currentEvents
});

export default connect(mapStateToProps)(TLE);