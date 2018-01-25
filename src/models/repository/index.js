import pathToRegexp from 'path-to-regexp';
import { fetchUserRepository } from '../../services/git';

export default {
  namespace: 'repository',
  state: {
    repositories: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/repos/:userName').exec(pathname);
        if (match) {
          const userName = match[1];
          dispatch({ type: 'fetchUserRepository', payload: userName });
        }
      });
    },
  },
  effects: {
    * fetchUserRepository({ payload: userName }, { call, put }) {
      const repoList = yield call(fetchUserRepository, userName);
      console.log(repoList);
      yield put({ type: 'saveUserRepository', payload: repoList });
    },
  },
  reducers: {
    saveUserRepository(state, { payload: repository }) {
      return { ...state, repositories:  repository.data  };
    },
  },
}
