import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { isDesktop } from 'react-device-detect'

import castelo from 'images/castelo.jpg'
import gatopordosol from 'images/gatopordosol.jpg'
import surfando from 'images/surfando.jpg'

const carouselDefaultProps = {
    width: '100vw',
    height: '85vh',
}

const payload = [
    {
        src: castelo,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: gatopordosol,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: surfando,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const StyledItem = styled(({ backgroundImage, opacity, ...props }) => <div {...props} />)`
    background-image: url(${({ backgroundImage }) => backgroundImage});
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    transition: opacity 2s ease;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    ${({ opacity }) => opacity ? `opacity: ${opacity};` : ''}
`

const StyledIndicators = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 5vh;
    margin-left: 15%;
    list-style: none;
`

const StyledIndicator = styled(({ opacity, cursor, ...props }) => <button {...props} />)`
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 12px;
    height: 12px;
    padding: 0;
    margin-right: 7px;
    margin-left: 7px;
    text-indent: -999px;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: ${({ opacity }) => opacity ? opacity : '.5'};
    transition: opacity .6s ease;
    ${({ cursor }) => cursor ? `cursor: ${cursor};` : ''}
    border-radius: 50%;
`

const StyledInfoArea = styled.div`
    position: absolute;
    width: ${carouselDefaultProps.width};
    height: ${carouselDefaultProps.height};
    padding: 2rem;
    z-index: 3;
`

const StyledCaption = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    color: #FFFFFF;
`

const StyledInner = styled.div`
    width: 100%;
    height: 100%;
`

const StyledCarousel = styled.div`
    position: relative;
    width: ${carouselDefaultProps.width};
    height: ${carouselDefaultProps.height};
`

const StyledGradient = styled(({ backgroundColor, backgroundTo, ...props }) => <div {...props} />)`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to ${({ backgroundTo }) => backgroundTo ? backgroundTo : 'bottom'},rgba(0,0,0,0) 0%,rgba(0,0,0,0) 75%,${({ backgroundColor }) => backgroundColor ? backgroundColor : '#000'} 100%);
`

const StyledOverlay = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to bottom,rgba(0,0,0,.7) 0%,rgba(0,0,0,.5) 25%);
`
//Este componente sera refatorado em outro momento.
const Carousel = ({ interval = 6000, ...props }) => {
    const ref = useRef(null)
    const [active, setActive] = useState(0)
    const [items,] = useState(payload)
    const next = () => setActive(active === (items.length - 1) ? 0 : active + 1)

    useEffect(
        () => {
            let rotationEvent = setInterval(next, interval)
            const over = () => clearInterval(rotationEvent)
            const leave = () => rotationEvent = setInterval(next, interval)
            const node = ReactDOM.findDOMNode(ref.current)

            if (isDesktop) {
                node.addEventListener("mouseover", over)
                node.addEventListener("mouseleave", leave)
            }

            return () => {
                clearInterval(rotationEvent)
                if (isDesktop) {
                    node.removeEventListener("mouseover", over)
                    node.removeEventListener("mouseleave", leave)
                }
            }
        }
    )

    return (
        <StyledCarousel ref={ref}>
            <StyledIndicators>
                {items.map((element, index) => (
                    <StyledIndicator
                        key={element.src}
                        onClick={() => setActive(index)}
                        disabled={active === index}
                        opacity={active === index ? '1' : false}
                        cursor={active === index ? 'default' : 'pointer'}
                    />
                ))}
            </StyledIndicators>

            <StyledInfoArea>
                <StyledCaption>
                    <div>
                        <h1 style={{ color: '#fff' }}>
                            {items[active].caption}
                        </h1>
                        <p
                            style={{
                                fontFamily: "'Roboto',sans-serif",
                                fontSize: '12px',
                                lineHeight: '1.5em',
                                color: '#FFFFFFA8',
                                textShadow: '1px 1px 2px #57575770',
                            }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button>Watch</button>
                    </div>
                </StyledCaption>
            </StyledInfoArea>

            <StyledInner>
                {items.map((element, index) => (
                    <StyledItem
                        key={element.src}
                        backgroundImage={items[index].src}
                        opacity={active === index ? '1' : '0'}
                    />
                ))}
            </StyledInner>

            <StyledOverlay />

            <StyledGradient
                backgroundColor="#202020"
                backgroundTo="bottom"
            />

            <StyledGradient
                backgroundColor="#202020"
                backgroundTo="top"
            />
        </StyledCarousel>
    )
}

export default Carousel
