var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var materialsLength1 = materials.map(function(material) { 
  return material.length;
});

var materialsLength2 = materials.map((material) => {
  return material.length;
});

var materialsLength3 = materials.map(material => material.length);

console.log(materialsLength1)
console.log(materialsLength2)
console.log(materialsLength3)
