import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = applyMiddleware(thunk, logger);
export default middlewares;