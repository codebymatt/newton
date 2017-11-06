import { combineReducers } from 'redux';
import MetricsReducer from './Metrics.js';
import UnitsReducer from './Units.js';
import RatesReducer from './Rates.js';

const rootReducer = combineReducers({
    metrics: MetricsReducer,
    units: UnitsReducer,
    rates: RatesReducer,
});

export default rootReducer;
