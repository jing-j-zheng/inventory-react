import Item from './Item'

const Items = ({items, onDelete, onUpdate, showAddTask}) => {

  return (
    <>
      
      {items.map((item) => (
        <div>
        <Item
            key={item.id} 
            item={item}
            onDelete={onDelete}
            onUpdate={onUpdate}
            showAddTask={showAddTask}


            />
                
        </div>
      ))}
    </>
  )
}

export default Items
