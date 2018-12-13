import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Timeline,
    TimelineEvent
} from '../time-line';

const globalStyles = {
    backgroundColor: 'rgb(238, 239, 239)',
    height: '100vh',
    fontFamily: 'Arial'
}

export default () => {
    return (
        <div style={globalStyles}>
            <h2 class="ui icon header" style={{margin: '20px 0px 0px 20px'}}>
                <i class="clock icon"></i>
                <div class="content">
                    Time Line
                </div>
            </h2>
            <div class="ui labeled right floated button" tabindex="0" style={{margin: '30px'}}>
                <div class="ui grey button">更新</div>
                <a class="ui basic label">
                    0
                </a>
            </div>
            <Timeline style = {{fontSize: 'medium', margin: '0px 0px 0px 55px'}} >
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           titleStyle={{fontSize: 'small'}}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                titleStyle={{fontSize: 'small'}}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
            </Timeline>
            <div class="ui grey right floated button" style={{margin: '30px'}}>更多..</div>
        </div>
    );
}