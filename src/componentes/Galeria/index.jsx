import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ContainerFotos = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, setTagSelecionada, tagSelecionada }) => {
    return (
        <>
            <Tags setTagSelecionada={setTagSelecionada} tagSelecionada={tagSelecionada} />

            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>
                        Navegue pela galeria
                    </Titulo>
                    <ContainerFotos>
                    { 
                        fotos.map(foto => (
                            foto.visivel &&
                            <Imagem key={foto.id} foto={foto} aoZoomSolicitado={aoFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} />
                        )) 
                    }
                    </ContainerFotos>    
                </SecaoFluida>

                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;