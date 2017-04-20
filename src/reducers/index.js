import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// Import redux-form grab the 'reducer' or property and create variable with it named 'formReducer'. It kind of convienience by the another of redux-form to avoid any naming conflicts with reducer that we might be importing into this file.
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
