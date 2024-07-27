import React, { useEffect, useState } from "react";
import Services from "./Services";
import Spinner from "./Spinner";
import './pages-Css/services.css'

function Servicesitem() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getdata = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d160f2b6e9d435f94814359574ac42d"
      );
      const result = await response.json();
      // Assuming the relevant array is under the 'articles' property
      setdata(result.articles);
      setloading(false)
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container-serv">
      {loading && <Spinner />}
      <div className="row">
        {data.map((element) => (
          <div className="col-md-3" key={element.url}>
            <Services title={element.title.slice(0, 50)} imageUrl = {element.urlToImage} description ={element.description} newsUrl = {element.url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicesitem;
