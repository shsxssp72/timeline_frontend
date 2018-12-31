import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Form, Grid, Header, Icon, Message, Segment, Transition} from "semantic-ui-react";
import SubmitButton from "./SubmitButton";
import {
    changePassword,
    changeUsername
} from "../redux/actions";
import {switchRegister} from "../redux/actions/pageSwitchActions";
import {closeLoginFail} from "../redux/actions/loginActions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


export class LoginForm extends React.Component {
    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        isLogin: PropTypes.bool,
        failed: PropTypes.bool,
        onChangeUsername: PropTypes.func,
        onChangePassword: PropTypes.func,
        onLogin: PropTypes.func,
        switchRegister: PropTypes.func,
        closeLoginFail: PropTypes.func
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
                        <Grid.Column style={{maxWidth: 400}}>
                            <Header as={'h2'} style={{color: '#1BB394'}} textAlign={'center'}>
                                Sign In
                            </Header>
                            <Form className='attached fluid segment'>
                                <Segment raised>
                                    <Message error visible={this.state.errorOccurs}
                                             header={'Ehh... Something went wrong?'}
                                             list={['Take a look at the username and the password. Make sure they are correct.']}/>

                                    <Form.Input fluid icon={'user'} iconPosition={'left'}
                                                placeholder={'Username'} error={this.state.errorOccurs}
                                                value={this.props.username} onChange={this.props.onChangeUsername}/>
                                    <Form.Input fluid icon={'lock'} iconPosition={'left'}
                                                placeholder={'Password'} type={'password'}
                                                error={this.state.errorOccurs}
                                                value={this.props.password} onChange={this.props.onChangePassword}/>
                                    <SubmitButton name={'Login'} expireTime={2}/>
                                </Segment>
                            </Form>
                            {
                                this.props.failed === true ?
                                    <Message negative={true}>
                                        <i className={'close icon'} onClick={this.props.closeLoginFail}/>
                                        <div className={'header'}>Ehh... Something went wrong?</div>
                                        <p>Take a look at the username and the password. Make sure they are correct.</p>
                                    </Message>: null
                            }
                            <Message>
                                <Icon name='help'/>
                                New to us? <Link to={'/register'} style={{color: '#1BB394'}}
                                                 onClick={this.props.switchRegister}>Sign Up</Link>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Transition>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    username: state._loginReducer.username,
    password: state._loginReducer.password,
    isLogin: state._loginReducer.isLogin,
    failed: state._loginReducer.failed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeUsername: (event) => {
        dispatch(changeUsername(event.target.value))
    },
    onChangePassword: (event) => {
        dispatch(changePassword(event.target.value))
    },
    switchRegister: () => {
        dispatch(switchRegister())
    },
    closeLoginFail: () => {
        dispatch(closeLoginFail())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);