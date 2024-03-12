import { Routes, Route, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function ItemDetails({onDetails, item}) {

    const location = useLocation();
    console.log(location)

    return location.state.item ? (
  
      <div id="table" >
        <div className="tr">
        <label>Name:</label>
         {location.state.item.name}
        </div>
        <div>
        <label>Description:</label>
         {location.state.item.description}
        </div>
        <div>
        <label>Quantity:</label>
         {location.state.item.quantity}
        </div>
        <div>
        <label>Price:</label>
         {location.state.item.price}
        </div>
      </div>
    ) : (
        <div>
        <p>Loading ...</p>
        </div>
    );


  }
  
export default ItemDetails