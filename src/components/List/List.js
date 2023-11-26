import React from 'react';

import { ListSection } from './ListStyles';

const List = () => {
    return (
        <ListSection id="minha_cotacao">
            <table border="1" id='tabela1'>
                <thead>
                    <tr>
                        <th>Coluna 1</th>
                        <th>Coluna 2</th>
                        <th>Coluna 3</th>
                    </tr>
                </thead>


                <tbody>

                    <tr>
                        <td>Linha 1, Coluna 1</td>
                        <td>Linha 1, Coluna 2</td>
                        <td>Linha 1, Coluna 3</td>
                    </tr>


                    <tr>
                        <td>Linha 2, Coluna 1</td>
                        <td>Linha 2, Coluna 2</td>
                        <td>Linha 2, Coluna 3</td>
                    </tr>
                </tbody>
            </table>

        </ListSection>

    );
};

export default List;