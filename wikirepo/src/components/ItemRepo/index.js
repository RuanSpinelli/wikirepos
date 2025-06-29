    import React from 'react'
    import { ItemContainer } from './styles';


    function ItemRepo({ repo, onRemove }) {
    return (
        <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">ver repositório</a> <br />
        <a
            className="remove"
            href="#"
            onClick={(e) => {
            e.preventDefault();
            onRemove?.(repo.id); // Só chama se onRemove foi passado
            }}
        >
            remover
        </a>
        <hr />
        </ItemContainer>
    );
    }



    export default ItemRepo;