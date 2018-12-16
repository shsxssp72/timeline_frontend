import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import PropTypes from 'prop-types';

export default function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component{
        static propTypes = {
            isLogin: PropTypes.bool
        };

        componentWillMount() {
            this.checkAuth();
        }
        componentWillReceiveProps(nextProps, nextContext) {
            this.checkAuth();
        }
        checkAuth(){
            if (!this.props.isLogin){
                history.push('/');
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
        isLogin: state._loginReducer.isLogin
    });

    return connect(mapStateToProps)(AuthenticatedComponent);
}