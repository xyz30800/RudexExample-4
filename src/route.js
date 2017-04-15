import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
	// Whenever user is at this path then show the component (App)
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
	</Route>
);	