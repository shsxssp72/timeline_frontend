import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {changeText, publishContent} from "../../redux/actions";
import {closePublishFail, publishFail, closePublishSuccess} from "../../redux/actions/publishActions";
import PropTypes from 'prop-types';
import {Button, Header, Icon, Message, Segment, Transition, Container, Form, Image} from "semantic-ui-react";
import ImageForm from "../../model/ImageForm";

const globalStyles = {
    backgroundColor: 'rgb(238, 239, 239)',
    fontFamily: 'Arial',
    minHeight: '100em',
};

export class Publish extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        userid: PropTypes.string,
        token: PropTypes.string,
        imgUrl: PropTypes.string,
        failed: PropTypes.bool,
        successful: PropTypes.bool,
        onChangeText: PropTypes.func,
        publishContent: PropTypes.func,
        publishFail: PropTypes.func,
        closePublishFail: PropTypes.func,
        closePublishSuccess: PropTypes.func,
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

    handlePublishClick = () => {
        if (this.props.text === '' || this.props.text.length > 1000) {
            this.props.publishFail();
        } else {
            this.props.publishContent(this.props.token, this.props.userid, this.props.text, this.props.imgUrl);
        }
    };

    render() {
        let publishFailedMessage;
        if (this.props.failed) {
            publishFailedMessage = (
                <Message negative={true}>
                    <i className={'close icon'} onClick={this.props.closePublishFail}/>
                    <div className={'header'}>Ehh... Something went wrong?</div>
                    <p>Take a look at your content. Make sure they are valid and then try again.</p>
                </Message>
            );
        } else {
            publishFailedMessage = null;
        }

        let publishSucceedMessage;
        if (this.props.successful) {
            publishSucceedMessage = (
                <Message positive={true}>
                    <i className={'close icon'} onClick={this.props.closePublishSuccess}/>
                    <div className={'header'}>You have successfully published!</div>
                    <p>See your footprint in the TimeLine part.</p>
                </Message>
            );
        } else {
            publishSucceedMessage = null;
        }

        return (
            <Transition visible={this.state.visible} animation={'fade down'} during={1000}>
                <Segment style={globalStyles}>
                    <Container className="main ui">
                        <Header as={'h2'} className="ui center aligned icon header"
                                style={{padding: '50px 0px 10px 0px', color: '#7f7f7f'}}>
                            <Icon name={'pencil alternate'}/>
                            Record Your Time
                        </Header>
                        <ImageForm/>
                        <Form style={{margin: '1em 7em 1em 7em'}}>
                            <Segment className="field">
                                <textarea value={this.props.text} onChange={this.props.onChangeText} placeholder={'less than 1000 characters'}/>
                            </Segment>
                            <Button onClick={this.handlePublishClick}
                                    content={'Submit'}
                                    style={{backgroundColor: '#1BB394', color: '#E5FFFB', float: 'right'}}/>
                            {publishFailedMessage}
                            {publishSucceedMessage}
                        </Form>
                    </Container>
                </Segment>
            </Transition>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    text: state._publishEvents.text,
    userid: state._loginReducer.userid,
    token: state._loginReducer.jwtToken,
    imgUrl: state._publishEvents.imgUrl,
    failed: state._publishEvents.failed,
    successful: state._publishEvents.successful,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeText: (event) => {
        dispatch(changeText(event.target.value));
    },
    publishContent: (token, userid, content, imgUrl) => {
        dispatch(publishContent(token, userid, content, imgUrl))
    },
    publishFail: () => {
        dispatch(publishFail())
    },
    closePublishFail: () => {
        dispatch(closePublishFail())
    },
    closePublishSuccess: () => {
        dispatch(closePublishSuccess())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Publish);