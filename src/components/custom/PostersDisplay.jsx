import React from 'react'

import HorizontalScroll from 'components/layout/HorizontalScroll'
import Cover from 'components/layout/Cover'

const PostersDisplay = ({ payload }) => (
    <HorizontalScroll items={payload}>
        {({ imageSrc, genre, title }) =>
            <Cover
                image={imageSrc}
                title={title}
                caption={genre}
                width="300px"
                height="400px"
            />
        }
    </HorizontalScroll>
)

export default PostersDisplay
