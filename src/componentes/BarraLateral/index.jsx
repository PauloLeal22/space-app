import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import itensMenu from './itensMenu.json';

const ListaEstilizada = styled.ul`
    width: 212px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                { 
                    itensMenu.map(item => (
                        <ItemNavegacao key={item.id} iconeAtivo={item.iconeAtivo} iconeInativo={item.iconeInativo} ativo={item.ativo}>
                            { item.item }
                        </ItemNavegacao>
                    ))
                }
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;