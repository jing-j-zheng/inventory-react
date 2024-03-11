import { useState } from "react"


const AddItem = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription]= useState('')
    const [quantity, setQuantity]= useState(0)
    const [price, setPrice]= useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add an item')
            return
        }
        onAdd({name, description, quantity, price} )
        setName('')
        setDescription('')
        setQuantity(0)
        setPrice(0)

    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Name:</label>
            <input type='text' placeholder='Add Name'
            value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Description:</label>
            <input type='text' placeholder='Add Description'
            value={description}
            onChange={(e) =>setDescription(e.target.value)}  />
        </div>
        <div className='form-control'>
            <label>setQuantity:</label>
            <input type='text' placeholder='Add Quantity'
            value={quantity}
            onChange={(e) =>setQuantity(e.target.value)}  />
        </div>
        <div className='form-control'>
            <label>setPrice:</label>
            <input type='text' placeholder='Add Price'
            value={price}
            onChange={(e) =>setPrice(e.target.value)}  />
        </div>


        <input type='submit' value='Save Item'
        className= 'btn btn-block' />
      
    </form>
  )
}

export default AddItem
