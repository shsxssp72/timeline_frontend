import React from 'react';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import {
    switchIndex,
} from "../../redux/actions";
import {connect} from "react-redux";

const globalStyles = {
    height: '85vh'
};

class Home extends React.Component {
    static propTypes = {
        visible: PropTypes.bool,
        switchIndex: PropTypes.func,
        mountComplete: PropTypes.func
    };

    render() {
        return (
            <div className="ui inverted vertical masthead center aligned segment" style={globalStyles}>
                <div className="ui text container" style={{margin: '100px 0px 0px 0px'}}>
                    <h1 className="ui inverted header" style={{fontSize: '4em'}}>
                        Time-Line
                    </h1>
                    <h2>Record every bit of your life</h2>
                    <Link to="/index" className="ui huge primary button" onClick={this.props.switchIndex}>
                        Get Started
                        <i className="right arrow icon"/>
                    </Link>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    switchIndex: () => {
        dispatch(switchIndex())
    },
});

export default connect(mapDispatchToProps)(Home);