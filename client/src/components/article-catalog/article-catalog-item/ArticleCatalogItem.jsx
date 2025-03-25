import { Link } from 'react-router';

export default function ArticleCatalogItem({
    _id,
    title,
    region,
    img
}){
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={img}/>
                <h6>{region}</h6>
                <h2>{title}</h2>
                <Link to={`/catalog/${_id}/details`} className="details-button">Details</Link>
            </div>

        </div>
    );
}


          