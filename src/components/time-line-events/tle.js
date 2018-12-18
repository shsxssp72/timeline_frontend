import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Timeline,
    TimelineEvent
} from '../time-line';
import {
    getTimeline, moreEvents, updateEvents
} from "../../redux/actions/timelineActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Button,Header,Icon,Segment} from "semantic-ui-react";
import Menu from '../menu';

const globalStyles = {
    backgroundColor: 'rgb(238, 239, 239)',
    height: '100vh',
    fontFamily: 'Arial',
    overflow: 'scroll'
};

class TLE extends React.Component{
    static propTypes = {
        timelineEvents: PropTypes.array,
        token: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
        onGetTimeline: PropTypes.func,
        onUpdate: PropTypes.func,
        onMore: PropTypes.func
    };

    handleUpdateClick = () => {
        let d = new Date();
        this.props.onUpdate(d);

        this.props.onGetTimeline(this.props.token, this.props.start.toISOString(), this.props.end.toISOString());
    };

    handleMoreClick = () => {
        let d = this.props.start;
        let year = d.getFullYear()-1;
        d.setFullYear(year);
        this.props.onMore(d);

        this.props.onGetTimeline(this.props.token, this.props.start.toISOString(), this.props.end.toISOString());
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
            <Segment style={globalStyles}>
                <Header as={'h2'} className="ui icon header" style={{margin: '30px 0px 0px 35px', color:'#7f7f7f'}}>
                    <Icon name="clock icon"/>
                    <div className="content">
                        Time Line
                    </div>
                </Header>
                <Button floated content={'Update'}  onClick={this.handleUpdateClick}
                        style={{margin: '50px', backgroundColor:'#1BB394',color:'#E5FFFB',float:'right'}}/>
                <Timeline lineColor={'#7f7f7f'} style={{fontSize: 'medium', margin: '0px 0px 0px 70px'}}>
                    {showEvents}
                </Timeline>
                <Button floated content={'More...'}  onClick={this.handleMoreClick}
                        style={{margin: '50px', backgroundColor:'#1BB394',color:'#E5FFFB',float:'right'}}/>
            </Segment>
        );
    }
}

const mapStateToProps = (state, ownProps) =>({
    timelineEvents : state._timelineEvents.currentEvents,
    token: state._loginReducer.jwtToken,
    start: state._timelineEvents.start,
    end: state._timelineEvents.end
});

const mapDiapatchToProps = (dispatch, ownProps) => ({
    onGetTimeline: (token, start, end) => {
        dispatch(getTimeline(token, start, end));
    },
    onUpdate: (end) => {
        dispatch(updateEvents(end));
    },
    onMore: (start) => {
        dispatch(moreEvents(start));
    }
});

export default connect(mapStateToProps, mapDiapatchToProps)(TLE);