import React from 'react'

const Posts = ({searchTerm , posts,click}) => {
  return (
    <div style={{display : "flex" , width : '100vw'}}>
        {
            click && posts.map((post,idx)=>{
                return (
                    <div style={{height : "auto" , width : "100px", border : "1px solid black"}}>
                    <div style={{margin : "4px" , fontWeight : "700"}} key={idx}>Title : {post.title}</div>
                    <div style={{margin : "4px"}}>Body : {post.body}</div>
                    </div>
                )
            })
        
        }
        </div>
  )
}

export default Posts