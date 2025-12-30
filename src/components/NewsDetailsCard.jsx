import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
    const { title, image_url, details, category_id } = news;
    
    return (
        <div className="space-y-5">
            <img className="w-full h-87.5 object-cover" src={image_url} alt="" />
            <h2 className="text-3xl">{title}</h2>
            <p>{details}</p>

            <Link className="btn btn-secondary" to={`/category/${category_id}`}>All news in this category</Link>

        </div>
    );
};

export default NewsDetailsCard;