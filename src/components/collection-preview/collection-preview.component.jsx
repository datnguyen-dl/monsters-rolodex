import React from 'react';

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {
    const FilterItems = items.filter(((item, idx) => idx < 4))
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {/* FilterItems.map(({id, ...otherCollectionitems}) */}
                {
                    FilterItems.map((item) => {
                        // console.log("CollectionPreview", item)
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview
