import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Timeline,
    TimelineEvent
} from '../time-line';
import {
    getTimeline, moreEvents, updateEvents, startMore, startUpdate, stopMore, stopUpdate
} from "../../redux/actions/timelineActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Button, Header, Icon, Segment, Rail, Container, Transition} from "semantic-ui-react";
import Menu from '../menu';

const globalStyles = {
    backgroundColor: 'rgb(238, 239, 239)',
    fontFamily: 'Arial'
};

class TLE extends React.Component {
    static propTypes = {
        timelineEvents: PropTypes.array,
        token: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
        updating: PropTypes.bool,
        more_ing: PropTypes.bool,
        onGetTimeline: PropTypes.func,
        onUpdate: PropTypes.func,
        onMore: PropTypes.func,
        startUpdate: PropTypes.func,
        stopUpdate: PropTypes.func,
        startMore: PropTypes.func,
        stopMore: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state =
            {
                visible: false
            }
    }

    componentDidMount() {
        this.setState({visible: true});
    }

    handleUpdateClick = () => {
        this.props.startUpdate();
        let d = new Date();
        this.props.onUpdate(d);

        this.props.onGetTimeline(this.props.token, this.props.start.toISOString(), this.props.end.toISOString());
        this.props.stopUpdate();
    };

    handleMoreClick = () => {
        this.props.startMore();
        let d = this.props.start;
        let year = d.getFullYear() - 1;
        d.setFullYear(year);
        this.props.onMore(d);

        this.props.onGetTimeline(this.props.token, this.props.start.toISOString(), this.props.end.toISOString());
        this.props.stopMore();
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
            <Transition visible={this.state.visible} animation={'fade down'} during={1000}>
                <Segment style={globalStyles}>
                    <Container className="main ui">
                        <Header as={'h2'} className="ui icon header"
                                style={{margin: '30px 0px 0px 0px', color: '#7f7f7f'}}>
                            <Icon name="clock icon"/>
                            <div className="content">
                                Time Line
                            </div>
                        </Header>
                        {
                            this.props.updating === true ?
                                <Button floated loading content={'Update'} onClick={this.handleUpdateClick}
                                        style={{
                                            margin: '50px',
                                            backgroundColor: '#1BB394',
                                            color: '#E5FFFB',
                                            float: 'right'
                                        }}/> :
                                <Button floated content={'Update'} onClick={this.handleUpdateClick}
                                        style={{
                                            margin: '50px',
                                            backgroundColor: '#1BB394',
                                            color: '#E5FFFB',
                                            float: 'right'
                                        }}/>

                        }
                        <Timeline lineColor={'#7f7f7f'} style={{fontSize: 'medium', margin: '0px 0px 0px 35px'}}>
                            {showEvents}
                            {
                                this.props.more_ing === true ?
                                    <Button floated loading content={'More...'} onClick={this.handleMoreClick}
                                            style={{
                                                margin: '50px',
                                                backgroundColor: '#1BB394',
                                                color: '#E5FFFB',
                                                float: 'right'
                                            }}/> :
                                    <Button floated content={'More...'} onClick={this.handleMoreClick}
                                            style={{
                                                margin: '50px',
                                                backgroundColor: '#1BB394',
                                                color: '#E5FFFB',
                                                float: 'right'
                                            }}/>
                            }
                        </Timeline>
                    </Container>
                </Segment>
            </Transition>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    timelineEvents: state._timelineEvents.currentEvents,
    token: state._loginReducer.jwtToken,
    start: state._timelineEvents.start,
    end: state._timelineEvents.end,
    updating: state._timelineEvents.updating,
    more_ing: state._timelineEvents.more_ing
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
    },
    startUpdate: () => {
        dispatch(startUpdate())
    },
    stopUpdate: () => {
        dispatch(stopUpdate())
    },
    startMore: () => {
        dispatch(startMore())
    },
    stopMore: () => {
        dispatch(stopMore())
    }
});

export default connect(mapStateToProps, mapDiapatchToProps)(TLE);