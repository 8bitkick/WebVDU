// BBC Micro VDU driver compatible Javascript library for web


class WebVDU {
  constructor(params){
    params = params || {id: null, globals: true, scale: 1}; // defaults

    this.vdu_version = "Based on OS 1.20 (1982)";

    let elementId = params.id       || null;
    let globals   = params.globals  || true;
    let scale     = params.scale    || 1;

    this.characterSet = new Uint8Array( [0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x18,0x18,0x18,0x18,0x0,0x18,0x0,0x6c,0x6c,0x6c,0x0,0x0,0x0,0x0,0x0,0x36,0x36,0x7f,0x36,0x7f,0x36,0x36,0x0,0xc,0x3f,0x68,0x3e,0xb,0x7e,0x18,0x0,0x60,0x66,0xc,0x18,0x30,0x66,0x6,0x0,0x38,0x6c,0x6c,0x38,0x6d,0x66,0x3b,0x0,0xc,0x18,0x30,0x0,0x0,0x0,0x0,0x0,0xc,0x18,0x30,0x30,0x30,0x18,0xc,0x0,0x30,0x18,0xc,0xc,0xc,0x18,0x30,0x0,0x0,0x18,0x7e,0x3c,0x7e,0x18,0x0,0x0,0x0,0x18,0x18,0x7e,0x18,0x18,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x18,0x30,0x0,0x0,0x0,0x7e,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x18,0x0,0x0,0x6,0xc,0x18,0x30,0x60,0x0,0x0,0x3c,0x66,0x6e,0x7e,0x76,0x66,0x3c,0x0,0x18,0x38,0x18,0x18,0x18,0x18,0x7e,0x0,0x3c,0x66,0x6,0xc,0x18,0x30,0x7e,0x0,0x3c,0x66,0x6,0x1c,0x6,0x66,0x3c,0x0,0xc,0x1c,0x3c,0x6c,0x7e,0xc,0xc,0x0,0x7e,0x60,0x7c,0x6,0x6,0x66,0x3c,0x0,0x1c,0x30,0x60,0x7c,0x66,0x66,0x3c,0x0,0x7e,0x6,0xc,0x18,0x30,0x30,0x30,0x0,0x3c,0x66,0x66,0x3c,0x66,0x66,0x3c,0x0,0x3c,0x66,0x66,0x3e,0x6,0xc,0x38,0x0,0x0,0x0,0x18,0x18,0x0,0x18,0x18,0x0,0x0,0x0,0x18,0x18,0x0,0x18,0x18,0x30,0xc,0x18,0x30,0x60,0x30,0x18,0xc,0x0,0x0,0x0,0x7e,0x0,0x7e,0x0,0x0,0x0,0x30,0x18,0xc,0x6,0xc,0x18,0x30,0x0,0x3c,0x66,0xc,0x18,0x18,0x0,0x18,0x0,0x3c,0x66,0x6e,0x6a,0x6e,0x60,0x3c,0x0,0x3c,0x66,0x66,0x7e,0x66,0x66,0x66,0x0,0x7c,0x66,0x66,0x7c,0x66,0x66,0x7c,0x0,0x3c,0x66,0x60,0x60,0x60,0x66,0x3c,0x0,0x78,0x6c,0x66,0x66,0x66,0x6c,0x78,0x0,0x7e,0x60,0x60,0x7c,0x60,0x60,0x7e,0x0,0x7e,0x60,0x60,0x7c,0x60,0x60,0x60,0x0,0x3c,0x66,0x60,0x6e,0x66,0x66,0x3c,0x0,0x66,0x66,0x66,0x7e,0x66,0x66,0x66,0x0,0x7e,0x18,0x18,0x18,0x18,0x18,0x7e,0x0,0x3e,0xc,0xc,0xc,0xc,0x6c,0x38,0x0,0x66,0x6c,0x78,0x70,0x78,0x6c,0x66,0x0,0x60,0x60,0x60,0x60,0x60,0x60,0x7e,0x0,0x63,0x77,0x7f,0x6b,0x6b,0x63,0x63,0x0,0x66,0x66,0x76,0x7e,0x6e,0x66,0x66,0x0,0x3c,0x66,0x66,0x66,0x66,0x66,0x3c,0x0,0x7c,0x66,0x66,0x7c,0x60,0x60,0x60,0x0,0x3c,0x66,0x66,0x66,0x6a,0x6c,0x36,0x0,0x7c,0x66,0x66,0x7c,0x6c,0x66,0x66,0x0,0x3c,0x66,0x60,0x3c,0x6,0x66,0x3c,0x0,0x7e,0x18,0x18,0x18,0x18,0x18,0x18,0x0,0x66,0x66,0x66,0x66,0x66,0x66,0x3c,0x0,0x66,0x66,0x66,0x66,0x66,0x3c,0x18,0x0,0x63,0x63,0x6b,0x6b,0x7f,0x77,0x63,0x0,0x66,0x66,0x3c,0x18,0x3c,0x66,0x66,0x0,0x66,0x66,0x66,0x3c,0x18,0x18,0x18,0x0,0x7e,0x6,0xc,0x18,0x30,0x60,0x7e,0x0,0x7c,0x60,0x60,0x60,0x60,0x60,0x7c,0x0,0x0,0x60,0x30,0x18,0xc,0x6,0x0,0x0,0x3e,0x6,0x6,0x6,0x6,0x6,0x3e,0x0,0x18,0x3c,0x66,0x42,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0xff,0x1c,0x36,0x30,0x7c,0x30,0x30,0x7e,0x0,0x0,0x0,0x3c,0x6,0x3e,0x66,0x3e,0x0,0x60,0x60,0x7c,0x66,0x66,0x66,0x7c,0x0,0x0,0x0,0x3c,0x66,0x60,0x66,0x3c,0x0,0x6,0x6,0x3e,0x66,0x66,0x66,0x3e,0x0,0x0,0x0,0x3c,0x66,0x7e,0x60,0x3c,0x0,0x1c,0x30,0x30,0x7c,0x30,0x30,0x30,0x0,0x0,0x0,0x3e,0x66,0x66,0x3e,0x6,0x3c,0x60,0x60,0x7c,0x66,0x66,0x66,0x66,0x0,0x18,0x0,0x38,0x18,0x18,0x18,0x3c,0x0,0x18,0x0,0x38,0x18,0x18,0x18,0x18,0x70,0x60,0x60,0x66,0x6c,0x78,0x6c,0x66,0x0,0x38,0x18,0x18,0x18,0x18,0x18,0x3c,0x0,0x0,0x0,0x36,0x7f,0x6b,0x6b,0x63,0x0,0x0,0x0,0x7c,0x66,0x66,0x66,0x66,0x0,0x0,0x0,0x3c,0x66,0x66,0x66,0x3c,0x0,0x0,0x0,0x7c,0x66,0x66,0x7c,0x60,0x60,0x0,0x0,0x3e,0x66,0x66,0x3e,0x6,0x7,0x0,0x0,0x6c,0x76,0x60,0x60,0x60,0x0,0x0,0x0,0x3e,0x60,0x3c,0x6,0x7c,0x0,0x30,0x30,0x7c,0x30,0x30,0x30,0x1c,0x0,0x0,0x0,0x66,0x66,0x66,0x66,0x3e,0x0,0x0,0x0,0x66,0x66,0x66,0x3c,0x18,0x0,0x0,0x0,0x63,0x6b,0x6b,0x7f,0x36,0x0,0x0,0x0,0x66,0x3c,0x18,0x3c,0x66,0x0,0x0,0x0,0x66,0x66,0x66,0x3e,0x6,0x3c,0x0,0x0,0x7e,0xc,0x18,0x30,0x7e,0x0,0xc,0x18,0x18,0x70,0x18,0x18,0xc,0x0,0x18,0x18,0x18,0x0,0x18,0x18,0x18,0x0,0x30,0x18,0x18,0xe,0x18,0x18,0x30,0x0,0x31,0x6b,0x46,0x0,0x0,0x0,0x0,0x0,0xff,0xff,0xff,0xff,0xff,0xff,0xff]);

    this.graphicsCursor     = new Uint16Array(2);
    this.graphicsCursorPtr  = 0;
    this.textCursor         = [0,0];
    this.graphicsForeground = 0xffffffff;
    this.textForeground     = 0xffffffff;
    this.textBackground     = 0xff000000;
    this.paletteLUT         = new Uint32Array(256);
    this.currentMode        = 1;
    this.modes              = [
      {
        mode:     0,
        width:    640,
        height:   256,
        palette:  [0xFF000000,0xFFFFFFFF]
      },
      {
        mode:     1,
        width:    320,
        height:   256,
        palette:  [0xFF000000,0xFF0000FF,0xFF00FFFF,0xFFFFFFFF]
      },
      {
        mode:     2,
        width:    160,
        height:   256,
        palette:  [0xFF000000,0xFF0000FF,0xFF00FF00,0xFF00FFFF,0xFFFF0000,0xFFFF00FF,0xFFFFFF00,0xFFFFFFFF]
      },
      {
        mode:     21,
        width:    640,
        height:   512,
        palette:  [0xFF000000,0xFF0000FF,0xFF00FF00,0xFF00FFFF,0xFFFF0000,0xFFFF00FF,0xFFFFFF00,0xFFFFFFFF]
      },
      {
        mode:     100,
        width:    1280,
        height:   1024,
        palette:  [0xFF000000,0xFF0000FF,0xFF00FF00,0xFF00FFFF,0xFFFF0000,0xFFFF00FF,0xFFFFFF00,0xFFFFFFFF]
      }
    ];

    this._addCanvas(elementId,scale);
    this._setMode(this.currentMode);
    this._startMessage();

    if (globals) {this._globals()}

    this.animationCallback = function(){};
    window.requestAnimationFrame(this._updateFrame.bind(this));
  }

  _globals() { // I know it's wrong, but it feels so right
    window.PRINT = this.print.bind(this);
    window.PRINTTAB = this.printtab.bind(this);
    window.PLOT = this.plot.bind(this);
    window.DRAW = this.draw.bind(this);
    window.MOVE = this.move.bind(this);
    window.MODE = this.mode.bind(this);
    window.RND = this.rnd.bind(this);
    window.GCOL = this.gcol.bind(this);
    window.CLS = this.cls.bind(this);
    window.COLOR = this.color.bind(this);
    //window.POINT = this.point.bind(this);
    window.ANIMATE = this.animate.bind(this);
    window.SGN = function(n){return (n>0) ? Math.floor(n) : 0};
    window.SIN = Math.sin;
    window.COS = Math.cos;
    window.SQR = Math.sqrt;
    window.ABS = Math.abs;
    window.INT = Math.floor;
  }

  _addCanvas(elementId,scale){
    this.canvas = document.createElement('canvas');
    this.canvas.id = "canvas"+Math.random();
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
    let modeSettings = this.modes.find(m => m.mode === n);
    this.currentMode = n;
    this.canvas = document.getElementById(this.canvas.id);
    let width = modeSettings.width;
    let height = modeSettings.height;
    for (let c=0; c<this.paletteLUT.length;c++){
      this.paletteLUT[c] = modeSettings.palette[c % modeSettings.palette.length];
    }
    this.textForeground = this.paletteLUT[7];
    this.textBackground = this.paletteLUT[0];
    this.canvas.width = width; // diplay buffer size
    this.canvas.height= height;
    this.mode.ratio_x = Math.log2(1280/this.canvas.width);
    this.mode.ratio_y = Math.log2(1024/this.canvas.height);
    this.frame        = this.ctx.createImageData(width,height);
    this.frame32      = new Uint32Array(this.frame.data.buffer);
    this.textCursor   = [0,0];
    this.cls();
  }

  _toScreenCoordinates(x,y){
    x = x >> this.mode.ratio_x;
    y = (1024-y) >> this.mode.ratio_y;
    return [x,y];
  }

  _pushGraphicsCursor(x,y){
    this.graphicsCursor[0] = x;
    this.graphicsCursor[1] = y;
  }

  _pixel(x,y,c){
    if (x<0 || x>=this.canvas.width || y<0 || y>=this.canvas.height) return;
    let offset = x+y*this.canvas.width;
    this.frame32[offset]  = c;
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

  _plotLine(x2 ,y2){
    let [x1,y1] = [this.graphicsCursor[0],this.graphicsCursor[1]];
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
    this._pushGraphicsCursor(x2,y2);
  };

  _updateFrame(){
    this.animationCallback();
    this.ctx.putImageData(this.frame, 0,0);
    window.requestAnimationFrame(this._updateFrame.bind(this));
  }

  _startMessage(){
    this.printtab(1,2,"BBC Micro VDU drivers");
    this.printtab(1,4,"JavaScript library");
    this.printtab(1,6,this.vdu_version);
    this.printtab(1,8,">"); // both BBC BASIC and JavaScript have a chevron prompt, how about that?
  }

  animate(f){
    this.animationCallback = f;
  }

  // Public methods based on BBC BASIC keywords


  print(s){
    let [tx,ty] = this.textCursor;
    for (let i = 0; i < s.length; i++) {
      this._plotChar(s[i],tx*8,ty*8)
      tx+=1;
    }
    this.textCursor = [0,ty+1];
  }

  move(x,y){
    [x,y] = this._toScreenCoordinates(x,y);
    this._pushGraphicsCursor(x,y)
  }

  cls(){
    //this._setMode(this.currentMode);
    this.textCursor = [0,0]
    for (let i=0; i<this.frame32.length;i++){
      this.frame32[i]=this.paletteLUT[0];
    }
  }

  color(c){
    this.textForeground = this.paletteLUT[c];
  }

  draw(x,y){
    [x,y] = this._toScreenCoordinates(x,y);
    this._plotLine(x,y);
  }

  rnd(max){
    return Math.ceil(Math.random()*max);
  }

  gcol(i,j){
    this.graphicsForeground = this.paletteLUT[j];
  }

  printtab(tx,ty,s){
    this.textCursor = [tx,ty];
    this.print(s);
  }

  mode(m){
    this._setMode(m);
  }

  plot(p,x,y){
    [x,y] = this._toScreenCoordinates(x,y);
    this._pushGraphicsCursor(x,y);

    switch (p){
      case 69:
      this._pixel(this.graphicsCursor[0],this.graphicsCursor[1],this.graphicsForeground)
    }
  }
}

//export default BeebVDU;
