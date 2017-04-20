import React, { Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	// React interprets this object whenever an instance of 'PostsNew' is created.
	// It's going to see that we declared some contextTypes and going to see that we want to specifically get access to some property on our context called router.
	// React is going to search all of this component's parent until it finds a component that has a piece of context called router.
	// When it finds it, assign it to this context router inside of the component (?)
	// The only time we really want to be using its when we're working with the router.
	static contextTypes = {
		router: PropTypes.object
	};

	// We pulled the submission action out to a separate helper function called 'onSubmit'.
	// Whenever we call an action creator that create a promise as a payload, then return promise.
	// When promise resolved, it means that our blog post was successfully created that makes it the perfect location to make sure that our navigation occurs.
	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been successfully created, navigate the user to the index
				// We navigate by calling router: 'this.context.router.push' with adding a new path for the rourer to automatically navigate to.
				this.context.router.push('/');
			})
	}

	render() {
		// This props injected by redux-form at bottom
		// Assign variable to title, categories, content and handleSubmit from this.props
		const { fields: { title, categories, content }, handleSubmit } = this.props; // ES6 syntax
		// is equals to 'const handleSubmit = this.props.handleSubmit;'
		// fields: { title, categories, content }' is equals to
		// const title = this.props.fields.title;
		// const categories = this.props.fields.categories;
		// const content = this.props.fields.content;
		
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>{/* original: handleSubmit(this.props.createPost) */}
				{/* Go find action creator We can pass it to handleSubmit, and action creator will be called with the property of the form */}
				<h3>Create A New Post</h3>
				<div className={`form-group${title.touched && title.invalid ? ' has-danger' : ''}`}>
					<label>Title</label>
					{/* It kind of structures the object into its separate keys and values and passes it into the input */}
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{ title.touched ? title.error : '' }
					</div>
				</div>
				<div className={`form-group${categories.touched && categories.invalid ? ' has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{ categories.touched ? categories.error : '' }
					</div>
				</div>
				<div className={`form-group${content.touched && content.invalid ? ' has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="text-help">
						{ content.touched ? content.error : '' }
					</div>
				</div>

				<button type="sumbit" className="btn btn-primary">Sumbit</button>
				<Link to="" className="btn btn-danger">
					Cancel
				</Link>	
			</form>
		)
	}
}

function validate(values) {
	const errors = {};

	// If the object has a key that match one of our field
	if (!values.title) {
		errors.title = 'Enter a username';
	}
	if (!values.categories) {
		errors.categories = 'Enter a username';
	}
	if (!values.content) {
		errors.content = 'Enter a username';
	}

	return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// redux-form: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// Set up config for this form 
export default reduxForm({
	form: 'PostNewForm2',
	fields: ['title', 'categories', 'content'],
	validate // is equals to 'validate: validate'
}, null, { createPost })(PostsNew);