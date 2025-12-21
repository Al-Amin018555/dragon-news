import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(id, data);
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == '0') {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCategoryNews(data);

        }
        else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);

        }
        else {
            const filteredNews = data.filter(news => news.category_id == id);
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }

    }, [data, id])

    return (
        <div>
            <h2>Total {categoryNews.length} news found</h2>
        </div>
    );
};

export default CategoryNews;