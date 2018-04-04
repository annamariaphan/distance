var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var dx = p2.x-p1.x;
    var dy = p2.y-p1.y;

    return Math.sqrt(dx*dx + dy*dy);  
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //data is an array
    data.forEach(function(existingPoint){
        var dx = existingPoint.x - newPoint.x;
        var dy = existingPoint.y - newPoint.y;
        existingPoint.distance = Math.sqrt(dx*dx + dy*dy);
        // existingPoint is each item in the array
    });
    return data;  
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    }); 
    return data.slice(0,k);
    //this grabs part of the array that are k #s   
};

module.exports = exercise;
