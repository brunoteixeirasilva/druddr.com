const langDoc = require('../../i18n/pt_br.json')

/**
 * Exposes the passed key (with our w/o params) as a text message; if
 * passed on a valid key found on any of the available language files at /i18n
 *
 * @author brunoteixeirasilva
 * @version 1.0
 *
 * @param {string} key the key of the text message to be listed out from an i18n file
 * @param {Object} params object where props are the key-value pair at the text message;
 * E.g. { userName: 'John' } will look for a prop written as "${userName}"
 */
function translate(key, params = null) {
	let result = langDoc[key]

	if (!result)
		throw Error(
			`Language item with key => "${key}" was not found in lang (i18n) file`
		)

	if (params)
		Object.keys(params).forEach((param) => {
			result =
				result.indexOf(param) > -1
					? result.replace('${' + param + '}', `${params[param]}`)
					: result
		})

	return result
}

/**
 * [try-catch-wrapped] Exposes the passed key (with our w/o params) as a text message; if
 * passed on an invalid key, not-found on the active language file at /i18n, will return false
 *
 * @author brunoteixeirasilva
 * @version 1.0
 *
 * @param {string} key the key of the text message to be listed out from an i18n file
 * @param {Object} params object where props are the key-value pair at the text message;
 * 							E.g. { userName: 'John' } will look for a prop written as "${userName}"
 * @param {Boolean} exposeException Will expose (rethrow an error) if =>true, encapsulate if =>false
 */
function tryTranslate(key, params = null, exposeException = false) {
	let result = false

	try {
		result = translate(key, params)
	} catch (ex) {
		//Error was set to be exposed
		//Rethrows the error
		if (!!exposeException) throw ex
	}

	//In the case the error shouldn't be exposed
	//Or successfully found
	//Will return the resultant extent
	return result
}

export { translate, tryTranslate }
