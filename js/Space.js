class Space {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter / 2;
  }

  drawSVGSpace() {
    constSVGSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svgSpace.setAttributesNS(null, "id", this.id);
    svgspace.setAttributesNs(null, "cx", (this.x * this.diameter) + this.radius);
    svgSpace.setAttributesNS(null, "cy", (this.y * this.diameter) + this.radius);
    svgSpace.setAttributesNS(null, "r", this.radius - 8);
    svgSpace.setAttributesNS(null, "fill", "black");
    svgSpace.setAttributesNS(null, "stroke", "none");
    document.getElementById("mask").appendChild(svgSpace);
  }
}
