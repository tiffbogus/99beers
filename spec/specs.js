describe('beerSong', function() {
  it("adds first verse upon number input from user", function() {
    expect(beerSong(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.");
  });

  it("changes verse when one bottle of beer is left", function() {
    expect(beerSong(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.");
  });

  it("changes verse again when no beer is left", function() {
    expect(beerSong(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});
