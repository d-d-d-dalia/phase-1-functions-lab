// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let d
    if (distance > 42) {
        d = distance - 42

    }
    else if (distance < 42) {
        d = 42 - distance
    }
    return d
}

function distanceFromHqInFeet(d){
    return distanceFromHqInBlocks(d) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, destination) {
    let dif = distanceTravelledInFeet(start, destination)
    let f
    if (dif <= 400){
        f = 0
    }
    else if (dif > 400 && dif <= 2000) {
        let billable = dif - 400
        f = billable * .02
    }
    else if (dif > 2000 && dif <= 2500) {
        f = 25
    }
    else if (dif > 2500){
        f = 'cannot travel that far'
    }
    return f
}   