import React from "react";

const NewsItem = (props) => {
  
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
return (
  <>
    <div>
      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img
          src={
            !imageUrl
              ? "https://www.livemint.com/lm-img/img/2024/02/01/1600x900/Apple-Mixed-Reality-Headset-0_1706806773141_1706806837908.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="badge badge-pill badge-success mx-1">
              {source}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="text-muted">
            By {!author ? "Unknown" : author} on{" "}
            {new Date(date).toGMTString()}
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-success"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </>
);
}


export default NewsItem

  
