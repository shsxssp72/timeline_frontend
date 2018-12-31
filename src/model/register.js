import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Link} from "react-router-dom";
import {Form, Grid, Header, Icon, Message, Segment, Transition} from "semantic-ui-react";
import SubmitButton from "./SubmitButton";
import {
    changeRegName,
    changeRegNick,
    changeRegPass
} from "../redux/actions";
import {switchLogin} from "../redux/actions/pageSwitchActions";
import {closeRegisterFail, changeAgreed} from "../redux/actions/registerActions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

export class RegisterForm extends React.Component {
    static propTypes = {
        displayname: PropTypes.string,
        username: PropTypes.string,
        password: PropTypes.string,
        failed: PropTypes.bool,
        onChangeRegName: PropTypes.func,
        onChangeRegNick: PropTypes.func,
        onChangeRegPass: PropTypes.func,
        switchLogin: PropTypes.func,
        closeRegisterFail: PropTypes.func,
        changeAgreed: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state =
            {
                visible: false,
                errorOccurs: false
            }
    }

    componentDidMount() {
        this.setState({visible: true});
    }


    render() {
        return (
            <Transition visible={this.state.visible} animation={'fade down'} during={1000}>
                <Segment className={'login-form'}>
                    <style>{`
	  body > div,
	  body > div > div,
	  body > div > div > div.login-form {
	    height: 100%;
	  }
	`}</style>
                    <Grid textAlign={'center'} verticalAlign={'middle'} style={{height: '100%'}}>
                        <Grid.Column style={{maxWidth: 450}}>
                            <Header as={'h2'} style={{color: '#1BB394'}} textAlign={'center'}>
                                Sign Up
                            </Header>
                            <Message
                                attached
                                header={'Welcome to our site!'}
                                content={'Fill in the form below and quickly get a new account'}
                            />
                            <Form className='attached fluid segment'>
                                <Message error visible={this.state.errorOccurs}
                                         header={'Ehh... Something went wrong?'}
                                         list={['It seems that the username has been snapped up. Why not try another username?']}/>

                                <Form.Input icon={'user'} iconPosition={'left'} placeholder={'Username(less than 15 characters)'}
                                            type={'text'} error={this.state.errorOccurs}
                                            value={this.props.username} onChange={this.props.onChangeRegName}/>
                                <Form.Input icon={'address card'} iconPosition={'left'} placeholder={'Nickname(less than 15 characters)'}
                                            type={'text'} value={this.props.displayname}
                                            onChange={this.props.onChangeRegNick}/>
                                <Form.Input icon={'lock'} iconPosition={'left'} placeholder={'Password(less than 255 characters)'}
                                            type={'password'} value={this.props.password}
                                            onChange={this.props.onChangeRegPass}/>
                                <Form.Checkbox inline label={'I agree to the terms and conditions'}
                                               onChange={this.props.changeAgreed}/>
                                <SubmitButton name={'Register'} expireTime={2}/>
                            </Form>
                            {
                                this.props.failed === true ?
                                    <Message negative={true}>
                                        <i className={'close icon'} onClick={this.props.closeRegisterFail}/>
                                        <div className={'header'}>Ehh... Something went wrong?</div>
                                        <p>Take a look at your information. Make sure they are valid and then try
                                            again.</p>
                                    </Message> : null
                            }
                            <Message>
                                <Icon name={'help'}/>
                                Already have an account? <Link to={'/login'} style={{color: '#1BB394'}}
                                                               onClick={this.props.switchLogin}>Sign In</Link> instead.
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Transition>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    displayname: state._registerReducer.displayname,
    username: state._registerReducer.username,
    password: state._registerReducer.password,
    failed: state._registerReducer.failed
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeRegName: (event) => {
        dispatch(changeRegName(event.target.value))
    },
    onChangeRegNick: (event) => {
        dispatch(changeRegNick(event.target.value))
    },
    onChangeRegPass: (event) => {
        dispatch(changeRegPass(event.target.value))
    },
    switchLogin: () => {
        dispatch(switchLogin())
    },
    closeRegisterFail: () => {
        dispatch(closeRegisterFail())
    },
    changeAgreed: () => {
        dispatch(changeAgreed())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);