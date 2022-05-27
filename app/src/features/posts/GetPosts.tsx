import React from 'react';
import { useSelector } from 'react-redux';

import { selectComments, selectPosts } from '../../app/store';
import PostCard from './PostCard';

// URLs to database
const url_post = 'http://localhost:3000/api/posts';
const url_user_name = 'http://localhost:3000/api/users:';


const GetPosts = () => {
  const posts = useSelector(selectPosts)
  const comments = useSelector(selectComments)

  // Function for desplaying posts
  function UL<T>({
    items,
    render_name,
    render_text,
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
    items: T[];
    render_name: (item: T) => React.ReactNode;
    render_text: (item: T) => React.ReactNode;
  }) {
    return (
      <ul style={{ margin: 0 }}>
        {items.map((item, index) => (
          <li style={{ margin: 0, padding: 0 }} key={index} >
            <PostCard post_id={index} user_name={render_name(item)} comment_text={render_text(item)} />
          </li>
        ))}
      </ul>
    );
  }


  return (
    <div style={{ width: '100%', margin: 5 }}>
      <UL
        items={posts}
        render_name={(data) => <>{data.user_id}</>}
        render_text={(data) => <>{data.text}</>}
      >
      </UL>
    </div>
  )
}

export default GetPosts