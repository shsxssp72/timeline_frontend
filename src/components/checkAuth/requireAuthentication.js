import React from 'react';
import {connect} from 'react-redux';
import history from '../../history';
import PropTypes from 'prop-types';
import {
    getTimeline,
    switchHome
} from "../../redux/actions";
import { illegalAccess, closeIllegalAccess} from "../../redux/actions/pageSwitchActions";

export default function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        static propTypes = {
            isLogin: PropTypes.bool,
            token: PropTypes.string,
            start: PropTypes.string,
            end: PropTypes.string,
            getTimeline: PropTypes.func,
            switchHome: PropTypes.func,
            illegalAccess: PropTypes.func,
            closePublishSuccess: PropTypes.func,
            closeIllegalAccess: PropTypes.func,
            closePublishFail: PropTypes.func,
            closeRegisterFail: PropTypes.func,
            closeLoginFail: PropTypes.func
        };

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps, nextContext) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isLogin) {
                this.props.illegalAccess();
                history.push('/');
                this.props.switchHome();
            }else{
                this.props.closeIllegalAccess();
                this.props.getTimeline(this.props.token, this.props.start.toISOString(), this.props.end.toISOString())
            }
        }

        render() {
            return (
                <div>
                    {
                        this.props.isLogin === true ? <Component {...this.props}/> : null
                    }
                </div>
            )
        }
    }

    const mapStateToProps = (state, ownProps) => ({
        isLogin: state._loginReducer.isLogin,
        token: state._loginReducer.jwtToken,
        start: state._timelineEvents.start,
        end: state._timelineEvents.end
    });

    const mapDispatchToProps = (dispatch, ownProps) => ({
        getTimeline: (token, start, end) => {
            dispatch(getTimeline(token, start, end))
        },
        switchHome: () => {
            dispatch(switchHome())
        },
        illegalAccess: () => {
            dispatch(illegalAccess())
        },
        closeIllegalAccess: () => {
            dispatch(closeIllegalAccess())
        },
    });

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}