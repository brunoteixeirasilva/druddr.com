import React from 'react' 
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'
import routes from '../../utils/routes/routes'

// new ones
import LoginScene from '../scene/auth/login'
import NewRequestScene from '../scene/request/new'

// old ones
import HomeScene from '../scene/home'
import ContactScene from '../scene/contact'
import NotFoundScene from '../scene/notFound'
import DocScene from '../scene/doc'

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
			<Route exact path={routes.index} component={LoginScene} />
			<Route exact path={routes.newRequest} component={NewRequestScene} />
			<Route exact path={routes.contact} component={ContactScene} />
			<Route path={routes.doc} component={DocScene} />
			<Route component={NotFoundScene} />
		</Switch>
	)
}

BodyContainer.propTypes = {
	children: PropTypes.node
}

export default BodyContainer
