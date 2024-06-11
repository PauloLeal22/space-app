import { styled } from "styled-components";
import Imagem from "../Galeria/Imagem";
// import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 20%;
    background: transparent;
    padding: 0;
    border: 0;
    width: 70%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonEstilizado = styled.button`
    background: transparent;
    border-radius: 20px;
    border: transparent;
    position: absolute;
    top: -5%;
    right: 21%;
    cursor: pointer;
    img {
        width: 16px;
        height: 16px;
    }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <ButtonEstilizado formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </ButtonEstilizado>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom;
