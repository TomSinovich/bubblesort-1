describe('Split Array function', function() {
  xit('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])[0].length).toBe(2);
  });
  it('returns an array of length one if it is given an array of length one', function() {
    expect(split([1]).length).toBe(1);
  });
});

xdescribe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
  });
});
