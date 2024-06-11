import styled from 'styled-components';
import tags from './tags.json';

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const MainTags = styled.section`
    display: flex;
    gap: 48px;
    align-items: center;
    margin: 48px 0 24px 0;
`;

const ContainerTags = styled.div`
    display: flex;
    gap: 24px;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.$tagSelecionada ? '#C98CF1' : 'transparent'};
    &:hover {
      border-color: #C98CF1;
    }
`;

const Tags = ({ setTagSelecionada, tagSelecionada }) => {
    return (
        <>
            <MainTags>
                <TagTitulo>Busque por tags: </TagTitulo>
                <ContainerTags>
                { 
                    tags.map(tag => 
                        <Tag 
                            key={tag.id} 
                            onClick={() => setTagSelecionada(tag.id)} 
                            $tagSelecionada={tagSelecionada === tag.id ? true : false}
                        > 
                            {tag.titulo} 
                        </Tag>
                    ) 
                }
                </ContainerTags>
                
            </MainTags>
            
        </>
    )
}

export default Tags;