import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
//   const on = (e) => {
//     console.log(e.target);
//   }

  return (
    <button 
    type="button"
    onClick={onClick}
    // style={{ backgroundColor: color}} 
    className='btn btn-primary' 
    >{text}</button>
  )
}

Button.defaultProps = {
    color: 'blue',
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button