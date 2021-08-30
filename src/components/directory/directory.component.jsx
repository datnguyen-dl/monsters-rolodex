import React, { Component } from 'react';
import { SearchBox } from "../../components/search-box/search-box.component"
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ sections: data }))
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value,
        })
    }

    render() {
        // const monsters = this.state.monsters viet ngan lai nhu o duoi
        const { sections, searchField } = this.state
        // array.filter(function(currentValue, index, arr), thisValue)
        const filteredSections = sections.filter(section =>
            section.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return (
            <>
                <SearchBox
                    placeholder="Search sections"
                    handleChange={this.onSearchChange}
                />
                <br/>
                <div className="directory-menu">
                    {filteredSections.map(({ name, id }) =>
                        <MenuItem key={id} name={name} id={id} />
                    )}
                </div>
            </>
        )
    }
}


export default Directory