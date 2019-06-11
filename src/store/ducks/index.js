import { combineReducers } from 'redux';

import { reducer as podcasts } from './podcasts';
import { reducer as player } from './player';

const reducers = combineReducers({
  podcasts,
  player,
});

export default reducers;
