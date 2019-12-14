import p5 from 'p5';

const container = document.getElementById('game');

if (container) {

  const tile_size = 32;

  const map = createMap(100, 100);
  
   new p5((g: p5) => {
    
    g.setup = () => {
      g.createCanvas(800, 600);
    }
    
    g.draw = () => {
      
      for(const [x, row] of map.entries()) {

        for (const [y, row] of map.entries()) {

          // TODO: set color based on cell - maybe even texture
          g.fill('green');


          g.rect(x * tile_size, y * tile_size, tile_size, tile_size);

        }

      }

    }
    
  }, container);
  
}


function createMap(x: number, y: number): number[][] {
  const map = [];
  for (let X = 0; X < x; X++) {
    const row = [];
    for (let Y = 0; Y < y; Y++) {
      row.push(0);
    }
    map.push(row);
  }
  return map;
}