import React from "react";

const NewsCard = ({ json }) => {
  return (
    <div className="card m-2" style={{ width: "14rem" }}>
      <div className="card-body">
        <p
          className="card-title"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            textAlign: "center"
          }}
        >
          {json.title.substring(0, json.title.indexOf(" - "))}
        </p>
        <div className="row m-2">
          <a
            href={`${json.url}`}
            className="btn btn-primary"
            style={{ margin: "auto" }}
          >
            View
          </a>
        </div>
        <div className="row m-2">
          <p style={{ margin: "auto" }}>
            {json.source.name.substring(0, json.source.name.indexOf(".com")) !==
            ""
              ? json.source.name.substring(0, json.source.name.indexOf(".com"))
              : json.source.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
