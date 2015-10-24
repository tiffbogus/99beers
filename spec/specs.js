describe('beerSong', function() {
  it("adds first verse upon number input from user", function() {
    expect(beerSong(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer.");
  });

  // it("adds second verse, lessening the input integer by one", function() {
  //   expect(beerSong(99)).to.equal("Take one down and pass it around, 98 bottles of beer on the wall.");
  // });
});
