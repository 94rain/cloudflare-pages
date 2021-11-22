import React from 'react'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <a>
      <h3>{post.title}</h3>
      <h5>{post.username}</h5>
      <p>{post.content}</p>
    </a>
  </Wrapper>
)

export default PostItem
