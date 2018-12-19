import React from 'react';
import {connect} from 'react-redux';
import history from '../../history';
import PropTypes from 'prop-types';
import {
    switchHome
} from "../../redux/actions";
import { illegalAccess, closeIllegalAccess} from "../../redux/actions/pageSwitchActions";

export default function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        static propTypes = {
            isLogin: PropTypes.bool,
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
    });

    const mapDispatchToProps = (dispatch, ownProps) => ({
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