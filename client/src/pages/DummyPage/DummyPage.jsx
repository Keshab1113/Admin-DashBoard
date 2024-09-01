import React, { useState, useEffect, useRef } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Helmet } from "react-helmet";


const DummyPage = () => {
    const lightRef = useRef(null);
    const gridRef = useRef(null);
    

    useEffect(() => {
        const light = lightRef.current;
        const grid = gridRef.current;

        const handleMouseMove = (e) => {
            if (light) {
                light.style.left = `${e.clientX}px`;
                light.style.top = `${e.clientY}px`;
            }
        };

        if (grid) {
            grid.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (grid) {
                grid.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    const [layout, setLayout] = useState([
        { i: 'a', x: 0, y: 0, w: 2, h: 8 },
        { i: 'b', x: 2, y: 0, w: 4, h: 2 },
        { i: 'c', x: 6, y: 0, w: 2, h: 4 },
        { i: 'd', x: 8, y: 0, w: 2, h: 6 },
        { i: 'e', x: 4, y: 0, w: 4, h: 2 },
        { i: 'f', x: 10, y: 0, w: 2, h: 9 },
    ]);
  return (
      <div className=' mt-[10vh] min-h-screen dark:bg-slate-800 dark:text-white'>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Dummy Page</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <h1 className=' text-4xl font-semibold p-4'>Hii This is a Dummy Page</h1>
          <h2 className=' p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores reprehenderit officia deleniti, fuga quae minus dignissimos sapiente magnam quam sint nam, deserunt quo dolore sequi! Explicabo eaque cumque adipisci minima.
          </h2>
          <div className=' p-6 w-screen overflow-hidden'>
              <h1>Dummy Page with React Grid Layout</h1>
              <GridLayout className=" bg-[#fff] dark:bg-slate-800 border border-[#ddd] mb-[15px]" layout={layout} cols={12} rowHeight={30} width={1200}>
                  <div key="a" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightblue' }}>A</div>
                  <div key="b" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightgreen' }}>B</div>
                  <div key="c" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightpink' }}>C</div>
                  <div key="d" className='border border-[#2b0eed]' style={{ backgroundColor: 'violet' }}>D</div>
                  <div key="e" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightgray' }}>E</div>
                  <div key="f" className='border border-[#2b0eed]' style={{ backgroundColor: 'purple' }}>F</div>
              </GridLayout>
          </div>
          <div className=' h-screen overflow-hidden'>
              <div className='containerc'>
                  <header id='hex-gridc' ref={gridRef}>
                      <div className='lightc' ref={lightRef}></div>
                      <div className='gridc'></div>
                  </header>
              </div>
          </div>
    </div>
  )
}

export default DummyPage
