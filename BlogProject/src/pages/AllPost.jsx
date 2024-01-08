// import React,{useState,useEffect} from 'react'

// import appwriteService from "../appwrite/config";
// import { PostCard,Container } from '../components';

//  const AllPost = () => {

//     const[posts,setPosts] = useState([])
//     useEffect(()=>{
     
//     },[])

//     appwriteService.getPosts([]).then((posts)=>{
//       if(posts){
//           setPosts(posts.documents)
//       }
//     })
    
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post)=>(
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post}/>
                        
//                     </div>
//                 ))}
//             </div>
//         </Container>
//     </div>
//   )
// }

// export default AllPost

import React from 'react'
import { useSelector } from 'react-redux'

const AllPost = () => {
  const select = useSelector((state)=>state.post)
  return (
    <>
    <h1>All Posts</h1>
    {
      select.map((post)=>(
        <h1>{post.title}</h1>
      ))
    }
    </>
  )
}

export default AllPost
