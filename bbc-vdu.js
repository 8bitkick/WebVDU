
export class BeebVDU {
  constructor(params){
    params = params || {elementId: null, globals: true, scale: 1};

    this.vdu_version = "Based on OS 1.20 (1982)";

    let elementId = params.id       || null;
    let globals   = params.globals  || false;
    let scale     = params.scale    || 1;

    this.characterSet = new Uint8Array( [0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x18,0x18,0x18,0x18,0x0,0x18,0x0,0x6c,0x6c,0x6c,0x0,0x0,0x0,0x0,0x0,0x36,0x36,0x7f,0x36,0x7f,0x36,0x36,0x0,0xc,0x3f,0x68,0x3e,0xb,0x7e,0x18,0x0,0x60,0x66,0xc,0x18,0x30,0x66,0x6,0x0,0x38,0x6c,0x6c,0x38,0x6d,0x66,0x3b,0x0,0xc,0x18,0x30,0x0,0x0,0x0,0x0,0x0,0xc,0x18,0x30,0x30,0x30,0x18,0xc,0x0,0x30,0x18,0xc,0xc,0xc,0x18,0x30,0x0,0x0,0x18,0x7e,0x3c,0x7e,0x18,0x0,0x0,0x0,0x18,0x18,0x7e,0x18,0x18,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x18,0x30,0x0,0x0,0x0,0x7e,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x18,0x0,0x0,0x6,0xc,0x18,0x30,0x60,0x0,0x0,0x3c,0x66,0x6e,0x7e,0x76,0x66,0x3c,0x0,0x18,0x38,0x18,0x18,0x18,0x18,0x7e,0x0,0x3c,0x66,0x6,0xc,0x18,0x30,0x7e,0x0,0x3c,0x66,0x6,0x1c,0x6,0x66,0x3c,0x0,0xc,0x1c,0x3c,0x6c,0x7e,0xc,0xc,0x0,0x7e,0x60,0x7c,0x6,0x6,0x66,0x3c,0x0,0x1c,0x30,0x60,0x7c,0x66,0x66,0x3c,0x0,0x7e,0x6,0xc,0x18,0x30,0x30,0x30,0x0,0x3c,0x66,0x66,0x3c,0x66,0x66,0x3c,0x0,0x3c,0x66,0x66,0x3e,0x6,0xc,0x38,0x0,0x0,0x0,0x18,0x18,0x0,0x18,0x18,0x0,0x0,0x0,0x18,0x18,0x0,0x18,0x18,0x30,0xc,0x18,0x30,0x60,0x30,0x18,0xc,0x0,0x0,0x0,0x7e,0x0,0x7e,0x0,0x0,0x0,0x30,0x18,0xc,0x6,0xc,0x18,0x30,0x0,0x3c,0x66,0xc,0x18,0x18,0x0,0x18,0x0,0x3c,0x66,0x6e,0x6a,0x6e,0x60,0x3c,0x0,0x3c,0x66,0x66,0x7e,0x66,0x66,0x66,0x0,0x7c,0x66,0x66,0x7c,0x66,0x66,0x7c,0x0,0x3c,0x66,0x60,0x60,0x60,0x66,0x3c,0x0,0x78,0x6c,0x66,0x66,0x66,0x6c,0x78,0x0,0x7e,0x60,0x60,0x7c,0x60,0x60,0x7e,0x0,0x7e,0x60,0x60,0x7c,0x60,0x60,0x60,0x0,0x3c,0x66,0x60,0x6e,0x66,0x66,0x3c,0x0,0x66,0x66,0x66,0x7e,0x66,0x66,0x66,0x0,0x7e,0x18,0x18,0x18,0x18,0x18,0x7e,0x0,0x3e,0xc,0xc,0xc,0xc,0x6c,0x38,0x0,0x66,0x6c,0x78,0x70,0x78,0x6c,0x66,0x0,0x60,0x60,0x60,0x60,0x60,0x60,0x7e,0x0,0x63,0x77,0x7f,0x6b,0x6b,0x63,0x63,0x0,0x66,0x66,0x76,0x7e,0x6e,0x66,0x66,0x0,0x3c,0x66,0x66,0x66,0x66,0x66,0x3c,0x0,0x7c,0x66,0x66,0x7c,0x60,0x60,0x60,0x0,0x3c,0x66,0x66,0x66,0x6a,0x6c,0x36,0x0,0x7c,0x66,0x66,0x7c,0x6c,0x66,0x66,0x0,0x3c,0x66,0x60,0x3c,0x6,0x66,0x3c,0x0,0x7e,0x18,0x18,0x18,0x18,0x18,0x18,0x0,0x66,0x66,0x66,0x66,0x66,0x66,0x3c,0x0,0x66,0x66,0x66,0x66,0x66,0x3c,0x18,0x0,0x63,0x63,0x6b,0x6b,0x7f,0x77,0x63,0x0,0x66,0x66,0x3c,0x18,0x3c,0x66,0x66,0x0,0x66,0x66,0x66,0x3c,0x18,0x18,0x18,0x0,0x7e,0x6,0xc,0x18,0x30,0x60,0x7e,0x0,0x7c,0x60,0x60,0x60,0x60,0x60,0x7c,0x0,0x0,0x60,0x30,0x18,0xc,0x6,0x0,0x0,0x3e,0x6,0x6,0x6,0x6,0x6,0x3e,0x0,0x18,0x3c,0x66,0x42,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0xff,0x1c,0x36,0x30,0x7c,0x30,0x30,0x7e,0x0,0x0,0x0,0x3c,0x6,0x3e,0x66,0x3e,0x0,0x60,0x60,0x7c,0x66,0x66,0x66,0x7c,0x0,0x0,0x0,0x3c,0x66,0x60,0x66,0x3c,0x0,0x6,0x6,0x3e,0x66,0x66,0x66,0x3e,0x0,0x0,0x0,0x3c,0x66,0x7e,0x60,0x3c,0x0,0x1c,0x30,0x30,0x7c,0x30,0x30,0x30,0x0,0x0,0x0,0x3e,0x66,0x66,0x3e,0x6,0x3c,0x60,0x60,0x7c,0x66,0x66,0x66,0x66,0x0,0x18,0x0,0x38,0x18,0x18,0x18,0x3c,0x0,0x18,0x0,0x38,0x18,0x18,0x18,0x18,0x70,0x60,0x60,0x66,0x6c,0x78,0x6c,0x66,0x0,0x38,0x18,0x18,0x18,0x18,0x18,0x3c,0x0,0x0,0x0,0x36,0x7f,0x6b,0x6b,0x63,0x0,0x0,0x0,0x7c,0x66,0x66,0x66,0x66,0x0,0x0,0x0,0x3c,0x66,0x66,0x66,0x3c,0x0,0x0,0x0,0x7c,0x66,0x66,0x7c,0x60,0x60,0x0,0x0,0x3e,0x66,0x66,0x3e,0x6,0x7,0x0,0x0,0x6c,0x76,0x60,0x60,0x60,0x0,0x0,0x0,0x3e,0x60,0x3c,0x6,0x7c,0x0,0x30,0x30,0x7c,0x30,0x30,0x30,0x1c,0x0,0x0,0x0,0x66,0x66,0x66,0x66,0x3e,0x0,0x0,0x0,0x66,0x66,0x66,0x3c,0x18,0x0,0x0,0x0,0x63,0x6b,0x6b,0x7f,0x36,0x0,0x0,0x0,0x66,0x3c,0x18,0x3c,0x66,0x0,0x0,0x0,0x66,0x66,0x66,0x3e,0x6,0x3c,0x0,0x0,0x7e,0xc,0x18,0x30,0x7e,0x0,0xc,0x18,0x18,0x70,0x18,0x18,0xc,0x0,0x18,0x18,0x18,0x0,0x18,0x18,0x18,0x0,0x30,0x18,0x18,0xe,0x18,0x18,0x30,0x0,0x31,0x6b,0x46,0x0,0x0,0x0,0x0,0x0,0xff,0xff,0xff,0xff,0xff,0xff,0xff]);

    this.graphicsCursor = [[0,0],[0,0],[0,0],[0,0]];
    this.textCursor = [0,0];
    this.graphicsForeground = [255, 255, 255];
    this.textForeground = [255,255,255];
    this.textBackground = [0,0,0];

    this._addCanvas(elementId,scale);
    this._setMode(1);
    this._startMessage();

    if (globals) {this._globals()}

    this.animationCallback = function(){};
    window.requestAnimationFrame(this._updateFrame.bind(this));
  }

  _globals() {
    window.PRINT = this.print.bind(this);
    window.PRINTTAB = this.printtab.bind(this);
    window.DRAW = this.draw.bind(this);
    window.MOVE = this.move.bind(this);
    window.MODE = this._setMode.bind(this);
    window.RND = this.rnd.bind(this);
    window.GCOL = this.gcol.bind(this);
    window.CLS = this.cls.bind(this);
    window.POINT = this.point.bind(this);
    window.ANIMATION = this.animate.bind(this);
  }

  _addCanvas(elementId,scale){
    this.canvas = document.createElement('canvas');
    this.canvas.id = "canvas";
    if (elementId != null) {
      document.getElementById(elementId).appendChild(this.canvas);
    } else {
      document.body.appendChild(this.canvas);
    }
    this.canvas.style.imageRendering = "pixelated";
    this.ctx = this.canvas.getContext('2d', {alpha: false});
    this.ctx.imageSmoothingEnabled = false
    this.canvas.style.width = 640*scale;
    this.canvas.style.height = 512*scale;
  }

  _setMode(n){
    this.mode = {number:1};
    this.canvas.width = 320; // diplay buffer size
    this.canvas.height= 256;
    this.mode.ratio_x = Math.log2(1280/this.canvas.width);
    this.mode.ratio_y = Math.log2(1024/this.canvas.height);
    this.frame = this.ctx.createImageData(320,256);
  }

  _pushGraphicsCursor(x,y){
    x = x >> this.mode.ratio_x;
    y = y >> this.mode.ratio_y;
    this.graphicsCursor.unshift([x,y]);
    if (this.graphicsCursor.length>4) this.graphicsCursor.pop();
  }

  _pixel(x,y,c){
    let offset = (x+y*this.canvas.width)*4
    this.frame.data[offset]   = c[0];
    this.frame.data[offset+1] = c[1];
    this.frame.data[offset+2] = c[2];
    this.frame.data[offset+3] = 0xff; // alpha
  }

  _plotChar(c,ox,oy){
    let charPointer = (c.charCodeAt(0)-32)*8;
    for (let y=0;y<8;y++){
      let byte = this.characterSet[charPointer+y];
      for (let x=0; x<8; x++){
        if (byte & 1 == 1) {
          this._pixel(ox+8-x,oy+y,this.textForeground);
        } else {
          this._pixel(ox+8-x,oy+y,this.textBackground);
        }
        byte >>= 1;
      }
    }
  }

  _plotLine(){
    let [x2,y2] = this.graphicsCursor[0];
    let [x1,y1] = this.graphicsCursor[1];
    x1 |= 0; y1 |= 0; x2 |= 0; y2 |= 0;
    let dx = x2 - x1, dy = y2 - y1;
    let sx = (dx > 0) - (dx < 0), sy = (dy > 0) - (dy < 0);
    dx *= sx; dy *= sy;
    this._pixel(x1, y1, this.graphicsForeground);
    if( !(dx || dy) )return;
    let d = 0, x = x1, y = y1, v;
    if(dy < dx)
    for(v = 0 | (dy << 15) / dx * sy; x ^ x2; x += sx, d &= 32767)
    this._pixel(x, y += (d += v) >> 15, this.graphicsForeground);
    else
    for(v = 0 | (dx << 15) / dy * sx; y ^ y2; y += sy, d &= 32767)
    this._pixel(x += (d += v) >> 15, y, this.graphicsForeground);
  };

  _updateFrame(){
    this.animationCallback();
    this.ctx.putImageData(this.frame, 0,0);
    window.requestAnimationFrame(this._updateFrame.bind(this));
  }

  _startMessage(){
    this.printtab(1,2,"BBC Micro VDU");
    this.printtab(1,4,"JavaScript library");
    this.printtab(1,6,this.vdu_version);
    this.printtab(1,8,">"); // both BBC BASIC and JavaScript have a chevron prompt, how about that?
  }

  animate(f){
    this.animationCallback = f;
  }

  // Public methods
  print(s){
    let [tx,ty] = this.textCursor;
    for (let i = 0; i < s.length; i++) {
      this._plotChar(s[i],tx*8,ty*8)
      tx+=1;
    }
    //this.textCursor = [0,ty+1];
  }

  move(x,y){
    this._pushGraphicsCursor(x,y)
  }

  cls(){
    this.textCursor = [0,0]
    this.ctx.fillStyle = this.textBackground;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.textForeground;
  }

  draw(x,y){
    this._pushGraphicsCursor(x,y);
    this._plotLine();
  }

  rnd(max){
    return Math.ceil(Math.random()*max);
  }

  gcol(i,j){
    let red   = (j & 1) ? 255 : 0;
    let green = (j & 2) ? 255 : 0;
    let blue  = (j & 4) ? 255 : 0;
    this.graphicsForeground = [ red, green, blue];
  }

  printtab(tx,ty,s){
    this.textCursor = [tx,ty];
    this.print(s);
  }

  mode(m){
    this._setMode(m);
  }

  point(x,y){
    this._pushGraphicsCursor(x,y);
    this._pixel(this.graphicsCursor[0][0],this.graphicsCursor[0][1],this.graphicsForeground)
  }
}

export default BeebVDU;
