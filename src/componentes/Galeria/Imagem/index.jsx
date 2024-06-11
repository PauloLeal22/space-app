import styled from "styled-components";

const ContainerBotoes = styled.div`
    display: flex;
    gap: 12px;
`;

const FigureEstilizada = styled.figure`
    width: ${(props) => (props.$expandida ? '60%' : '460px')} !important;
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 20px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 , p{
            margin: 0;
            font-size: 16px;
        }
    }
    footer {
        display: flex;
        justify-content: space-between;

        button {
            border: none;
            cursor: pointer;
            background-color: transparent;
        }
    }
`;


const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';

    return (
        <FigureEstilizada $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>{foto.fonte}</p>
                    <ContainerBotoes>
                        <button onClick={() => aoAlternarFavorito(foto)}>
                            <img src={iconeFavorito} alt="Icone de favorito"/>
                        </button>
                        {
                            !expandida && 
                            <button aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                                <img src="/icones/expandir.png" />
                            </button>
                        }
                    </ContainerBotoes>
                </footer>
            </figcaption>
        </FigureEstilizada>
    )
}

export default Imagem;