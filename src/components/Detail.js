import React from "react";
import * as Mui from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

export default function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Mui.Stack className="detail-container">
      <img className="detail-image" src={gifUrl} alt={name} loading="lazy" />

      <Mui.Stack className="flow">
        <h2 className="detail-title">{name}</h2>
        <p>
          Engaging in physical exercises is essential to maintain physical strength and fitness. "{name}" are a compound
          exercise that primarily works the {target} while also engaging the core muscles, including the abs.
          Additionally, {name} can be modified to suit different fitness levels, making them a versatile exercise for
          beginners and advanced athletes alike. Incorporating {name} into your workout routine can be an effective way
          to improve strength, tone muscles, and enhance overall fitness.
        </p>
        {extraDetail.map((item) => (
          <Mui.Stack className="extra-detail-container" key={item.name}>
            <Mui.Button className="extra-detail-image">
              <img src={item.icon} alt={item.name} />
            </Mui.Button>
            <h6>{item.name}</h6>
          </Mui.Stack>
        ))}
      </Mui.Stack>
    </Mui.Stack>
  );
}
