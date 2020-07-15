import { combineReducers } from 'redux';
import filterDogs from "./reducers/filterDogsReducer"
import filterSizes from "./reducers/filterSizesReducer"
import filterGroups from "./reducers/filterGroupsReducer"

export default combineReducers({
    filters: filterDogs,
    sizes: filterSizes,
    groups: filterGroups
});