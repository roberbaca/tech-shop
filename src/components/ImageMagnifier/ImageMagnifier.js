import React, { useState } from 'react'

const ImageMagnifier = ( {
    src,
    width,
    height,
    magnifierHeight,
    magnifieWidth,
    zoomLevel
    }) => {
        
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [[x, y], setXY] = useState([0, 0]);

    const handleMouseEnter = (e) => {
        // update image size and turn-on magnifier
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    }

    const handleMouseLeave = (e) => {
        setShowMagnifier(false);
    }
    
    const handleMouseMove = (e) => {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();

        // calculate cursor position on the image
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;
        setXY([x, y]);
    }


  return (
    // the container
    <div style={{       
        position: "relative",
        height: height,
        width: width
    }}>      
      <img src={src} style={{ height: height, width: width }} alt={"img"} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}/>
      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,

          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
        }}
      ></div>
    </div>
  );
}

export default ImageMagnifier