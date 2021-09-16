import React from 'react'

import HorizontalScroll from 'components/layout/HorizontalScroll'
import Cover from 'components/layout/Cover'

import TemplosSecretos from 'images/TemplosSecretos.jpg'
import ViagemInacreditavel from 'images/ViagemInacreditavel.jpg'
import EsportesNaMontanha from 'images/EsportesNaMontanha.jpg'
import Flamingo from 'images/Flamingo.jpg'
import LuaNova from 'images/LuaNova.jpg'
import MagoFantasia from 'images/MagoFantasia.jpg'
import Nave from 'images/Nave.jpg'
import Robo from 'images/Robo.jpg'

const payload = [
    {
        src: TemplosSecretos,
        genre: 'Nature',
        title: 'Secret Temples',
    },
    {
        src: EsportesNaMontanha,
        genre: 'Action',
        title: 'Mountain King',
    },
    {
        src: Flamingo,
        genre: 'Nature',
        title: 'Beautiful in everything',
    },
    {
        src: Nave,
        genre: 'Scifi',
        title: 'Into the Space',
    },
    {
        src: LuaNova,
        genre: 'Horror',
        title: 'After Midnight',
    },
    {
        src: MagoFantasia,
        genre: 'Fantasy',
        title: 'Beyond the Valley',
    },
    {
        src: Robo,
        genre: 'Scifi',
        title: 'Fight to Death',
    },
    {
        src: ViagemInacreditavel,
        genre: 'Adventure',
        title: 'Unbelievable Trip',
    }
]

const PostersDisplay = () => (
    <HorizontalScroll items={payload}>
        {({ src, genre, title }) =>
            <Cover
                image={src}
                title={title}
                caption={genre}
                width="300px"
                height="400px"
            />
        }
    </HorizontalScroll>
)

export default PostersDisplay
