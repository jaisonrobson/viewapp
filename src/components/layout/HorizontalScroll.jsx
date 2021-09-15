import reactDom from 'react-dom'
import React, { useEffect, useRef, useState, forwardRef } from 'react'
import styled from 'styled-components'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { isDesktop } from 'react-device-detect'

import Cover from 'components/layout/Cover'
import Icon from 'components/layout/Icon'

import AcordandoBem from 'images/AcordandoBem.jpg'
import AVidaEAMorte from 'images/AVidaEAMorte.jpg'
import AProvaDeBafometro from 'images/AProvaDeBafometro.jpg'
import DoceJuventude from 'images/DoceJuventude.jpg'
import EsplendorDaNatureza from 'images/EsplendorDaNatureza.jpg'

const Wrapper = styled.div`
    position: relative;
`

const IndicatorsOverlay = styled(({ display, ...props }) => <div {...props} />)`
    position: absolute;    
    width: 100%;
    height: 100%;
    ${({ display }) => display ? `display: ${display};` : ''}
`

const Indicator = styled(({ innerRef, left, right, width, ...props }) => <div ref={innerRef} {...props} />)`
    position: absolute;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .3;
    z-index: 5;
    ${({ left }) => left ? `left: ${left};` : ''}
    ${({ right }) => right ? `right: ${right};` : ''}

    &:hover {
        opacity: 1;
    }
`

const IndicatorReffered = forwardRef((props, ref) => (<Indicator innerRef={ref} {...props} />))

const StyledHorizontalScroll = styled.div`
    --webkit-overflow-scrolling: touch;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

const StyledHorizontalScrollItem = styled(({ marginLeft, marginRight, itemSize, ...props }) => <div {...props} />)`
    flex: 0 0 ${({ itemSize }) => itemSize ? itemSize : 'auto'};
    ${({ marginLeft }) => marginLeft ? `margin-left: ${marginLeft};` : ''}
    ${({ marginRight }) => marginRight ? `margin-right: ${marginRight};` : ''}
`

const payload = [
    {
        src: AcordandoBem,
        genre: 'Casual',
        title: 'Waking up Well',
    },
    {
        src: AVidaEAMorte,
        genre: 'Action',
        title: 'Life and Death',
    },
    {
        src: AProvaDeBafometro,
        genre: 'Action',
        title: '2 Fast for You',
    },
    {
        src: DoceJuventude,
        genre: 'Casual',
        title: 'A long time ago',
    },
    {
        src: EsplendorDaNatureza,
        genre: 'Nature',
        title: 'Colors of Nature',
    },
]

const HorizontalScroll = ({ items: itemsProp = payload }) => {
    const ref = useRef(null)
    const leftIndicatorRef = useRef(null)
    const rightIndicatorRef = useRef(null)
    const [items,] = useState(itemsProp)

    const scrollLeft = () => {
        const node = reactDom.findDOMNode(ref.current)

        node.scrollBy({
            left: -node.clientWidth,
            behavior: 'smooth',
        })
    }

    const scrollRight = () => {
        const node = reactDom.findDOMNode(ref.current)

        node.scrollBy({
            left: node.clientWidth,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        if (!isDesktop) return false

        const overLeft = () => scrollLeft()
        const overRight = () => scrollRight()

        const nodeLeft = reactDom.findDOMNode(leftIndicatorRef.current)
        const nodeRight = reactDom.findDOMNode(rightIndicatorRef.current)

        nodeLeft.addEventListener("mouseover", overLeft)
        nodeRight.addEventListener("mouseover", overRight)

        return () => {
            nodeLeft.removeEventListener("mouseover", overLeft)
            nodeRight.removeEventListener("mouseover", overRight)
        }
    })

    return (
        <Wrapper>
            <IndicatorsOverlay display={isDesktop ? false : 'none'}>
                <IndicatorReffered ref={leftIndicatorRef} left="0">
                    <Icon size="3x" icon={faChevronLeft} />
                </IndicatorReffered>

                <IndicatorReffered ref={rightIndicatorRef} right="0">
                    <Icon size="3x" icon={faChevronRight} />
                </IndicatorReffered>
            </IndicatorsOverlay>

            <StyledHorizontalScroll ref={ref}>
                {items.map(({ title, genre, src }, index) => (
                    <StyledHorizontalScrollItem
                        key={src}
                        marginLeft={index !== 0 ? '2rem' : '0'}
                    >
                        <Cover
                            image={src}
                            title={title}
                            caption={genre}
                            width="380px"
                            height="250px"
                        />
                    </StyledHorizontalScrollItem>
                ))}
            </StyledHorizontalScroll>
        </Wrapper>
    )
}

export default HorizontalScroll
