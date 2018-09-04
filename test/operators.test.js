const {
  convertToNumber,
  convertToNegativeNumber,
  invertBoolean,
  convertToBoolean,
  deleteStrings,
  deleteYear,
  isBetween,
  evens,
  averageOfStrings,
  footballScores
} = require('../src/operators');

test('convertToNumber - 1', () => {
  const result = convertToNumber( '7' );

  expect( result ).toEqual( 7 );
});

test('convertToNumber - 2', () => {
  const result = convertToNumber( '-11' );

  expect( result ).toEqual( -11 );
});

test('convertToNegativeNumber - 1', () => {
  const result = convertToNegativeNumber( '3' );

  expect( result ).toEqual( -3 );
});

test('convertToNegativeNumber - 2', () => {
  const result = convertToNegativeNumber( '-15' );

  expect( result ).toEqual( -15 );
});

test('invertBoolean - 1', () => {
  const result = invertBoolean( true );

  expect( result ).toEqual( false );
});

test('invertBoolean - 2', () => {
  const result = invertBoolean( false );

  expect( result ).toEqual( true );
});

test('invertBoolean - 3', () => {
  const result = invertBoolean( 'hello' );

  expect( result ).toEqual( 'hello' );
});

test('convertToBoolean - 1', () => {
  const result = convertToBoolean( [null, undefined, 27, 'red', NaN] );

  expect( result ).toEqual( [false, false, true, true, false] );
});

test('convertToBoolean - 2', () => {
  const result = convertToBoolean( ['hello', 0, -1, ''] );

  expect( result ).toEqual( [true, false, true, false] );
});

test('deleteStrings - 1', () => {
  const result = deleteStrings( [11, '12', 0, '0', 35, 'blue'] );

  expect( result ).toEqual( [11, undefined, 0, undefined, 35, undefined] );
});

test('deleteStrings - 2', () => {
  const result = deleteStrings( [3, 'green', -5, 'orange'] );

  expect( result ).toEqual( [3, undefined, -5, undefined] );
});

test('deleteYear - 1', () => {
  const result = deleteYear( [
    { make: 'Ford', model: 'Fiesta', year: 1991 },
    { make: 'tesla', model: 'Roadster', year: 2020 },
    { make: 'Reliant', model: 'Robin', year: 1973 },
    { make: 'toyota', model: 'prius', year: 2011 }
  ] );

  expect( result ).toEqual( [
    { make: 'Ford', model: 'Fiesta' },
    { make: 'tesla', model: 'Roadster', year: 2020 },
    { make: 'Reliant', model: 'Robin' },
    { make: 'toyota', model: 'prius', year: 2011 }
  ] );
});

test('isBetween - 1', () => {
  const result = isBetween( 27, 20, 40 );

  expect( result ).toEqual( true );
});

test('isBetween - 2', () => {
  const result = isBetween( 10, 10, 15 );

  expect( result ).toEqual( true );
});

test('isBetween - 3', () => {
  const result = isBetween( 7, 2, 7 );

  expect( result ).toEqual( false );
});

test('isBetween - 4', () => {
  const result = isBetween( 35, 10, 20 );

  expect( result ).toEqual( false );
});

test('Evens - 1', () => {
  const result = evens( 6, 22, 44, 8 );

  expect( result ).toEqual( true );
});

test('Evens - 2', () => {
  const result = evens( 10, 14, 3, 20 );

  expect( result ).toEqual( false );
});

test('Evens - 3', () => {
  const result = evens( 3, 7, 15, 21 );

  expect( result ).toEqual( false );
});

test('averageOfStrings - 1', () => {
  const result = averageOfStrings( [12, '6', 0, '8', '1'] );

  expect( result ).toEqual( 5 );
});

test('averageOfStrings - 2', () => {
  const result = averageOfStrings( ['5', 31, 7, '2', '1', -1, '0'] );

  expect( result ).toEqual( 2 );
});

test('footballScores - 1', () => {
  const result = footballScores( [
    {home: 1, away: 2},
    {home: 4, away: 5},
    {home: 3, away: 1},
    {home: 2, away: 2},
  ]);

  expect( result ).toEqual( ['away', 'away', 'home', 'draw'] );
});

test('footballScores - 2', () => {
  const result = footballScores( [
    {home: 2, away: 1},
    {home: 4, away: 5},
    {home: 1, away: 1},
    {home: 2, away: 3},
  ]);

  expect( result ).toEqual( ['home', 'away', 'draw', 'away'] );
});
