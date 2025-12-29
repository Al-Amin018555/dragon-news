import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import NewsDetailsCard from '../components/NewsDetailsCard';
import RightAside from '../components/homeLayout/RightAside';
import { useEffect, useState } from 'react';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [news, setNews] = useState({});
    console.log(news);

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails);
    }, [data, id])


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'> Dragon News </h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section className='col-span-3'>
                    <aside>
                        <RightAside></RightAside>
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;