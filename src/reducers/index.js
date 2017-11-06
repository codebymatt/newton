import { combineReducers } from 'redux';
import MetricsReducer from './Metrics.js';
import UnitsReducer from './Units.js';

const rootReducer = combineReducers({
    metrics: MetricsReducer,
    units: UnitsReducer,
});

export default rootReducer;
