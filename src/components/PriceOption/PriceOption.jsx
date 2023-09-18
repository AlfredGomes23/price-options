import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { membershipName, price, features } = option;
    return (
        <div className='mx-auto m-5 p-5 bg-sky-200 rounded-lg flex flex-col'>
            <h2><span className='text-7xl'>{price}</span>
            <span className='text-2xl'>/mon</span></h2>
            <h3 className='text-3xl'>{membershipName}</h3>
            <h4 className='text-xl mt-5'>Features-</h4>
            <ul className='space-y-2 flex-1'>{
                features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)}</ul>
                <button className='bg-amber-700 text-white px-3 py-2 w-full rounded-lg mt-5'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
}
export default PriceOption;