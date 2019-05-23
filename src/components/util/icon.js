/**
 * Returns an object with classNames for icon sizes
 *
 * @description Created the function
 * @author brunoteixeirasilva
 * @version 1.0
 *
 * @param {Boolean} useConcat [optional] Whether an '&.' should be added to the resultant propKeys
 */
export const getIconSizesObject = (useConcat = false) => ({
	[!useConcat ? 'iconSize128' : '&.iconSize128']: {
		fontSize: 128
	},
	[!useConcat ? 'iconSize56' : '&.iconSize56']: {
		fontSize: 56
	},
	[!useConcat ? 'iconSize48' : '&.iconSize48']: {
		fontSize: 48
	},
	[!useConcat ? 'iconSize64' : '&.iconSize64']: {
		fontSize: 64
	}
})
