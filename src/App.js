import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import Footer from './components/Footer'
import ItemDetails from './components/ItemDetails'
import Login from './components/Login';


import {useState, useEffect } from 'react'
import {BrowserRouter as Router,
        Route,
        Routes,
        generatePath,
        useNavigate,
        useParams,
      } from 'react-router-dom'
import { FaLessThanEqual } from 'react-icons/fa'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)

  const [items, setItems] = useState([])


  useEffect(() => {
  
      const getItems = async () => {
        const itemsFromServer = await fetchItems()
        setItems(itemsFromServer)

      }
    
      getItems()
   }, [])

  // Fetch items
  const fetchItems = async  () => {
    const res = await fetch('http://localhost:4000/items')
    const data = await res.json()

    console.log(data)
    return data
  }

    // Fetch item
    const fetchItem = async  (id) => {

      const res = await fetch(`http://localhost:4000/items/${id}`)
      const data = await res.json()
  
      console.log(data)
      return data
    }


  // Add item
  const addItem = async (item) => {
    const res = await fetch('http://localhost:4000/items', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(item),

    })

    const data = await res.json()
    setItems(data)

  }

  
  // Delete item
  const deleteItem = async (id) => {

     await fetch(`http://localhost:4000/items/${id}`, {
      method: 'DELETE'
    })

    setItems(items.filter((item)=> item.id !== id))
  }

  // Update item
  const updateItem = async (id, newName, newDescription, newQuantity, newPrice) => {
    const itemToUpdate = await fetchItem(id)
    const updItem = {...itemToUpdate, 
    name: newName,
    description: newDescription,
    quantity: newQuantity,
    price: newPrice
    }

    const res = await fetch(`http://localhost:4000/items/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })

    const data = await res.json()

    setItems(items.map((item)=>
     item.id === id ? { ...item,
          name: data.name,
          description: data.description,
          quantity: data.quantity,
          price: data.price
          } : item
     )
    )
  }

  return (
      <Router>
      <div className='container'>
        <Header title="Inventory" onAdd={()=> setShowAddTask(!showAddTask)}
        showAdd={showAddTask}   
           
        />
   
        <Routes>
        <Route path='/'
         exact 
         element ={
          <>
          {showAddTask && <AddItem onAdd={addItem}/>}
          { items.length > 0 ? (
          <Items items={items} onDelete={deleteItem} onUpdate={updateItem} showAddTask={showAddTask} />
          )
          : 'No Items to Show'
          }
          </>
        } />
   
  
      <Route path="/itemDetails" element={
        <>
        <ItemDetails />
        </>
        }/>
        <Route path="/editItem" element={
        <>
        {<EditItem onUpdate={updateItem}/>}
        </>
        }/>

      <Route path="/login" element={<Login />}   />


        </Routes>
        <Footer />
      </div>  
      </Router>
  );
}

export default App;
