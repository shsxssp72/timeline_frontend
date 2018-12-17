import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import {changeText,logOut,switchHistory,switchHome,switchIndex,switchPublish} from "../../redux/actions";
import {connect} from "react-redux";
import history from "../../history";
import {Button,Container,Menu,Segment} from "semantic-ui-react";


const menuStyle={
	border:'none',
	borderRadius:0,
	boxShadow:'none',
	marginBottom:'-1em',
	marginTop:'-1em',
	transition:'box-shadow 0.5s ease, padding 0.5s ease',
	backgroundColor:'#1BB394',
};

const fixedMenuStyle={
	border:'0px solid #ddd',
	boxShadow:'0px 3px 5px rgba(0, 0, 0, 0.2)',
	backgroundColor:'#1BB394',

};

const MenuItemStyle=
	{
		color:'#E5FFFB',
	};


class StickyMenu extends React.Component
{
	static propTypes={
		home:PropTypes.string,
		index:PropTypes.string,
		publish:PropTypes.string,
		history:PropTypes.string,
		isLogin:PropTypes.bool,
		switchHome:PropTypes.func,
		switchIndex:PropTypes.func,
		switchPublish:PropTypes.func,
		switchHistory:PropTypes.func,
		switchLogin:PropTypes.func,
		onLogOut:PropTypes.func
	};

	state={
		menuFixed:false,
		overlayFixed:false,
	};
	stickTopMenu=()=>this.setState({menuFixed:true});
	unStickTopMenu=()=>this.setState({menuFixed:false});

	render()
	{
		const {menuFixed,overlayFixed}=this.state;

		let right;
		if(this.props.isLogin)
		{
			right=(
				<Menu.Menu position='right'>
					<Button content={'Log out'} onClick={this.props.onLogOut} style={MenuItemStyle}/>
				</Menu.Menu>
			)
		}
		else
		{
			right=(
				<Menu.Menu position='right'>
					<Menu.Item as={Link} to="/login" style={MenuItemStyle}>
						Log in
					</Menu.Item>
					<Menu.Item as={Link} to="/register" style={MenuItemStyle}>
						Sign Up
					</Menu.Item>
				</Menu.Menu>
			)
		}

		return (
			<Segment vertical>
				<Menu boardless fixed={menuFixed?'top':undefined}
				      style={menuFixed?fixedMenuStyle:menuStyle}>
					<Container text>
						<Link to="/" className={this.props.home} onClick={this.props.switchHome}
						      style={MenuItemStyle}>
							Home
						</Link>
						<Link to="/index" className={this.props.index} onClick={this.props.switchIndex}
						      style={MenuItemStyle}>
							TimeLine
						</Link>
						<Link to="/publish" className={this.props.publish} onClick={this.props.switchPublish}
						      style={MenuItemStyle}>
							Publish
						</Link>
						<Link to="/history" className={this.props.history} onClick={this.props.switchHistory}
						      style={MenuItemStyle}>
							History
						</Link>
						{right}
					</Container>
				</Menu>
			</Segment>
		);
	};
}

const mapStateToProps=(state,ownProps)=>({
	home:state._currentPage.home,
	index:state._currentPage.index,
	publish:state._currentPage.publish,
	history:state._currentPage.history,
	isLogin:state._loginReducer.isLogin
});

const mapDispatchToProps=(dispatch,ownProps)=>({
	switchHome:()=>
	{
		dispatch(switchHome())
	},
	switchIndex:()=>
	{
		dispatch(switchIndex())
	},
	switchHistory:()=>
	{
		dispatch(switchHistory())
	},
	switchPublish:()=>
	{
		dispatch(switchPublish());
		dispatch(changeText('switch to publish'))
	},
	onLogOut:()=>
	{
		dispatch(logOut());
		dispatch(switchHome());
		history.push('/');
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(StickyMenu);
