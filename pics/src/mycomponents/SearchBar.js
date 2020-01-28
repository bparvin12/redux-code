import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        //arrow function makes it so that this is always bound to the SearchBar class
        console.log(this.state.term);
      
        this.props.onSubmit(this.state.term)
    }

    //JSX event handlers: onChange, onSubmit, onClick
    render () {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        {/* <input
                            type='text' 
                            onChange={this.onInputChange}
                        /> */}
                        {/* or the onChange function can be written as an arrow function. used only if there is a single line of could ideally. like so:  */}
                        {/* <input 
                            type='text'
                            onChange={(event) => console.log(event.target.value)}
                        /> */}
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(event) => this.setState({ term: event.target.value.toUpperCase() })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar; 