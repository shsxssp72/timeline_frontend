import React from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import {Form,Grid,Header,Icon,Message,Segment,Transition} from "semantic-ui-react";
import SubmitButton from "./SubmitButton";


class RegisterForm extends React.Component
{
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
								            type={'text'} error={this.state.errorOccurs}/>
								<Form.Input icon={'address card'} iconPosition={'left'} placeholder={'Nickname'}
								            type={'text'}/>
								<Form.Input icon={'lock'} iconPosition={'left'} placeholder={'Password'}
								            type={'password'}/>
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

export default RegisterForm;