import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Form,Grid,Header,Icon,Message,Segment,Transition} from "semantic-ui-react";
import SubmitButton from "./SubmitButton";


class LoginForm extends React.Component
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
						<Grid.Column style={{maxWidth:400}}>
							<Header as={'h2'} style={{color:'#1BB394'}} textAlign={'center'}>
								Sign In
							</Header>
							<Form>
								<Segment raised>
									<Message error visible={this.state.errorOccurs}
									         header={'Ehh... Something went wrong?'}
									         list={['Take a look at the username and the password. Make sure they are correct.']}/>

									<Form.Input fluid icon={'user'} iconPosition={'left'}
									            placeholder={'Username'} error={this.state.errorOccurs}/>
									<Form.Input fluid icon={'lock'} iconPosition={'left'}
									            placeholder={'Password'} type={'password'}
									            error={this.state.errorOccurs}/>
									<SubmitButton name={'Login'} expireTime={2}/>
								</Segment>
							</Form>
							<Message>
								<Icon name='help'/>
								New to us? <a href={'#'} style={{color:'#1BB394'}}>Sign Up</a>
							</Message>
						</Grid.Column>
					</Grid>
				</Segment>
			</Transition>
		);
	}
}

export default LoginForm;