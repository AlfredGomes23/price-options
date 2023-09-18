import PropTypes from 'prop-types'
import { AiFillCheckCircle } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const Feature = ({feature}) => {
    return (
        <li><AiFillCheckCircle className='text-green-700 inline mr-2'></AiFillCheckCircle>{feature}</li>
    );
};

Feature.PropTypes= {
    feature:PropTypes.string,
}

export default Feature;