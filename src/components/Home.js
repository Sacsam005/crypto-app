import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../Services/CryptoApi';
import { Cryptocurrencies, News, Loader } from '../components';

const { Title } = Typography;

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) {
        return <Loader />
    }
    else {
        return (
            <>
                <Title level={2} className="heading">Global Digital Coin Stats</Title>
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                    <Col span={12}><Statistic title="Total Digital Coin Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                    <Col span={12}><Statistic title="Total Market Impact" value={millify(globalStats.totalMarketCap)} /></Col>
                    <Col span={12}><Statistic title="Total 24hr Vol" value={millify(globalStats.total24hVolume)} /></Col>
                    <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarkets)} /></Col>
                </Row>
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Latest Digital Currency News</Title>
                    <Title level={3} className="show-more"><Link to="/news">Learn more</Link></Title>
                </div>
                <News simplified />
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Top 10 Digital Currencies in the world</Title>
                    <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
                </div>
                <Cryptocurrencies simplified />
            </>
        );
    };
}

export default Home;
