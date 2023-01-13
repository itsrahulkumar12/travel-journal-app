import React from "react";
import { MdLocationOn } from "react-icons/md";

const Card = (props) => {
    // console.log(props.item); // we can check what data is coming through props
  return (
    <>
      <div className="card">
        <img src={props.item.imageUrl} alt="" className="card-img" />
        <div className="card-content-container">
          <div className="card-location-div">
            <span>
              <MdLocationOn />
              <h4 className="location">{props.item.location}</h4>
            </span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="card-title">{props.item.title}</h1>
          <h5 className="travel-date">{props.item.startDate} - {props.item.endDate}</h5>
          <p className="card-disc">
            {props.item.description}
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Card;
