import axios from 'axios';
import { GET_MEDICATIONS, LOADING, ADD_MEDICATION, DELETE_MEDICATION, CLEAR_ERRORS, EDIT_MEDICATION } from './types';

// Get all medications
export const getAllMedications = () => dispatch => {
  dispatch(setDataLoading());
  axios
    .get('http://localhost:8080/api/medicin-infos')
    .then(res =>
      dispatch({
        type: GET_MEDICATIONS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Add medication
export const addMedication = medicineData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('http://localhost:8080/api/medicin-infos', medicineData)
    .then(res =>
      dispatch({
        type: ADD_MEDICATION,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Delete Medication
export const deleteMedication = id => dispatch => {
  axios
    .delete(`http://localhost:8080/api/medicin-infos/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_MEDICATION,
        payload: id
      })
    )
    .catch(err => console.log(err));
};

// Edit medication
export const editMedication = medicineData => dispatch => {
  axios
    .put('http://localhost:8080/api/medicin-infos', medicineData)
    .then(res =>
      dispatch({
        type: EDIT_MEDICATION,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Data loading
export const setDataLoading = () => {
  return {
    type: LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
