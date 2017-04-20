import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show'; 

export default (
	// Whenever user is at this path then show the component (App)
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<PostsNew path="post/new" component={PostsNew} />
		{/* Pull the id of the posts that we want to see the url */}
		<PostsNew path="post/:post_id" component={PostsShow} />
	</Route>
);

// this.props.params.id