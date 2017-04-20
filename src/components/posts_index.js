import React, { Component } from 'react';
import { connect  } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts} from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	// Only called once at App first render
	componentWillMount() {
		this.props.fetchPosts()
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"/post/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			)
		})
	}

	render() {
		return(
			<div>
			<div className="text-xs-right">
				<Link to="/post/new" className="btn btn-primary">
					Add a post
				</Link>				
			</div>
				 <ul className="list-group">
				 	{ this.renderPosts() }
				 </ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	//console.log('container', state)
	return { posts: state.posts.all }
}

// The first argument to connect function is usually map state to props
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

// Another style
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch)
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);