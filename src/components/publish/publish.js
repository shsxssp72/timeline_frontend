import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import {
	publishContent,
	changeText
} from "../../redux/actions";
import PropTypes from 'prop-types';
import Menu from '../menu';

const globalStyles = {
	backgroundColor: 'rgb(238, 239, 239)',
	height: '100vh',
	fontFamily: 'Arial'
};

class Publish extends React.Component{
	static propTypes = {
		text: PropTypes.string,
		onChangeText: PropTypes.func,
		publishContent: PropTypes.func
	};
	render(){
		return (
			<div style={globalStyles}>
				<h2 className="ui center aligned icon header" style={{padding: '50px 0px 10px 0px'}}>
					<i className="pencil alternate icon" />
					Record Your Time
				</h2>
				<div className="ui grey button" style={{margin: '10px 0px 10px 100px'}}>上载图片</div>
				<div className="ui image" src="#" />
				<div className="ui form" style={{margin: '10px 100px 10px 100px'}}>
					<div className="field">
						<input type='text' value={this.props.text}  onChange={this.props.onChangeText}/>
					</div>
					<button className="ui grey right floated button" type="submit"
							onClick={this.props.publishContent}>提交
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	text: state._eventsUpdate.text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onChangeText: (event) => {
		dispatch(changeText(event.target.value));
	},
	publishContent: () =>{
		dispatch(publishContent());
		dispatch(changeText(''))
	}

});

export default connect(mapStateToProps, mapDispatchToProps)(Publish);