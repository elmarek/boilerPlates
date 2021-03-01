

/*
Classes
*/

class Point {
  x: number
  y: number
  static instances = 0
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}


// Inheritance:

class Point {...}

class Point3D extends Point {...}

interface Colored {...}

class Pixel extends Point implements Colored {...}



// Short fields initialisation

class Point {
  static instances = 0;
  constructor(
    public x: number,
    public y: number,
  ){}
}



// Fields which do not require initialisation

class Point {
  public someUselessValue!: number;
  ...
}