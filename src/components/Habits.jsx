import React, { Component } from 'react';
import Addform from './Addform';
import Habit from './Habit';

class Habits extends Component {

  render() {
    return (
      <div className='main-container'>
        <Addform onAdd={(name) => this.props.onAdd(name)} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={(habit) => this.props.onIncrement(habit)}
              onDecrement={(habit) => this.props.onDecrement(habit)}
              onDelete={(habit) => this.props.onDelete(habit)}
            ></Habit>
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}> Reset All </button>
      </div>
    );
  }
}

export default Habits;
