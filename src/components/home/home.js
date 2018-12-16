import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import {switchIndex,} from "../../redux/actions";
import {connect} from "react-redux";
import {Button,Container,Header,Icon,Segment} from "semantic-ui-react";

const globalStyles={
	height:'85vh',
	backgroundColor:'#efefef'
};

class Home extends React.Component
{
	static propTypes={
		visible:PropTypes.bool,
		switchIndex:PropTypes.func,
		mountComplete:PropTypes.func
	};

	render()
	{
		return (
			<Segment vertical style={globalStyles}>
			{/*<div className="ui vertical masthead center aligned segment" style={globalStyles}>*/}
					<Container text style={{margin:'7em 0em 0em 0em',color:'#7f7f7f'}}>
						<Header as={'h1'} content={'Time-Line'} style={{fontSize:'4em',color:'#7f7f7f'}}/>
						<Header as={'h2'} content={'Record every bit of your life'}
						        style={{margin:'1em 0em 5em 0em',color:'#7f7f7f'}}/>
						<Button as={Link} to="/index" size={'huge'}
						        onClick={this.props.switchIndex}
						        style={{backgroundColor:'#1BB394',color:'#E5FFFB'}}>
							Get Started
							<Icon name={"arrow right"}/>
						</Button>
					</Container>
			{/*</div>*/}
			</Segment>
		);
	};
}

const mapDispatchToProps=(dispatch,ownProps)=>({
	switchIndex:()=>
	{
		dispatch(switchIndex())
	},
});

export default connect(mapDispatchToProps)(Home);