# Web VDU driver (experimental)
BBC Micro VDU driver compatible library for web, using vanilla Javascript and HTML5 Canvas

## Intro
Create 8-bit graphics with a few lines of JavaScript! A quick way to prototyping retro graphics, creating documentation, and have fun porting BBC Micro Bot programs to the web.

This project is (the start...) of an implementation of the BBC Micro (1981) VDU drivers for JavaScript and HTML5 canvas.

## Get started

Include the `WebVDU` library in your web page like this:

```
  <script src="https://cdn.jsdelivr.net/gh/8bitkick/WebVDU/WebVDU.js"></script>
```


Then use the library like this:

```
    new WebVDU();
    
    MODE(2)

    for (let x=0;x<800;x++){
      GCOL(0,RND(7))
      DRAW(RND(1280),RND(1024))
    }

    PRINT("Hello world!")
  ```
  
## Disclaimer
  
This library is a barebones alpha with many VDU functions yet to be implemented...

