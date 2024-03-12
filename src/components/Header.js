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
      (location.pathname === '/itemDetails' ) && (
        <>
        <Button color={'green'}
         text={'Edit'}
         onClick={()=>{navigate('/editItem', {replace:true})}} />

         <Button color={'black'}
         text={'Cancl'}
         onClick={()=>{navigate('/', {replace:true})}} />
         </>
      )
    
      }

      
      
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
 //   title: PropType.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header
