describe('beerSong', function() {
  it("adds first verse upon number input from user", function() {
    expect(beerSong(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer.");
  });
});
