import React from "react";

const NewsCard = ({ json }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <p
          className="card-title"
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        >
          {json.title.substring(0, json.title.indexOf(" - "))}
        </p>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-sm">
            <a href={`${json.url}`} className="btn btn-primary">
              View
            </a>
          </div>
          <div className="col-sm">
            <p>
              {json.source.name.substring(
                0,
                json.source.name.indexOf(".com")
              ) !== ""
                ? json.source.name.substring(
                    0,
                    json.source.name.indexOf(".com")
                  )
                : json.source.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
