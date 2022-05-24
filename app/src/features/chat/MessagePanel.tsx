import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { selectPosts } from '../../store';

const MessagePanel = () => {
  const posts = useSelector(selectPosts)
  const dispatch = useDispatch();

  function UL<T>({
    items,
    render,
    itemClick,
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > & {
    items: T[];
    render: (item: T) => React.ReactNode;
    itemClick: (item: T) => void;
  }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {render(item)}
          </li>
        ))}
      </ul>
    );
  }


  return (
    <UL
      items={posts}
      itemClick={() => { }}
      render={(todo) => <>{todo.text}</>}
    />
  )
}

export default MessagePanel