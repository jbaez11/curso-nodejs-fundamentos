const sharp = require('sharp');

sharp('persona3.jpg')
.resize(80)
.toFile('resized.jpg')