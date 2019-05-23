import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import IndexScene from '../scene/index'
import ContactScene from '../scene/contact'
import routes from '../../utils/routes/routes'

/**
 * Manages to display a centered info panel
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
const BodyContainer = () => {
	return (
		<Switch>
			<Route exact path={routes.index} component={IndexScene} />
			<Route exact path={routes.contact} component={ContactScene} />
			{/* <Route component={NotFoundScene} /> */}
		</Switch>
	)
}

BodyContainer.propTypes = {
	children: PropTypes.node
}

export default BodyContainer
