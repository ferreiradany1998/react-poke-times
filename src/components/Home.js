import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../actions/postActions'

const Home = (props) => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    //REPLACED WITH REDUX
    /*const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data.slice(0,10))
        })
    }, []);*/

    const handleClick = (id) => {
        dispatch(deletePost(id))
    }

    const postList = posts.length ? (posts.map(post => {
        return(
            <div className="post card" key={post.id}>
                <img src={Pokeball} alt="A Pokeball" />
                <div className="card-content">
                    <Link to={'/' + post.id}>
                        <span className="card-title red-text" >{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                    <div className="center">
                        <button className="btn grey" onClick={() => {handleClick(post.id)}}>
                            Delete Post
                        </button>
                    </div>
                </div>
            </div>
        )
    })) : (
        <div className="center">No posts yet</div>
    )

    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    )
}

//Grab the state of the store and apply it to property posts and map it to the props
/*const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}*/

//Higher order component getting created and wrapping the component
//We pass mapStateToProps so that it knows which data we want to grab from Redux
export default Home
