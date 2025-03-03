import PropTypes from 'prop-types';

export const Greeting = ({ name }) => {
    return (<h1>Привіт, {name}!</h1> );
}

Greeting.prototypes = {
    name: PropTypes.string
};