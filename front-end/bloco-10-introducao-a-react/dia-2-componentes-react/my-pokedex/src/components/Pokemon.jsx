import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: poke } = this.props;
    return (
      <div className='card'>
        <section>
          <p>{poke.name}</p>
          <p>{poke.type}</p>
          <p>{`Average weight: ${poke.averageWeight.value} ${poke.averageWeight.measurementUnit}`}</p>
        </section>
        <img src={poke.image} alt={`${poke.name}`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
