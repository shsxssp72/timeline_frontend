import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {changeText,publishContent} from "../../redux/actions";
import PropTypes from 'prop-types';
import {Button,Header,Icon,Segment} from "semantic-ui-react";

const globalStyles={
	backgroundColor:'rgb(238, 239, 239)',
	height:'100vh',
	fontFamily:'Arial'
};

class Publish extends React.Component
{
	static propTypes={
		text:PropTypes.string,
		userid: PropTypes.string,
		token: PropTypes.string,
		onChangeText:PropTypes.func,
		publishContent:PropTypes.func
	};

	handlePublishClick = () => {
		this.props.publishContent(this.props.token, this.props.userid, this.props.text);
	};

	render()
	{
		return (
			<Segment vertical style={globalStyles}>
				<Header as={'h2'} className="ui center aligned icon header"
				    style={{padding:'50px 0px 10px 0px',color:'#7f7f7f'}}>
					<Icon name={'pencil alternate'}/>
					Record Your Time
				</Header>
				<Button content={'Upload Picture'}
				        style={{backgroundColor:'#1BB394',color:'#E5FFFB',margin:'0px 0px 0px 100px'}}/>
				<div className="ui image" src="#"/>
				<div className="ui form" style={{margin:'1em 7em 1em 7em'}}>
					<div className="field">
						<textarea value={this.props.text} onChange={this.props.onChangeText}/>
					</div>
					<Button floated
					        onClick={this.handlePublishClick}
					        content={'Submit'}
					        style={{backgroundColor:'#1BB394',color:'#E5FFFB',float:'right'}}/>
				</div>
			</Segment>
		);
	}
}

const mapStateToProps=(state,ownProps)=>({
	text:state._publishEvents.text,
	userid: state._loginReducer.userid,
	token: state._loginReducer.jwtToken
});

const mapDispatchToProps=(dispatch,ownProps)=>({
	onChangeText:(event)=>
	{
		dispatch(changeText(event.target.value));
	},
	publishContent:(token, userid, content)=>
	{
		dispatch(publishContent(token, userid, content))
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Publish);