import {areaBox, areaCircle, volume} from './math.mjs'

document.querySelector('#message').innerHTML=`
The area of my box is ${areaBox(4,6)} <br>
The area of my circle is ${areaCircle(8)} <br>
The volume of my rectangle is ${volume(3,4,5)}
`