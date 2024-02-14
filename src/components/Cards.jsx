import React from 'react'

function Cards(props) {
    const {title,image,desc,footer} = props.data
  return (
    <>
    <div className="card" style={{width:"25rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <div className="footer">
    <span>{footer}</span>
    <span>No Comments </span>
  </div>
  </div>
</div>
</>
  )
}

export default Cards