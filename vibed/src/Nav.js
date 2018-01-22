import React, { Component } from 'react';
import {Navbar, 
		NavItem,
		Icon} from 'react-materialize'
class Nav extends Component {
	render () {
		return (
			<div>
	<Navbar brand='logo' right>
	<NavItem href='#'><Icon>search</Icon></NavItem>
	<NavItem href='#'><Icon>view_module</Icon></NavItem>
	<NavItem href='#'><Icon>more_vert</Icon></NavItem>
	</Navbar>
			</div>
		)
	}
}

export default Nav