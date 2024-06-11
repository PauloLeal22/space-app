import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import ModalZoom from "./componentes/ModalZoom";

import fotos from './fotos.json';
import { useEffect, useState } from "react";
import Rodape from "./componentes/Rodape";

const FundoGradiente = styled.div`
  width: 100%;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [tagSelecionada, setTagSelecionada] = useState(0);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }));
  }

  useEffect(() => {
    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        visivel: fotoGaleria.titulo.toLowerCase().includes(filtro.toLowerCase()) && (fotoGaleria.tagId === tagSelecionada || tagSelecionada === 0) ? true : false
      }
    }));
  }, [filtro, tagSelecionada]);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner texto='A galeria mais completa de fotos do espaço!' backgroundImage='src/assets/banner.png' />
            <Galeria 
              fotos={fotosGaleria} 
              tagSelecionada={tagSelecionada} 
              setTagSelecionada={setTagSelecionada} 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              aoAlternarFavorito={aoAlternarFavorito} 
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito}/>
      <Rodape />
    </FundoGradiente>
  )
}

export default App;
