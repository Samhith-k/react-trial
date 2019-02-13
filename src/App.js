import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class App extends Component {
  state={
    data: []
  }

  componentWillMount() {
    fetch('http://localhost:8080/api/v1/categories/', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => this.setState({data: data.data}))
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        {data && data.map(product => (
          <Link to={`/categories/acts/${product.categoryName}`} key={product._id}>
            {product.categoryName}
          </Link>
        ))}
      </div>
    );
  }
}

export default App;
