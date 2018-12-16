import React from 'react';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import {
    switchHome,
    switchIndex,
    switchHistory,
    switchPublish,
    changeText,
    logOut
} from "../../redux/actions";
import {connect} from "react-redux";
import history from "../../history";

class Menu extends React.Component {
    static propTypes = {
        home: PropTypes.string,
        index: PropTypes.string,
        publish: PropTypes.string,
        history: PropTypes.string,
        isLogin: PropTypes.bool,
        switchHome: PropTypes.func,
        switchIndex: PropTypes.func,
        switchPublish: PropTypes.func,
        switchHistory: PropTypes.func,
        switchLogin: PropTypes.func,
        onLogOut: PropTypes.func
    };

    render() {

        let right;
        if(this.props.isLogin){
            right = (
                <a className="ui inverted button" onClick={this.props.onLogOut}>
                    Log Out
                </a>
            )
        }else{
            right = (
                <div>
                    <Link to="/login" className="ui inverted button">
                        Log in
                    </Link>
                    <Link to="/register" className="ui inverted button">
                        Sign Up
                    </Link>
                </div>
            )
        }

        return (
            <div className="ui inverted vertical segment">
                <div className="ui large secondary inverted pointing menu">
                    <Link to="/" className={this.props.home} onClick={this.props.switchHome}>
                        Home
                    </Link>
                    <Link to="/index" className={this.props.index} onClick={this.props.switchIndex}>
                        TimeLine
                    </Link>
                    <Link to="/publish" className={this.props.publish} onClick={this.props.switchPublish}>
                        Publish
                    </Link>
                    <Link to="/history" className={this.props.history} onClick={this.props.switchHistory}>
                        History
                    </Link>
                    <div className="right item">
                        {right}
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    home: state._currentPage.home,
    index: state._currentPage.index,
    publish: state._currentPage.publish,
    history: state._currentPage.history,
    isLogin: state._loginReducer.isLogin
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    switchHome: () => {
        dispatch(switchHome())
    },
    switchIndex: () => {
        dispatch(switchIndex())
    },
    switchHistory: () => {
        dispatch(switchHistory())
    },
    switchPublish: () => {
        dispatch(switchPublish());
        dispatch(changeText('switch to publish'))
    },
    onLogOut: () => {
        dispatch(logOut());
        dispatch(switchHome());
        history.push('/');
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);