import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Timeline,
    TimelineEvent
} from '../time-line';
import {
    getTimeline, moreEvents, updateEvents, updateTimeline, moreTimeline
} from "../../redux/actions/timelineActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Button, Header, Icon, Segment, Rail, Container, Transition, Image} from "semantic-ui-react";

const globalStyles = {
    backgroundColor: 'rgb(238, 239, 239)',
    fontFamily: 'Arial',
    minHeight: '50em'
};

const inlineStyle = {
    'word-wrap' : 'break-word',
    'word-break' : 'normal'
};

export class TLE extends React.Component {
    static propTypes = {
        timelineEvents: PropTypes.array,
        token: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
        contentid: PropTypes.number,
        onGetTimeline: PropTypes.func,
        onUpdate: PropTypes.func,
        onMore: PropTypes.func,
        updateTimeline: PropTypes.func,
        moreTimeline: PropTypes.func,
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
        let d = new Date();
        this.props.updateTimeline(this.props.token, this.props.end.toISOString(), d.toISOString());
        this.props.onUpdate(d);
    };

    handleMoreClick = () => {
        let d = Number(this.props.contentid);
        let num = 0;
        if (d < 5) {
            num = d;
        } else {
            num = 5;
        }

        if (num !== 0) {
            this.props.moreTimeline(this.props.token, this.props.contentid, num);
            this.props.onMore(d - num);
        }
    };

    render() {
        let showEvents = this.props.timelineEvents.map((item, index) => {
            return (
                <TimelineEvent title={item.name}
                               createdAt={item.time}
                               titleStyle={{fontSize: 'small'}}
                >
                    {
                        item.img === '' ?
                            null :
                            <Image src={item.img}/>
                    }
                    <div style={inlineStyle}>
                        {item.content}
                    </div>
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
                        <Button floated content={'Update'} onClick={this.handleUpdateClick}
                                style={{
                                    margin: '50px',
                                    backgroundColor: '#1BB394',
                                    color: '#E5FFFB',
                                    float: 'right'
                                }}/>
                        <Timeline lineColor={'#7f7f7f'} style={{fontSize: 'medium', margin: '0px 0px 0px 35px'}}>
                            {showEvents}
                            {
                                this.props.contentid === 0 ?
                                    <Button floated data-tooltip="You have reached the bottom" data-position="top center"
                                            content={'More...'} onClick={this.handleMoreClick}
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
    contentid: state._timelineEvents.contentid
});

const mapDiapatchToProps = (dispatch, ownProps) => ({
    onGetTimeline: (token, start, end) => {
        dispatch(getTimeline(token, start, end));
    },
    updateTimeline: (token, start, end) => {
        dispatch(updateTimeline(token, start, end))
    },
    moreTimeline: (token, start, num) => {
        dispatch(moreTimeline(token, start, num))
    },
    onUpdate: (end) => {
        dispatch(updateEvents(end));
    },
    onMore: (start) => {
        dispatch(moreEvents(start));
    },
});

export default connect(mapStateToProps, mapDiapatchToProps)(TLE);