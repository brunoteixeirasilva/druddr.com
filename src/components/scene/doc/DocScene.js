import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Markdown from 'react-markdown'
import SceneRoot from '../root'
import { Slide } from '@material-ui/core'
import { compose } from 'recompose'
const path = require('path')

const withFileReader = (Component) => {
	class WithFileReader extends React.PureComponent {
		state = {
			fr: null,
			result: null
		}

		componentDidMount() {
			const { path } = this.props

			//A file path was specified
			if (!!path) {
				this.handleFileLookup(path)
			}
		}

		handleFileRead = (file) => {
			const content = !!file ? file : !!this.fr ? this.fr.result : null

			this.setState({ result: content })
		}

		handleFileLookup = (file) => {
			const self = this

			console.log(file)

			fetch(file, { method: 'GET' })
				.then((response) => {
					return response.blob()
				})
				.then((text) => {
					debugger
					self.handleFileRead(text)
					// self.setState()
				})
			// this.fr.onloadend = this.handleFileRead
			// this.fr.readAsText(new File([], ''))
		}

		render() {
			const { result } = this.state

			return (
				<Component
					onMount={(path) => this.handleFileLookup(path)}
					file={!!result ? result : null}
					{...this.props}
				/>
			)
		}
	}

	return WithFileReader
}

/**
 * Manages to simply display a given document by it's ID
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class DocScene extends React.PureComponent {
	// fileSystem = fs
	// state = {
	// 	doc: null
	// }

	componentDidMount() {
		const { match } = this.props

		//Whenever document-id is available
		if (match.params.documentId) {
			debugger
			this.props.onMount(
				path.join(
					`../../../../public/markdown`,
					`${match.params.documentId}.md`
				)
			)
			// this.setState({
			// 	doc: fs.readFileSync(
			// 		path.join(
			// 			`../../../../public/markdown`,
			// 			`${match.params.documentId}.md`
			// 		),
			// 		{ encoding: 'utf8' }
			// 	)
			// })
		}
	}

	render() {
		return (
			<Slide
				direction="down"
				in={!!this.props.file}
				// in={this.state.mounted}
				// className={classNames(classes.slide, {
				// 	[classes.out]: !this.state.mounted
				// })}
			>
				<SceneRoot>
					<Markdown source={this.props.file} />
				</SceneRoot>
			</Slide>
		)
	}
}

DocScene.propTypes = {
	documentId: PropTypes.string
}

export default compose(
	withRouter,
	withFileReader
)(DocScene)
