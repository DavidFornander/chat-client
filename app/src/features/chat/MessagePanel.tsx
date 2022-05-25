// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// import { selectPosts } from '../../store';

// const MessagePanel = () => {
//   const posts = useSelector(selectPosts)

//   function UL<T>({
//     items,
//     render,
//   }: React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLUListElement>,
//     HTMLUListElement
//   > & {
//     items: T[];
//     render: (item: T) => React.ReactNode;
//   }) {
//     return (
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {render(item)}
//           </li>
//         ))}
//       </ul>
//     );
//   }


//   return (
//     <UL
//       items={posts}
//       render={(data) => <>{data.usr.concat(": ", data.text.toString())}</>}
//     />
//   )
// }

// export default MessagePanel

export default {}