import React from 'react'
import { useLocation } from 'react-router-dom'
import {posts} from '../data.js'

const Post = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2]

    const post = posts.find(p=>p.id.toString()===path)
    console.log(location)
  return (
    <div className='post'>
        <img className='img' alt='' src={post.img} />
        <h1 className='title'>{post.title}</h1>
        <p className='desc'>{post.desc}</p>
        <p className='longdesc'>{post.longDesc}</p>
    </div>
  )
}

export default Post