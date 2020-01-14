import React, { Component } from 'react';
import Medication from './Medication';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMedications, deleteMedication } from '../actions/medicationActions';
import MedicationInput from './MedicationInput';

class MedicationList extends Component {
  componentDidMount() {
    this.props.getAllMedications();
  }

  handleDelete = id => {
    this.props.deleteMedication(id);
  };
  render() {
    const { medications } = this.props.medications;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">medication input</h3>
              <MedicationInput />

              <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">medication list</h3>
                {medications.map(item => {
                  return (
                    <Medication
                      key={item.id}
                      name={item.name}
                      handleDelete={() => this.handleDelete(item.id)}
                      id={item.id}
                      importantInfo={item.importantInfo}
                      usage={item.usage}
                      initialCount={item.initialCount}
                      promised={item.promised}
                      refillInfo={item.refillInfo}
                      pharmacyNotes={item.pharmacyNotes}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MedicationList.propTypes = {
  getAllMedications: PropTypes.func.isRequired,
  deleteMedication: PropTypes.func.isRequired,
  medications: PropTypes.object.isRequired,
  loading: PropTypes.object
};

const mapStateToProps = state => ({
  medications: state.medications,
  loading: state.loading
});

export default connect(mapStateToProps, { getAllMedications, deleteMedication })(MedicationList);
