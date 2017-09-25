import React from 'react';

class Record extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          component: 'first ...'
        },

        {
          id: 2,
          component: 'second ...'
        },

        {
          id: 3,
          component: 'third ...'
        }
      ]
    }
  }

  render() {
    return(
      <div>
        <div className="table table-responsive">
          <table className="table table-hover">
            <tr className="bg-info">
              <th>Id</th>
              <th>Component</th>
            </tr>
            {this.state.data.map((x, i) => <Content key={i} componentData = {x} />)}
          </table>
        </div>
      </div>
      );
  }
}

class Content extends React.Component {
  render() {
    return (        
      <tr>
        <td>{this.props.componentData.id}</td>
        <td>{this.props.componentData.component}</td>
      </tr>
    )
  }
}

export default Record;