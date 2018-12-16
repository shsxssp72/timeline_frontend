import React from 'react';
// import './index.css';
import 'semantic-ui-css/semantic.min.css'
import {Form,Grid,Header,Icon,Message,Segment,Transition} from "semantic-ui-react";
import SubmitButton from "./SubmitButton";
import {
	changeRegName,
	changeRegNick,
	changeRegPass
} from "../redux/actions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class RegisterForm extends React.Component
{
	static propTypes = {
		displayname: PropTypes.string,
		username: PropTypes.string,
		password: PropTypes.string,
		onChangeRegName: PropTypes.func,
		onChangeRegNick: PropTypes.func,
		onChangeRegPass: PropTypes.func
	};

	constructor(props)
	{
		super(props);
		this.state=
			{
				visible:false,
				errorOccurs:false
			}
	}

	componentDidMount()
	{
		this.setState({visible:true});
	}

	render()
	{
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
					<Grid textAlign={'center'} verticalAlign={'middle'} style={{height:'100%'}}>
						<Grid.Column style={{maxWidth:450}}>
							<Header as={'h2'} style={{color:'#1BB394'}} textAlign={'center'}>
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

								<Form.Input icon={'user'} iconPosition={'left'} placeholder={'Username'}
								            type={'text'} error={this.state.errorOccurs}
											value={this.props.username} onChange={this.props.onChangeRegName}/>
								<Form.Input icon={'address card'} iconPosition={'left'} placeholder={'Nickname'}
								            type={'text'} value={this.props.displayname} onChange={this.props.onChangeRegNick}/>
								<Form.Input icon={'lock'} iconPosition={'left'} placeholder={'Password'}
								            type={'password'} value={this.props.password} onChange={this.props.onChangeRegPass}/>
								<Form.Checkbox inline label={'I agree to the terms and conditions'}/>
								<SubmitButton name={'Register'} expireTime={2}/>
							</Form>
							<Message>
								<Icon name={'help'}/>
								Already have an account? <a href='#' style={{color:'#1BB394'}}>Sign In</a> instead.
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
	password: state._registerReducer.password
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
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);