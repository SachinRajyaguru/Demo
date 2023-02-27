import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startLoading, stopLoading } from '../../redux/slices/loading-slice';

const withLoading = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => state.LoaderReducer;
  return connect(mapStateToProps, dispatch =>
    bindActionCreators({ startLoading, stopLoading }, dispatch),
  )(HOC);
};

export default withLoading;
