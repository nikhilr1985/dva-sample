import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import repositorySelector from '../models/repository/selectors'

function UserRepositoryPage({ repository }) {
  return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          
            {
              repository.repositories.map((item,index)=>{
                return (
                <tr key={index}>
                  <th>{item.name}</th>
                  <th>{item.description}</th>
                </tr>
                )
              })
            }
          </tbody>
        </table>
        <div>
          <iframe height="500" width="500" src='https://github.com/octocat'/>
        </div>
      </div>
  );
}

UserRepositoryPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    repository: state.repository
    //...repositorySelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(UserRepositoryPage);
