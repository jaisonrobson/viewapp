import React, { useRef, forwardRef } from 'react'
import styled from 'styled-components'

import ModalCover from 'components/custom/ModalCover'

//Fazer a passagem de parametros aqui para fechar e abrir a propriedade Display por codigo
const BackgroundWrapper = styled(({ display, innerRef, ...props }) => <div ref={innerRef} {...props} />)`
    ${({ display }) => display ? `display: block;` : 'display: none;'}
    position: fixed; /* Stay in place */
    z-index: 999; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.80); /* Black w/ opacity */
`

const BackgroundReffered = forwardRef((props, ref) => (<BackgroundWrapper innerRef={ref} {...props} />))

const ContentWrapper = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`

const Close = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`

const VideoModal = ({ showModal, onClose }) => {
    const modal = useRef(null)

    const onClick = (event) => {
        if (modal && modal.current && event.target == modal.current)
            onClose()
    }

    return (
        <BackgroundReffered ref={modal} onClick={onClick} display={showModal}>
            <ContentWrapper>
                <Close onClick={onClose}>&times;</Close>
                <p>Teste de texto na modal, bla bla bla bla.</p>
            </ContentWrapper>
        </BackgroundReffered>
    )
}

export default ModalCover(VideoModal)
