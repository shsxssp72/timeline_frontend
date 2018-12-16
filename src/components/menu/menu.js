import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import {changeText,switchHistory,switchHome,switchIndex,switchLogin,switchPublish} from "../../redux/actions";
import {connect} from "react-redux";
import {Container,Menu,Visibility} from "semantic-ui-react";

const menuStyle={
	border:'none',
	borderRadius:0,
	boxShadow:'none',
	// marginBottom:'1em',
	// marginTop:'1em',
	transition:'box-shadow 0.5s ease, padding 0.5s ease',
	backgroundColor:'#1BB394',
};

const fixedMenuStyle={
	border:'1px solid #ddd',
	boxShadow:'0px 3px 5px rgba(0, 0, 0, 0.2)',
	backgroundColor:'#1BB394',

};

const MenuItemStyle=
	{
		color:'#E5FFFB',
	};


class CustomMenu extends React.Component
{
	static propTypes={
		home:PropTypes.string,
		index:PropTypes.string,
		publish:PropTypes.string,
		history:PropTypes.string,
		login:PropTypes.string,
		switchHome:PropTypes.func,
		switchIndex:PropTypes.func,
		switchPublish:PropTypes.func,
		switchHistory:PropTypes.func,
		switchLogin:PropTypes.func
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
		return (

			<Visibility
				onBottomPassed={this.stickTopMenu}
				onBottomVisible={this.unStickTopMenu}
				once={false}
			>
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
						{/*<Link to="/history" className={this.props.history} onClick={this.props.switchHistory}*/}
						      {/*style={MenuItemStyle}>*/}
							{/*History*/}
						{/*</Link>*/}
						<Menu.Menu position='right'>
							<Menu.Item as={Link} to="/login" style={MenuItemStyle}>
								Log in
							</Menu.Item>
							<Menu.Item as={Link} to="/register" style={MenuItemStyle}>
								Sign Up
							</Menu.Item>
						</Menu.Menu>
					</Container>
				</Menu>
			</Visibility>
		);
	};
}

const mapStateToProps=(state,ownProps)=>({
	home:state._currentPage.home,
	index:state._currentPage.index,
	publish:state._currentPage.publish,
	history:state._currentPage.history,
	login:state._currentPage.login
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
	switchLogin:()=>
	{
		dispatch(switchLogin())
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(CustomMenu);