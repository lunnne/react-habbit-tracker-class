import React, {Component} from 'react';

class Addform extends Component {

    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        //this.inputRef.current.value = '';
        this.formRef.current.reset(); 
    }

    render() {
        console.log('habbit Add form');
        return (
            <div>
                <form ref={this.formRef} className='add-form'onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} type="text" className='add-input' placeholder='Habit'/>
                    <button type='submit' className='add-button'>Add</button>
                </form>
            </div>
        );
    }
}

export default Addform;
