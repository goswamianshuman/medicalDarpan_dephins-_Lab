import React from "react";
import Card from "./SidebarCard/Card";
import {
  Business_Type,
  Manufacturer,
  Prescription,
  Related_Brands,
} from "../../data";
import Related_Cateogry from "./SidebarCard/RelatedCategory";
import StrengthCard from "./SidebarCard/Strength";

function Sidebar() {
  return (
    <div className="sidebar">
      <Related_Cateogry />
      <Card data={Related_Brands.data} heading={Related_Brands.heading} />
      <Card data={Business_Type.data} heading={Business_Type.heading} />
      <StrengthCard />
      <Card data={Manufacturer.data} heading={Manufacturer.heading} />
      <Card data={Prescription.data} heading={Prescription.heading} />
    </div>
  );
}

export default Sidebar;
