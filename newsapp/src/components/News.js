// import React, { Component } from 'react'
// import NewsItem from './NewsItem.js'

// export class News extends Component {
//     articles = [
//         {
//             "source": {
//                 "id": "engadget",
//                 "name": "Engadget"
//             },
//             "author": "Mat Smith",
//             "title": "The Morning After: Our verdict on Samsung’s Galaxy Z Fold 3",
//             "description": "We’ll get into Samsung’s bigger foldable below, but first let’s talk about a new, kind of, PS5. You might have struggled to get a PS5, though anecdotal evidence suggests a lot of us have been able to find consoles as stores stock up, but that hasn’t stopped S…",
//             "url": "https://www.engadget.com/the-morning-after-our-verdict-on-samsungs-galaxy-z-fold-3-111536860.html",
//             "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-08/77e451c0-0751-11ec-b5e9-369516f4fa4e",
//             "publishedAt": "2021-08-30T11:15:36Z",
//             "content": "Well get into Samsungs bigger foldable below, but first lets talk about a new, kind of, PS5. You might have struggled to get a PS5, though anecdotal evidence suggests a lot of us have been able to fi… [+3733 chars]"
//         },
//         {
//             "source": {
//                 "id": "wired",
//                 "name": "Wired"
//             },
//             "author": "Lisa Rabasca Roepe",
//             "title": "How to Prepare for Your Eventual Return to the Office",
//             "description": "Whether your company wants you back sooner or later, these tips will help you make the adjustment smoothly.",
//             "url": "https://www.wired.com/story/how-to-prepare-return-to-office/",
//             "urlToImage": "https://media.wired.com/photos/612956722a38086e472aceca/191:100/w_1280,c_limit/Gear-How-to-Prepare-for-Return-to-Office-450741127.jpg",
//             "publishedAt": "2021-08-30T11:00:00Z",
//             "content": "As recently as two months ago, the 5-mile drive from the heart of Washington, DC, to my home in Arlington, Virginia, consistently took less than 10 minutes door-to-door, even in the middle of rush ho… [+3341 chars]"
//         },
//         {
//             "source": {
//                 "id": "reuters",
//                 "name": "Reuters"
//             },
//             "author": "Paulina Duran",
//             "title": "Australia considering new laws for Apple, Google, WeChat digital wallets - Reuters.com",
//             "description": "The Australian government is considering new laws that would tighten the regulation of digital payment services by tech giants such as Apple and Alphabet's Google.",
//             "url": "https://www.reuters.com/article/australia-payments-idUSKBN2FV06A",
//             "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20210830&t=2&i=1573304221&r=LYNXMPEH7T02F&w=800",
//             "publishedAt": "2021-08-30T03:20:00Z",
//             "content": "FILE PHOTO: A smartphone with the Apple Pay logo is placed on a displayed Google Pay logo in this illustration taken on July 14, 2021. REUTERS/Dado Ruvic/Illustration\r\nSYDNEY (Reuters) - The Australi… [+2000 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Yahoo Entertainment"
//             },
//             "author": "Jaelen Ogadhoh",
//             "title": "LeBron James throws elegant surprise birthday party for wife Savannah James",
//             "description": "There’s nothing quite like the power of Black love. NBA superstar LeBron James demonstrated the above in a major way […] The post LeBron James throws elegant...",
//             "url": "https://news.yahoo.com/lebron-james-throws-elegant-surprise-005550272.html",
//             "urlToImage": "https://s.yimg.com/uu/api/res/1.2/TnCBWUI1DoHz68U_S7xJpA--~B/aD02ODM7dz0xMDI0O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/thegrio_yahoo_articles_946/9adda8221c7eba0f5478fe9e5a523556",
//             "publishedAt": "2021-08-30T00:55:50Z",
//             "content": "Savannah Jamess 35th birthday bash included a live performance from Grammy-nominated R&amp;B singer Giveon\r\nTheres nothing quite like the power of Black love.\r\nNBA superstar LeBron James demonstrated… [+2906 chars]"
//         }
//     ]
//     constructor(){
//         super();
//         this.state={
//             articles:this.articles,
//             loading:false
//         }
//     }
//     render() {
//         return (
//             <div className="container my-3">
//                 <h2>NEWS APP - Top Headlines</h2>
//                 <div className="row">
//                     {this.state.articles.map((element)=>{
//                         return <div className="col-md-4" key={element.url}>
//                         <NewsItem   title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.Url}/>
//                     </div>
//                     })}
                    
//                 </div>
//             </div>
//         )
//     }
// }

// export default News

import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News