import React from 'react'

export default class Acts extends React.Component {
    state = {
        acts: []
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/v1/categories/${this.props.match.params.categoryName}/acts/`, {
          method: 'GET'
        })
        .then(res => res.json())
        .then(data => this.setState({acts: data.data}))
      }

    
    render() {
        const { acts } = this.state

        return(
            <div>
                {acts && acts.map(act => (
                    <div key={act._id}>
                        {act.username} is my name <br/>
                        {act.actid} is my id  <br/>

                    </div>
                ))}
            </div>
        )
    }
}

// {
//     "message": "all acts",
//     "data": [
//         {
//             "_id": "5c64470d056f3712ca4b19c5",
//             "username": "SAM",
//             "actid": 12345,
//             "categoryName": "coked",
//             "caption": "ass",
//             "upvotes": 1,
//             "timestamp": "2019-02-13T16:34:21.602Z",
//             "imgB64": "adsdadw",
//             "__v": 0
//         }
//     ]
// }