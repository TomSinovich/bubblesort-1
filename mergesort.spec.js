describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])[0].length).toBe(2);
  });
  it('returns an array of length one if it is given an array of length one', function() {
    expect(split([1]).length).toBe(1);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 2], [3, 4]).length).toBe(4);
  });
  it('is able to merge two sorted arrays into one sorted array(loose val check', function() {
    expect(merge([1, 2], [3, 4]).join('')).toBe('1234');
  });
  it('returns a sorted array when one array is whatever', function() {
    expect(merge([1,2]).length).toBe(2);
  })
});
