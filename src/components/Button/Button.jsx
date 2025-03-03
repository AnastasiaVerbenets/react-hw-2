import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
    return (<button onClick={onClick}>Натисни та перейди в консоль</button>);
}

Button.prototypes = {
    onClick: PropTypes.func
};