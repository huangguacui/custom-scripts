//NDWI

var val = (B2/3000 - B4/3000) / (B2/3000 + B4/3000);

return colorBlend(val,
  [-1, -0.5, -0.2, 0, 0.2, 0.5, 1.0],
  [
    [1,0,1], 
    [1,0.5, 0], 
    [1,1, 0], 
    [0.2,1,0.5], 
    [0,0,1], 
    [0,0,0.3], 
    [0,0,0], 
  ]);
  
