import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Helmet } from "react-helmet";


const DummyPage = () => {
    const [layout, setLayout] = useState([
        { i: 'a', x: 0, y: 0, w: 2, h: 8 },
        { i: 'b', x: 2, y: 0, w: 4, h: 2 },
        { i: 'c', x: 6, y: 0, w: 2, h: 4 },
        { i: 'd', x: 8, y: 0, w: 2, h: 6 },
        { i: 'e', x: 4, y: 0, w: 4, h: 2 },
        { i: 'f', x: 10, y: 0, w: 2, h: 9 },
    ]);
  return (
      <div className=' mt-[8vh]'>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Dummy Page</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <h1>Hii This is Dummy Page</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores reprehenderit officia deleniti, fuga quae minus dignissimos sapiente magnam quam sint nam, deserunt quo dolore sequi! Explicabo eaque cumque adipisci minima.
          <div>
              <h1>Dummy Page with React Grid Layout</h1>
              <GridLayout className=" bg-[#fff] border border-[#ddd] mb-[15px]" layout={layout} cols={12} rowHeight={30} width={1200}>
                  <div key="a" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightblue' }}>A</div>
                  <div key="b" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightgreen' }}>B</div>
                  <div key="c" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightpink' }}>C</div>
                  <div key="d" className='border border-[#2b0eed]' style={{ backgroundColor: 'violet' }}>D</div>
                  <div key="e" className='border border-[#2b0eed]' style={{ backgroundColor: 'lightgray' }}>E</div>
                  <div key="f" className='border border-[#2b0eed]' style={{ backgroundColor: 'purple' }}>F</div>
              </GridLayout>
          </div>
    </div>
  )
}

export default DummyPage
