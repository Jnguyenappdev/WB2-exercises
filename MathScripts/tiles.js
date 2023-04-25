// room with the dimensions lenght x width feet.
//12 1 foot x 1 tiles per box how many boxes are you going to need

var roomLenght = 10
var roomWidth = 15
var boxTiles = 12
var precentExtra = 10

var dimensionsRoom = roomLenght * roomWidth
var boxes = dimensionsRoom / boxTiles
var extraBoxes = (dimensionsRoom * (precentExtra/100)) / boxTiles + boxes

console.log(
    " For a room with " + roomLenght + " in lenght and " + roomWidth + " in width. There needs to be " + Math.ceil(boxes) + " boxes." + "To buy 10% more tiles than you actually need, you need " + Math.ceil(extraBoxes) + " boxes"
)