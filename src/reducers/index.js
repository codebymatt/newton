import { combineReducers } from 'redux';
import MetricsReducer from './Metrics.js';
import RatesReducer from './Rates.js';
import SelectedReducer from './Selected.js';
import UnitsReducer from './Units.js';

const rootReducer = combineReducers({
    metrics: MetricsReducer,
    rates: RatesReducer,
    selected: SelectedReducer,
    units: UnitsReducer,
});

export default rootReducer;
