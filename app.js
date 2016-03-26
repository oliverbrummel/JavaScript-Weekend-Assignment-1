var claim1 = {
	patientName: 'John Doe',
	visitType: 'Specialist',
	visitCost: 1100,
};

var claim2 = {
	patientName: 'Jane Doe',
	visitType: 'Optical',
	visitCost: 100,
};

var claim3 = {
	patientName: 'Joe Johnson',
	visitType: 'Emergency',
	visitCost: 31000,
};

var claim4 = {
	patientName: 'Sharon Smith',
	visitType: 'Emergency',
	visitCost: 1300,
};

var claim5 = {
	patientName: 'Steve Wright',
	visitType: 'Primary Care',
	visitCost: 770,
};

var initialList = [claim1, claim2, claim3, claim4, claim5];

var totalPayedOut = 0;

function Claim(name, type, cost) {
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
	}

//uses constructor function to create 5 more objects
var claim6 = new Claim('Oliver Brummel', 'Primary Care', 950);
var claim7 = new Claim('Alex Detrick', 'Specialist', 1250);
var claim8 = new Claim('Nathan Bruemmer', 'Emergency', 5000);
var claim9 = new Claim('Killian Coate', 'Optical', 400);
var claim10 = new Claim('Joe Widing', 'Primary Care', 720);

//adds the new objects to the initialList array
initialList.push(claim6);
initialList.push(claim7);
initialList.push(claim8);
initialList.push(claim9);
initialList.push(claim10);

// console.log(initialList);

//function to determine percent covered
var percentCovered = 0.0;
function insuranceCoverage(array) {
	if (array.visitType == 'Optical') {
		percentCovered = 0.0;
	} else if (array.visitType == 'Specialist') {
	 	percentCovered = 0.1;
	} else if (array.visitType == 'Emergency') {
		percentCovered = 1.0;
	} else if (array.visitType == 'Primary Care') {
	 	percentCovered = 0.5;
	}
	return percentCovered;
}

function amountCovered(array){
	paidInDollars = (insuranceCoverage(array) * array.visitCost);
	return paidInDollars;
}
//check iterator if need be
for (it = 0; it < initialList.length; it++) {
	console.log('Paid out $' + (amountCovered(initialList[it])).toLocaleString() + ' for ' + initialList[it].patientName);
	totalPayedOut += amountCovered(initialList[it]);
}

console.log('Entire amount paid out: $' + totalPayedOut.toLocaleString());

//EVERYTHING WORKS ABOVE THIS COMMENT!
