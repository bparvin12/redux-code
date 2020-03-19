import _ from 'lodash';
import jsonPlaceholder from '../myApis/jsonPlaceholder';

//-----------------------------------------------------------------------------
//fetchPostsAndUsers
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
    //.value is like a .execute
        
};
//-----------------------------------------------------------------------------


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data});
}

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};


//-----------------------------------------------------------------------------
//MEMOIZED VERSION
//this uses memoize which only makes it so that we fetch each user only once, rather than
//10 times per user. 
//Problem: if the user was updated, this would block the user from being refetched or the update would not be refetched 
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });
//-----------------------------------------------------------------------------