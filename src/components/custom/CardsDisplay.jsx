import React from 'react'

import HorizontalScroll from 'components/layout/HorizontalScroll'
import Cover from 'components/layout/Cover'

const CardsDisplay = ({ payload }) => (
    <HorizontalScroll items={payload}>
        {({ src, genre, title }) =>
            <Cover
                image={src}
                title={title}
                caption={genre}
                width="380px"
                height="250px"
            />
        }
    </HorizontalScroll>
)

export default CardsDisplay
