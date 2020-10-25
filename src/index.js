import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./components/styles/App.css"
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Router>,
    document.getElementById("root")
)
