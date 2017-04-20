import React, { Component, PropTypes } from 'react';
import { connect  } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.post_id);
	}

	onDeleteClick() {
		this.props.deletePost(this.props.params.post_id)
			.then(() => { this.context.router.push('/'); });
	}

	render() {
		const { post } = this.props;
		// is equals to 'const post = this.props.post'

		if (!this.props.post) {
			return <div>Loading ...</div>; // Can add load imags or something.
		}

		return (
			<div>
				<button 
					onClick={this.onDeleteClick.bind(this)}
					className="btn btn-danger pull-xs-right">
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);