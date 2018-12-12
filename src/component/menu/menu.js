import React from 'react';
import 'semantic-ui-css/semantic.min.css';

export default () => {
  return (
    <div class="ui inverted segment">
  		<div class="ui inverted secondary pointing menu">
    	  <a class="active item">
      		主页
    	  </a>
        <div class="right menu">
          <a class="item">
            登录
          </a>  
        </div>
  		</div>
		</div>
  );
}