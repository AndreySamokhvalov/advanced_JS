
const albums = [
    { title: "summer", artist: "Ivan", year: 1991 },
    { title: "winter", artist: "Olga", year: 1995 },
    { title: "autumn", artist: "Petr", year: 1997 },
  ]

albums.push({title: "spring", artist: "Andy", year: 1993})
  
  const musicCollection = {
    albums,
    *[Symbol.iterator]() {
      for (const el of albums) {
        yield el;
      }
    }
  }
  
  for (const el of albums) {
    console.log(`${el.title} - ${el.artist} (${el.year})`);
  }