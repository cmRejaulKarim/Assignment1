// Question 1: Value Detective
function describeValue(value) {

    if (!value) {
        return `${typeof (value)} | falsy`;
    } else {
        return `${typeof (value)} | truthy`;
    }
}

// Question 2: Bangladesh Weekend Machine
function getDayType(day) {

    let lowercaseDay = day.toLowerCase();

    switch (lowercaseDay) {
        case 'friday':
        case 'saturday':
            return 'Weekend';
        case 'sunday':
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            return 'Working Day';
        default:
            return 'Invalid Day';
    }
}

// Question 3: Username Gatekeeper
function validateUsername(username) {

    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}

// Question 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {

    let totalFare = 0;
    let minimumFare = 50;
    let extraDistance = distance - 2;
    let excessFare = 15;
    let waitingFare = 2;
    let nightFarePercent = .2;

    if (distance <= 0) {
        totalFare = 0;
    }
    else if (distance <= 2) {
        totalFare = minimumFare;
    } else {
        totalFare = minimumFare + extraDistance * excessFare;
    }

    if (waitingMinutes > 0) {
        totalFare += waitingMinutes * waitingFare;
    }

    if (isNight) {
        totalFare += totalFare * nightFarePercent;
    }

    return totalFare;
}

// Question 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {

    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate > 6 && requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};