import React, { Component } from 'react';
import { SearchBox } from "../../components/search-box/search-box.component"
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    name: 'blog topics',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'blog/topics'
                },
                {
                    name: 'contact topics',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'contact/topics'
                },
                {
                    name: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    name: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    name: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ],
            searchField: '',
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => this.setState({ sections: data }))
    // }

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
            <div>
                <SearchBox
                    placeholder="Search sections"
                    handleChange={this.onSearchChange}
                />
                <br /><br />
                <div className="directory-menu">
                {/* { id, name, imageUrl, linkUrl } */}
                    {filteredSections.map(({ id, ...otherSectionProps }) =>
                        <MenuItem key={id} {...otherSectionProps} />
                    )}
                </div>
            </div>
        )
    }
}


export default Directory