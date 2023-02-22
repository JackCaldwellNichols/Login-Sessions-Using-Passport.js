import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <div className='card'>
      <Link to={`/post/${post.id}`}>
        <span className='card-title'>{post.title}</span>
        <img src={post.img} className='post-img' alt=''/>
        <p className='post-desc'>{post.desc}</p>
        <button className='post-button'>Read more</button>
      </Link>
    </div>
  )
}

export default Card