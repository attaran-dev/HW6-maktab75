function starRating(votersArr) {
    let points =0;
    let voters = 0;
    let stars = '';
    for (const voter of votersArr) {
        voters+=voter;
    }
    for (const point of votersArr) {
        points+=point*(votersArr.indexOf(point)+1)
    }
    for (let i = 1; i <= Math.round(points/voters); i++){
        stars+= '*';
    }
    return [(points/voters).toFixed(2)] + ' ' + stars;
}

// console.log(starRating([16, 17, 23, 40, 45]));