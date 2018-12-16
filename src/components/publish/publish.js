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
		onChangeText:PropTypes.func,
		publishContent:PropTypes.func
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
				{/*<div className="ui button" style={{margin:'10px 0px 10px 100px'}}>Upload Picture</div>*/}
				<div className="ui image" src="#"/>
				<div className="ui form" style={{margin:'1em 7em 1em 7em'}}>
					<div className="field">
						<input type='text' value={this.props.text} onChange={this.props.onChangeText}/>
					</div>
					<Button floated
					        onClick={this.props.publishContent}
					        content={'Submit'}
					        style={{backgroundColor:'#1BB394',color:'#E5FFFB',float:'right'}}/>
					{/*<button className="ui grey right floated button" type="submit"*/}
					        {/*>Submit*/}
					{/*</button>*/}
				</div>
			</Segment>
		);
	}
}

const mapStateToProps=(state,ownProps)=>({
	text:state._eventsUpdate.text
});

const mapDispatchToProps=(dispatch,ownProps)=>({
	onChangeText:(event)=>
	{
		dispatch(changeText(event.target.value));
	},
	publishContent:()=>
	{
		dispatch(publishContent());
		dispatch(changeText(''))
	}

});

export default connect(mapStateToProps,mapDispatchToProps)(Publish);