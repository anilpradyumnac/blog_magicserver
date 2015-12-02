var React = require('react');

var Footer = React.createClass({
	render:function(){
		return(
			<footer>
			Powered by <a href="http://geekskool.com">Geekskool</a><br/>Runs on  <a href="https://github.com/geekskool/magicserver">MagicServer</a>
			</footer>
		)
	}
})

module.exports = Footer