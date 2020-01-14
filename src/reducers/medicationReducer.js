import { GET_MEDICATIONS, LOADING, ADD_MEDICATION, DELETE_MEDICATION, EDIT_MEDICATION } from '../actions/types';

const initialState = {
  medications: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MEDICATIONS:
      return {
        ...state,
        medications: action.payload,
        loading: false
      };
    case ADD_MEDICATION:
      return {
        ...state,
        medications: [action.payload, ...state.medications]
      };
    case DELETE_MEDICATION:
      return {
        ...state,
        medications: state.medications.filter(item => item.id !== action.payload)
      };
    case EDIT_MEDICATION:
      return {
        ...state
      };
    default:
      return state;
  }
}
