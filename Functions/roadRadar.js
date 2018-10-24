function roadRadar(input){
    let currentSpeed = +input[0] || 0;
    let roadType = input[1] || '';

    let speedLimit = checkLimit(roadType) || 0;

    return checkSpeed(speedLimit,currentSpeed);

    function checkSpeed(speedLimit,currentSpeed) {
        let kmSpeeding = currentSpeed - speedLimit;

        switch (true) {
            case kmSpeeding <= 0:
                return '';
            case kmSpeeding <= 20:
                return 'speeding';
            case kmSpeeding <= 40:
                return 'excessive speeding';
            case kmSpeeding > 40:
                return 'reckless driving';
        }
    }

    function checkLimit(roadType){
        const motorwayLimit = 130;
        const interstateLimit = 90;
        const cityLimit = 50;
        const residentialLimit = 20;

        switch (roadType) {
            case 'motorway':
                return motorwayLimit;
            case 'interstate':
                return interstateLimit;
            case 'city':
                return cityLimit;
            case 'residential':
                return residentialLimit;
        }
    }
}


function test(){
    let arr = ['Ivan'];
    let masiv = ['Pesho'];

    arr.concat(masiv);

    console.log(arr);
    console.log(masiv);
}

test();