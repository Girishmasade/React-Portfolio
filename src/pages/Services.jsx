import React from "react";
import '../pages/pages-Css/services.css'

function Services(props) {

  let { title, description, imageUrl, newsUrl} = props;

  return (
    <div className="my-3 services-container">
    <div className="card" style={{width: "19rem"}}>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
        }

        }> 
        </div>
        <img src={!imageUrl ? "https://nypost.com/wp-content/uploads/sites/2/2024/07/85017301.jpg?quality=75&strip=all&w=1024" : imageUrl} className="card-img-top" alt="..." style={{width: "18rem"}} />
        <div className="card-body">
            <h5 className="card-title">{!title? "There is no title" : title}  </h5>
            <p className="card-text">{!description ? "null" : description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
    </div>
</div>
  );
}

export default Services;
