import { Link } from 'react-router';

export default function CatalogItem({
    _id,
    title,
    region,
    opis,
    img
}){
    return (
        <div className="allGames">
            <div className="allGames-info">
                <h6>{region}</h6>
                <img src={img} width="600px" height="1200px"/>  
                <h2>{title} - {opis}</h2>
                <Link to={`/article/${_id}/details`} className="details-button">Виж по-вече...</Link>
            </div>

        </div>
    );
}