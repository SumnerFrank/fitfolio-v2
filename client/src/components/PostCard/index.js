import { useState, React } from 'react'
import { Icon, Label, Card, Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import DeletePost from './DeletePost';
import '../../styles/PostCards.css';

function index({post: {id, body, createdAt, username,likeCount,title, likes, commentCount}}) {

  function likePost() {
console.log('liked post')
  }

  function commentOnPost(){
    console.log('Commented on post')
  }


  return (
  <div className='containerPosts'>
    <Card className='postCards' fluid >
    <Card.Content as={Link} to={`/posts/${id}`}>
      <Image
        floated='right'
        size='mini'
        src='https://p7.hiclipart.com/preview/247/564/869/computer-icons-user-profile-clip-art-user-avatar.jpg'
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta as={Link} to={`/posts/${id}`}>{createdAt}</Card.Meta>
      <Card.Description>{title}</Card.Description>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button 
        onClick={likePost}
       icon='heart' basic
       label={{ as: 'a', basic: true }}
       labelPosition='right'>
      </Button>
      <Label basic onClick={likePost}> 
          {likeCount}
        </Label>
        <Button basic as={Link} to={`/posts/${id}`}>
          <Icon name='comments' />
        </Button>
        <Label basic onClick={commentOnPost}> 
          {commentCount}
        </Label>
       <Button/> 
        <DeletePost postId={id}/>
    </Card.Content>

  </Card>
  </div>
  )
}

export default index