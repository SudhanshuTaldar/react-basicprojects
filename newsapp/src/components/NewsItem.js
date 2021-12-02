// // import { getByTitle } from '@testing-library/react'
// import React, { Component } from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// export class Newsitem extends Component {
//     render() {
//        let {title,description,imageUrl,newsUrl} = this.props;
//        console.log(newsUrl);
//        console.log("dfhbdhf");
//         return (
//                 <Router>
//             <div>
//                 <div className="card" style={{width: "18rem"}}>
//                     <img src={imageUrl} className="card-img-top" alt="..."/>
//                         <div className="card-body">
//                             <h4 className="card-title">{title}</h4>
//                             <p className="card-text">{newsUrl}</p>
//                             <p className="card-text">{description}</p>

//                             <a rel="noreferrer" href="https://www.engadget.com/the-morning-after-our-verdict-on-samsungs-galaxy-z-fold-3-111536860.html" target="_blank" className="btn btn-sm btn-primary">Read More</a>
//                             <Link to={newsUrl}>Home</Link>
//                         </div>
//                 </div>
//             </div>
//                 </Router>
//         )
//     }
// }

// export default Newsitem

import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem