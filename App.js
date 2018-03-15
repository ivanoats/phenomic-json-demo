import React from 'react'
import { Router, Route, browserHistory, Link } from 'react-router'
import {
  createApp,
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client'

const Home = () => (
  <div>
    <p>This is a homepage</p>
  </div>
)

const Location = ({ isLoading, page }) => (
  <div>
    {isLoading && 'Loading...'}
    {!isLoading &&
      page.node && (
        <article>
          <h1>{page.node.name}</h1>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </article>
      )}
    <footer>
      <Link to="/">Home</Link>
    </footer>
  </div>
)

const LocationContainer = createContainer(Location, props => ({
  page: query({ path: 'locations', id: props.params.splat })
}))

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/locations/*" component={LocationContainer} />
  </Router>
))
