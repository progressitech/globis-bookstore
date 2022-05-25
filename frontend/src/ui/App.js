import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import { Home } from './Home'
import { AboutUs } from './AboutUs'
import {Navigation} from "./Navigation"
import {Footer} from "./Footer"

export function App() {
	return(
		<>
			<BrowserRouter>
				<Navigation/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about-us' component={AboutUs} />
				</Switch>
				<Footer/>
			</BrowserRouter>
		</>
	)
}