const initState = {
    posts: [
        {id: '1', title: 'First Pokemon Todo', body: 'First Pokemon Todo Text'},
        {id: '2', title: 'Second Pokemon Todo', body: 'Second Pokemon Todo Text'},
        {id: '3', title: 'Third Pokemon Todo', body: 'Third Pokemon Todo Text'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer