import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
// import saga from './saga';



interface IStateToProps {

}

interface IDispatchToProps {

}

interface ITodoProps extends IStateToProps, IDispatchToProps, React.HTMLProps<HTMLDivElement> {

}

export class TodoPage extends React.Component<ITodoProps, {}> {
  public render () {
    return (
      <div className="todo-app">
        <p>To Do App will be rendered here</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return bindActionCreators({

  }, dispatch);
}
const mapStateToProps = createStructuredSelector({

});

const withConnect = connect<IStateToProps, IDispatchToProps, ITodoProps>(mapStateToProps, mapDispatchToProps);
// const withSaga = injectSaga({ key: 'app/todo', saga});
const withReducer = injectReducer({ key: 'app/todo', reducer });

export default compose<React.ComponentClass>(
  withReducer,
  withConnect,
)(TodoPage);
