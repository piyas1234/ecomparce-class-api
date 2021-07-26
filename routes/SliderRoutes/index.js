const { getSlidersView, getSingleSliderView, DeleteSingleSliderView, postSliderView } = require("../../view/SliderViews");

 
  const SliderRoute = require("express").Router();
  
  SliderRoute.get("/", getSlidersView);
  SliderRoute.get("/:id", getSingleSliderView);
  SliderRoute.delete("/:id", DeleteSingleSliderView);
  SliderRoute.post("/", postSliderView);
  
  module.exports = SliderRoute;
  