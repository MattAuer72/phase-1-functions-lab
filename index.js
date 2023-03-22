function distanceFromHqInBlocks(block) {
if (block >= 42) {return block - 42}
else {return 42 - block}
}
//distanceFromHqInBlocks()

function distanceFromHqInFeet(block) {return distanceFromHqInBlocks(block) * 264
}  
//distanceFromHqInFeet()

function distanceTravelledInFeet(starting, ending) {
    if (starting >= ending) {return (starting - ending) * 264}
    else {return (ending - starting) * 264}
}
//distanceTravelledInFeet(50, 58)



function calculatesFarePrice(starting, ending) {
    
let distance = starting - ending
    if (distance < 0 ) { distance = ending - starting}
    else (distance = starting - ending)

    if ((distance) * 264 <= 400) {
        return 0}
    else if ((distance) * 264 > 400 && (distance) * 264 <= 2000)  {
        return (((distance)* 264) - 400) * .02}
        else if ((distance) * 264 > 2000 && (distance) * 264 <= 2500) {
        return 25}
    else if ((distance) * 264 > 2500) {
        return 'cannot travel that far'}
} 
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(58, 50)
calculatesFarePrice(34, 24)


