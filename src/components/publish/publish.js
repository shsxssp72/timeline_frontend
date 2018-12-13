import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const globalStyles = {
	backgroundColor: 'rgb(238, 239, 239)',
	height: '100vh',
	fontFamily: 'Arial'
}

export default () => (
	<div style={globalStyles}>
		<h2 class="ui center aligned icon header" style={{padding: '50px 0px 10px 0px'}}>
			<i class="pencil alternate icon"></i> 
			Record Your Time 
		</h2>
		<div class="ui grey button" style={{margin: '10px 0px 10px 100px'}}>上载图片</div>
		<div class="ui image" src="#" />
		<div class="ui form" style={{margin: '10px 100px 10px 100px'}}>
  			<div class="field">
    		<textarea></textarea>
  			</div>
  			<button class="ui grey right floated button" type="submit">提交</button>
		</div>
	</div>
);