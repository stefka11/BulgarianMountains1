import { Link } from 'react-router';

export default function CatalogItem({
    _id,
    title,
    region,
    img
}){
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={img} width="50px" height="80px"/>
                <h6>{region}</h6>
                <h2>{title}</h2>
                <Link to={`/catalog/${_id}/details`} className="details-button">Details</Link>
            </div>

        </div>
    );
}