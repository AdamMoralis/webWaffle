/*
  Uses: https://www.npmjs.com/package/cordova-plugin-x-socialsharing
*/
window.wafflecordova = window.wafflecordova || {}
window.wafflecordova.share = ({ title, text }) => {
	// this is the complete list of currently supported params you can pass to the plugin (all optional)
	const options = {
		message: text, // not supported on some apps (Facebook, Instagram)
		subject: title, // fi. for email
		// files: ['', ''], // an array of filenames either locally or remotely
		// url: 'https://wafflegame.net',
		// chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
		// appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
		// iPadCoordinates: '0,0,0,0', //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
	}

	const onSuccess = result => {
		console.log(`Share completed? ${result.completed}`) // On Android apps mostly return false even while it's true
		console.log(`Shared to app: ${result.app}`) // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
	}

	const onError = msg => {
		console.log(`Sharing failed with message: ${msg}`)
	}

	window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError)
}
