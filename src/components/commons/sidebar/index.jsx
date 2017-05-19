import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Books = () => (
  <div>
    <h2>Books</h2>
  </div>
)

const Tag = ({ match }) => (
  <div>
    <h3>{match.params.tagId}</h3>
  </div>
)

const Tags = ({ match }) => (
  <div>
    <h2>Tags</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:tagId`} component={Tag}/>
    <Route strict path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Notes</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/tags">Tags</Link></li>
      </ul>

      <hr/>

      <Route strict path="/" component={Home}/>
      <Route path="/books" component={Books}/>
      <Route path="/tags" component={Tags}/>
    </div>
  </Router>
)
export default BasicExample