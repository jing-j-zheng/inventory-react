import { useState } from "react"
import { useLocation } from 'react-router-dom';


const EditItem = ({onAdd}) => {
    const location = useLocation();
    console.log('in EditItem')
    console.log(location)

    const [id, setId] = useState(location.state.item.id)
    const [name, setName] = useState(location.state.item.name)
    const [description, setDescription]= useState(location.state.item.description)
    const [quantity, setQuantity]= useState(location.state.item.quantity)
    const [price, setPrice]= useState(location.state.item.price)

 
    const onSubmit = (e) => {
        e.preventDefault()

        if(!name && !description && !quantity && !price ) {
            alert('No change to update')
            return
        }
        console.log('id: ' + location.state.item.id)

        onAdd({id, name, description, quantity, price} )


    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Name:</label>
            <input type='text' placeholder='Edit Name'
            value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Description:</label>
            <input type='text' placeholder='Edit Description'
            value={description}
            onChange={(e) =>setDescription(e.target.value)}  />
        </div>
        <div className='form-control'>
            <label>setQuantity:</label>
            <input type='text' placeholder='Edit Quantity'
            value={quantity}
            onChange={(e) =>setQuantity(e.target.value)}  />
        </div>
        <div className='form-control'>
            <label>setPrice:</label>
            <input type='text' placeholder='Edit Price'
            value={price}
            onChange={(e) =>setPrice(e.target.value)}  />
        </div>


        <input type='submit' value='Update Item'
        className= 'btn btn-block' />
      
    </form>
  )
}

export default EditItem
