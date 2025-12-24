import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h1 className="font-bold">All Categories ({categories.length})</h1>
            <div className="grid grid-cols-1 mt-5 gap-5">
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className="btn shadow-none bg-base-100 bt hover:bg-base-300 text-accent  border-0">{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;