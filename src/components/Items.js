import Item from './Item'

const Items = ({items, onDelete, onToggle}) => {

  return (
    <>
      
      {items.map((item) => (
        <div>
        <Item
            key={item.id} 
            item={item}
            onDelete={onDelete}
            />
                
        </div>
      ))}
    </>
  )
}

export default Items
