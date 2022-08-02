import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button className='btn btn-primary' text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        {/* <button type="button" className="btn btn-primary">Primary</button> */}
    </header>
  )
}

Header.defaultProps = {
    'title': 'Task Tracker',
}

Header.propTypes = { 
    title: PropTypes.string.isRequired 
}

// CSS in JS
// const headerStyle = {
//     color: 'white',
//     backgroundColor: 'black'
// }

export default Header