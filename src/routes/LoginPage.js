import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const LoginPage = ({dispatch}) => {
    let username = null;
    function authenticateUser(){
        let user = username.value;
        //dispatch(routerRedux.push('/repos/octocat'));
        dispatch(routerRedux.push('/repos/'+user));
    }

    return (
        <div>
            <input type="text" ref={(input) => { username = input; }}/>
            <input type='button' value='Login' onClick={authenticateUser}/>
        </div>
    );
  };
  
  export default connect()(LoginPage);
  