import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Button,Icon} from "semantic-ui-react";
import PropTypes from 'prop-types'

class SubmitButton extends React.Component
{
	expireTime;

	constructor(props)
	{
		super(props);
		this.expireTime=props.expireTime;
		this.tick=this.tick.bind(this);
		this.handleCLick=this.handleCLick.bind(this);
		this.state=
			{
				isClicked:false,
				secondElapsed:0
			}
	}

	tick()
	{
		this.setState({secondElapsed:this.state.secondElapsed+1});
	}

	handleCLick()
	{
		this.setState({isClicked:true});
		this.interval=setInterval(this.tick,1000);
	}

	render()
	{
		if(this.state.secondElapsed>this.props.expireTime)
		{
			this.setState({isClicked:false,secondElapsed:0});
			clearInterval(this.interval);
		}

		if(!this.state.isClicked)
		{
			return <Button fluid style={{backgroundColor:'#1BB394',color:'#E5FFFB'}} size={'large'}
			               animated={'fade'} onClick={this.handleCLick}>
				<Button.Content visible>
					{this.props.name}
				</Button.Content>
				<Button.Content hidden>
					<Icon name={"arrow right"}/>
				</Button.Content>
			</Button>;
		}else
			return <Button fluid loading style={{backgroundColor:'#1BB394',color:'#E5FFFB'}}
			               size={'large'} content={this.props.name}/>
	}
}

SubmitButton.defaultProp=
	{
		expireTime:2
	};
SubmitButton.propTypes=
	{
		expireTime:PropTypes.number,
	};

export default SubmitButton;