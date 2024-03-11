import Item from './Item'



const Items = ({items, onDelete, onToggle}) => {

  return (
    <>
      {items.map((item) => (
        <Item
            key={item.id} 
            task={item}
            onDelete={onDelete}
            onToggle={onToggle} />
      ))}
    </>
  )
}

export default Items
