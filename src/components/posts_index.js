import React, { Component } from 'react';
import { connect  } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	// Only called once at App first render
	componentWillMount() {
		this.props.fetchPosts()
	}

	render() {
		return(
			<div> List of blog post </div>

		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch)
}

// The first argument to connect function is usually map state to props
// export default connect(null, mapDispatchToProps)(PostsIndex);
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(null, { fetchPosts })(PostsIndex);