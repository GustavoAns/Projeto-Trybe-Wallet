import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SelecMoeda extends Component {
  render() {
    const { filtrarMoedas, moeda, handleChange } = this.props;
    const moedasFiltradas = filtrarMoedas();
    return (
      <label htmlFor="moeda">
        Moeda
        <select name="moeda" value={ moeda } onChange={ handleChange }>
          {moedasFiltradas.map((siglaMoeda) => (
            <option
              value={ siglaMoeda }
              key={ siglaMoeda }
            >
              { siglaMoeda }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelecMoeda.propTypes = {
  filtrarMoedas: PropTypes.objectOf(PropTypes.string).isRequired,
  moeda: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelecMoeda;