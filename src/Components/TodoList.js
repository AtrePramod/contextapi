import React from 'react'

export class TodoList extends React.Component {
    render() {
        return (
            <div className='ui list'>
                <p className='items'>Paln the family trip</p>
                <p className='items'> Go to shopping </p>
                <p className='items'>Go to walk</p>

            </div>
        )
    }
}

export default TodoList
