// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation) {
    const hqLoction = 42;
    return Math.abs(pickuplocation - hqLoction);
}

function distanceFromHqInFeet(pickupLocation){
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    return distanceInBlocks * feetPerBlock;

}

function distanceTravelledInFeet(startBlock, endBlock){
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock)
    return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock){
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    let fare = 0;

    if(distanceInFeet <= 400) {
        fare = 0;
    }else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        fare = (distanceInFeet - 400) * 0.02;
    }else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        fare = 25;
    }else {
        return 'cannot travel that far';
    }

    return fare;
}