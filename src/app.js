import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>This is my cool react app {this.props.phrase}</div>
    );
  }
}

const mapStateToProps = ({phrase}) => {
  return {phrase};
};

const App = connect(
  mapStateToProps
)(AppComponent);

AppComponent.propTypes = {
  phrase: PropTypes.string,
};
export default App;
