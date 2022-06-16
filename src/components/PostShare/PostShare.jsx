import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setimage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setimage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <>
      <div className="postShare">
        <img src={ProfileImage} alt="" />

        <div>
          <input type="text" placeholder="What is happening" />

          <div className="postOption">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilScenery />
              Photo
            </div>
            <div className="option" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              Video
            </div>
            <div className="option" style={{ color: "var(--location)" }}>
              <UilLocationPoint />
              Location
            </div>
            <div className="option" style={{ color: "var(--shedule)" }}>
              <UilSchedule />
              Schedule
            </div>
            <button className="button ps-button">Share</button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage">
              <UilTimes onClick={()=>setimage(null)} />
              <img src={image.image} alt="" accept="image/jpg"/>
              {/* <input type="file" src={image.image} accept="image/png, image/gif, image/jpeg" /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
