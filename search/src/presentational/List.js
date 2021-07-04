import React from 'react'

export const List =({items}) => {
    return items && items.length > 0 && items.map(item => <li key={item.id}>{item.value}</li>)
}
