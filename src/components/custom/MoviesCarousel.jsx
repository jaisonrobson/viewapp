import React from 'react'

import Col from 'components/layout/Col'
import Container from 'components/layout/Container'
import Row from 'components/layout/Row'
import Carousel from 'components/layout/Carousel'

const initialPayload = [
    {
        imageSrc: null,
        title: 'none',
        synopsis: 'none',
        genre: 'none',
        year: 0,
        duration: 0,
    }
]

const MoviesCarousel = ({ payload = initialPayload }) => {
    return (
        <Carousel
            payload={payload}
            imageParameter="imageSrc"
            caption={({ payload, active }) => (
                <div />
                // <Container>
                //     <Row>
                //         <Col>
                //             <h1 style={{ color: '#fff' }}>
                //                 {payload[active].caption}
                //             </h1>
                //             <p
                //                 style={{
                //                     fontFamily: "'Roboto',sans-serif",
                //                     fontSize: '12px',
                //                     lineHeight: '1.5em',
                //                     color: '#FFFFFFA8',
                //                     textShadow: '1px 1px 2px #57575770',
                //                 }}
                //             >
                //                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                //             </p>
                //             <button>Watch</button>
                //         </Col>
                //     </Row>
                // </Container>
            )}
        />
    )
}

export default MoviesCarousel
