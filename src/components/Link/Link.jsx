import PropTypes from 'prop-types'

const Link = ({route}) => {
    const {name, path} = route;
    return (
        <li className='hover:bg-gray-400 p-1 rounded'><a href={path}>{name}</a></li>
    );
};

Link.propTypes ={
    route: PropTypes.object.isRequired
}

export default Link;