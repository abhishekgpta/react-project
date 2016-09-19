import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import commenttextfield from '../src/Commentformmui';

var CommentForm = React.createClass({
	render: ()=>{
		return(
			<MuiThemeProvider>
				<commenttextfield type='text' hintText="Your name" /><br/>
				<commenttextfield type='text' hintText="Your comment" /><br/>
			</MuiThemeProvider>
		);
	}
});

module.exports=CommentForm;