import ElevatorState from '../src/kakaoElevator/model/ElevatorState';
import assert from 'assert';

describe('ElevatorState Test', () => {
	const lowerFloor = 1;
	const topFloor = 5;
	const elevatorCount = 3;

	before(function() {
		ElevatorState.initialize(lowerFloor, topFloor, elevatorCount);
	});

	it('ElevatorState initialize Test', () => {
		assert.equal(elevatorCount, ElevatorState.getElevatorList().length);
	});

	it('LowerFloor & TopFloor Test', () => {
		const elevatorList = ElevatorState.getElevatorList();
		assert.equal(elevatorList[0]._lowestFloor, lowerFloor);
		assert.equal(elevatorList[0]._topFloor, topFloor);
	});

});

// describe('ElevatorController Test', () => {
// 	it('ElevatorController initialize Test', () => {
//
// 	});
// });
//
// describe('operation Test', () => {
// 	it('button op test', () => {
//
// 	});
//
// 	it('init op test', () => {
//
// 	});
// });