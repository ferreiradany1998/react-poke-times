import React from 'react'
import { useSelector } from 'react-redux'

const Post = (props) => {
    let id = props.match.params.post_id;
    const post = useSelector(state => state.posts.find(post => post.id === id));

    //REPLACED WITH REDUX
    //const [post, setPost] = useState(null)
    /*useEffect(() => {
        let id = props.match.params.post_id;
        //setId(props.match.params.post_id);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            setPost(res.data)
            console.log(res.data)
        })
    }, [])*/

    const singlePost = post ? (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ) : (
        <div className="center">Loading post... </div>
    )

    return (
        <div className="container">
            {singlePost}
        </div>
    )
}

export default Post
