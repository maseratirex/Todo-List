import React from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      task: {
        text: "My task",
        id: uniqid()
      },
      tasks: []
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: uniqid()
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        text: "My task",
        id: uniqid()
      }
    });
    console.log(this.state.tasks);
  };

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onSubmitTask}>
          <label>
            New Task
            <input type="text" value={this.state.task.text} onChange={this.handleChange} />
          </label> 
          <label>
            Submit Task
            <input type="submit" />
          </label>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;