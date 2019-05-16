import React, { Component } from 'react';
import NewsItem from './News_item';
import { getNewsById } from '../../services/newsService';

class NewsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            fonte: props.fonteNoticias,
            itens: getNewsById(props.fonteNoticias.id),
            name: props.fonteNoticias.title ? props.fonteNoticias.title : 'Nao informado'
        }
    }

    render(){
        return (
            <div className="newsSource">
                <div className="newssourceHeader"><h1># {this.state.name}</h1></div>
                    {
                    this.state.itens.map(selectedItem=>(<NewsItem item={ selectedItem } />))
                    }
            </div>
        );
    }
}

export default NewsList;