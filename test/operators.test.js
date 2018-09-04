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

test.only('convertToNumber - 1', () => {
  const result = convertToNumber( '7' );

  expect( result ).toEqual( 7 );
});

test.only('convertToNumber - 2', () => {
  const result = convertToNumber( '-11' );

  expect( result ).toEqual( -11 );
});

test.only('convertToNegativeNumber - 1', () => {
  const result = convertToNegativeNumber( '3' );

  expect( result ).toEqual( -3 );
});

test.only('convertToNegativeNumber - 2', () => {
  const result = convertToNegativeNumber( '-15' );

  expect( result ).toEqual( -15 );
});

test.only('invertBoolean - 1', () => {
  const result = invertBoolean( true );

  expect( result ).toEqual( false );
});

test.only('invertBoolean - 2', () => {
  const result = invertBoolean( false );

  expect( result ).toEqual( true );
});

test.only('invertBoolean - 3', () => {
  const result = invertBoolean( 'hello' );

  expect( result ).toEqual( 'hello' );
});

test.only('convertToBoolean - 1', () => {
  const result = convertToBoolean( [null, undefined, 27, 'red', NaN] );

  expect( result ).toEqual( [false, false, true, true, false] );
});

test.only('convertToBoolean - 2', () => {
  const result = convertToBoolean( ['hello', 0, -1, ''] );

  expect( result ).toEqual( [true, false, true, false] );
});

test.only('deleteStrings - 1', () => {
  const result = deleteStrings( [11, '12', 0, '0', 35, 'blue'] );

  expect( result ).toEqual( [11, undefined, 0, undefined, 35, undefined] );
});

test.only('deleteStrings - 2', () => {
  const result = deleteStrings( [3, 'green', -5, 'orange'] );

  expect( result ).toEqual( [3, undefined, -5, undefined] );
});

test.only('deleteYear - 1', () => {
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

test.only('isBetween - 1', () => {
  const result = isBetween( 27, 20, 40 );

  expect( result ).toEqual( true );
});

test.only('isBetween - 2', () => {
  const result = isBetween( 10, 10, 15 );

  expect( result ).toEqual( true );
});

test.only('isBetween - 3', () => {
  const result = isBetween( 7, 2, 7 );

  expect( result ).toEqual( false );
});

test.only('isBetween - 4', () => {
  const result = isBetween( 35, 10, 20 );

  expect( result ).toEqual( false );
});

test.only('Evens - 1', () => {
  const result = evens( 6, 22, 44, 8 );

  expect( result ).toEqual( true );
});

test.only('Evens - 2', () => {
  const result = evens( 10, 14, 3, 20 );

  expect( result ).toEqual( false );
});

test.only('Evens - 3', () => {
  const result = evens( 3, 7, 15, 21 );

  expect( result ).toEqual( false );
});

test.only('averageOfStrings - 1', () => {
  const result = averageOfStrings( [12, '6', 0, '8', '1'] );

  expect( result ).toEqual( 5 );
});

test.only('averageOfStrings - 2', () => {
  const result = averageOfStrings( ['5', 31, 7, '2', '1', -1, '0'] );

  expect( result ).toEqual( 2 );
});

test.only('footballScores - 1', () => {
  const result = footballScores( [
    {home: 1, away: 2},
    {home: 4, away: 5},
    {home: 3, away: 1},
    {home: 2, away: 2},
  ]);

  expect( result ).toEqual( ['away', 'away', 'home', 'draw'] );
});

test.only('footballScores - 2', () => {
  const result = footballScores( [
    {home: 2, away: 1},
    {home: 4, away: 5},
    {home: 1, away: 1},
    {home: 2, away: 3},
  ]);

  expect( result ).toEqual( ['home', 'away', 'draw', 'away'] );
});
