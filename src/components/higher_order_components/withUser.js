import React from 'react';
import { connect } from 'react-redux';
import { setUser, updateUser } from '../../redux/slices/user-slice';
import { bindActionCreators } from 'redux';
// Take in a component as argument WrappedComponent
const withUser = WrappedComponent => {
  // And return another component
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }

    isUserLogedin = () => {
      return !['', '-1'].includes(this.props.user.ID);
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => state.UserReducer;
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ setUser, updateUser }, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
};
export default withUser;
