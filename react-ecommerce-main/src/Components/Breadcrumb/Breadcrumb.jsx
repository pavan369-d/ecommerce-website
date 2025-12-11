import React from 'react'
import { Link } from 'react-router-dom'
const Breadcrumb = ({items}) => {
  return (
    <nav aria-label='breadcrumb'>
      <ul className="breadcrumb">
      {items.map((item,index) => (
          <li key={index}  className={`breadcrumbitem ${item.active ? 'trueactive' : ''}`}>
            {item.active ? (
              item.label 
            ) : (
              <Link to={item.path}>{item.label} <span>/</span></Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
