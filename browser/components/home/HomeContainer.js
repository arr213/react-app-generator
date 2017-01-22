import { connect } from 'react-redux';
import { loadPuppies } from '../../redux/action-creators';
import Home from './Home';

const mapStateToProps = function (state) {
  return {
    puppies: state.allPuppies
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadPuppies: function () {
      const thunk = loadPuppies();
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const HomeContainer = componentCreator(Home);
export default HomeContainer;