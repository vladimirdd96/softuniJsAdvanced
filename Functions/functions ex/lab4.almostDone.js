let timeToWalk = (s, footprint, speed) => {
    let distance = s * footprint;
    console.log('distance', distance);
    let time = distance / speed;
    console.log('time', time);
    return time;
};
console.log(timeToWalk(4000, 0.60, 5));
