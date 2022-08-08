import React, { PureComponent } from 'react';

// 외부에서 props 전달받은 습관을 보여주기만 하는 컴포넌트이기 때문에, 스테이트를 가지고 있을 필요가 
// 전혀 없습니다. 

class Habit extends PureComponent {

    handleIncrement = (event) => {
        this.props.onIncrement(this.props.habit)
    }

    handleDecrement = (event) => {
       this.props.onDecrement(this.props.habit)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit)
    }

    render() {
        const { name } = this.props.habit
        const { count } = this.props
    return (
      <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
            <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
            <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete' onClick={this.handleDelete}>
            <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
