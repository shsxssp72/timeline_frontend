import React from 'react';
import 'semantic-ui-css/semantic.min.css';

export default () =>
{
	return (
		<div class="ui inverted segment">
			<div class="ui inverted secondary pointing menu">
				<a class="active item">
					Index
				</a>
				<div class="right menu">
					<a class="item">
						Login
					</a>
				</div>
			</div>
		</div>
	);
}