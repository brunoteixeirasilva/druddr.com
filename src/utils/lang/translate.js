import {
	loadLanguageFile,
	translate as t,
	tryTranslate as tt
} from '@druddr/translate'

// Pre-loading language file (must be within scopes)
loadLanguageFile(require('../../i18n/pt_br.json'))

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
	return t(key, params)
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
	return tt(key, params, exposeException)
}

export { translate, tryTranslate }
