import { combineReducers } from 'redux';
import filterDogs from "./reducers/filterDogsReducer"
import filterSizes from "./reducers/filterSizesReducer"
import filterGroups from "./reducers/filterGroupsReducer"
import selectDog from "./reducers/selectDogReducer"

export default combineReducers({
    filters: filterDogs,
    sizes: filterSizes,
    groups: filterGroups,
    selectedDog: selectDog
});