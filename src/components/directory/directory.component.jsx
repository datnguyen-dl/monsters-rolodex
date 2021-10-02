import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { searchSectionsItem } from '../../redux/directory/directory.actions';

import { SearchBox } from "../../components/search-box/search-box.component"
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

// onSearchChange = (event) => {
//     this.setState({
//         searchField: event.target.value,
//     })
// }


const Directory = ({ sections, searchSectionsItem }) => {
    return (
        <div>
            {/* <div onClick={searchSectionsItem}>AAAAAAAAa</div> */}
            <SearchBox
                placeholder="Search sections"
                handleChange={searchSectionsItem}
            />
            <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps }) =>
                    <MenuItem key={id} {...otherSectionProps} />
                )}
            </div>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

const mapDispatchToProps = (dispatch) => ({
    searchSectionsItem: () => dispatch(searchSectionsItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(Directory)