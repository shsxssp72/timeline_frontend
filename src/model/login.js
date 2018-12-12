import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Button, Divider, Form, Grid, Header, Icon, Image, Input, Message, Segment} from "semantic-ui-react";

const LoginForm = () => (
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
		 			<Form>
		 				<Segment stacked>
		 					<Form.Input fluid icon={'user'} iconPosition={'left'}
							            placeholder={'Username'}/>
							<Form.Input fluid icon={'lock'} iconPosition={'left'}
							            placeholder={'Password'} type={'password'}/>
							<Button fluid style={{backgroundColor: '#1BB394', color: '#E5FFFB'}} size={'large'}
							        animated={'fade'}>
								<Button.Content visible>
									Login
								</Button.Content>
								<Button.Content hidden>
									<Icon name={"arrow right"}/>
								</Button.Content>
							</Button>
						</Segment>
					</Form>
					<Message>
						New to us? <a href={'#'} style={{color: '#1BB394'}}>Sign Up</a>
					</Message>
				</Grid.Column>
			</Grid>
		</Segment>
);

export default LoginForm;