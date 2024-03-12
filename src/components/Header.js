import PropTypes from 'prop-types'
import {useLocation, useNavigate } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd, onCancel, onEdit}) => {
  const location = useLocation()
  let navigate = useNavigate();
    
  return (
    <header className='header'>
      <h1>{title}</h1>
      {
         (location.pathname === '/' )  && (
      
        <Button color={showAdd ? 'red' : 'green'}
         text={showAdd ? 'Close' : 'Add'}
         onClick={onAdd} />
        )
      
      }

      {
        ( location.pathname === '/itemDetails'  || location.pathname === '/editItem' ) && (
        <>
         <Button color={'blue'}
         text={'Back'}
         onClick={()=>{navigate('/', {replace:true})}} />
         </>
      )
      }

      
      
    </header>
  )
}
Header.defaultProps = {
    title: 'Inventory'
}

Header.propTypes = {
 //   title: PropType.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header
