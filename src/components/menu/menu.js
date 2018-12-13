import React from 'react';
import {
  Link
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

export default () => {
  return (
    <div class="ui inverted segment">
  		<div class="ui inverted secondary pointing menu">
    	  <Link to="/index" class="active item">
      		主页
    	  </Link>
        <Link to="/publish" class="item">
          发布
        </Link>
        <Link to="/history" class="item">
          历史
        </Link>
        <div class="right menu">
          <Link to="/login" class="item">
            登录
          </Link>  
        </div>
  		</div>
		</div>
  );
}