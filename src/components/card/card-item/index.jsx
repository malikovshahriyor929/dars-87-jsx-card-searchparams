import React, { useEffect } from "react";

import button from "../../../assets/Button.svg";
import star from "../../../assets/star.svg";
import productImg from "../../../assets/t_product_540_high.jpg (1).png";

const Card_item = ({name,price,installment,rating}) => {


  return (
    <div className="flex gap-3 flex-col   ">
      <div>
        <img className="w-full" src={productImg} alt="" />
      </div>
      <div className="flex flex-col gap-10 h-full justify-between">
        <div>
          <h3 className="text-[18px]">{name}</h3>
          <p className="text-[14px]  flex items-center gap-1">
            <img src={star} alt="" />
            {rating}
          </p>
        </div>

        <div>
          <p className=" line-through text-[gray] w-fit px-1 rounded-lg ">
            {installment}
          </p>
          <div className="flex  justify-between px-1">
            <p className="text-[22px] font-medium ">{price.toLocaleString( )} som</p>
            <img src={button} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card_item;
