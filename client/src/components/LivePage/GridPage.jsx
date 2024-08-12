import React, { useContext } from 'react';
import GridLayout from 'react-grid-layout';
import { GridContext } from './GridContext';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Box1Chart from '../AnalyticalComponents/Box1Chart';
import { LayoutContext } from './LayoutContext';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Box4Chart from '../AnalyticalComponents/Box4Chart';
import Box2Chart from '../AnalyticalComponents/Box2Chart';
import Box3Chart from '../AnalyticalComponents/Box3Chart';
import DoubleBarChart from '../AnalyticalComponents/DoubleBarChart';
import TableChart from '../AnalyticalComponents/TableChart';
import HistogramChart from '../AnalyticalComponents/HistogramChart';


const ResponsiveGridLayout = WidthProvider(Responsive);

const GridPage = ({ data }) => {
    const { gridData } = useContext(GridContext);
    const { layout, setLayout } = useContext(LayoutContext);
    
    return (
        <div className='dark:bg-slate-900'>
            <ResponsiveGridLayout
                className="layout"
                layout={layout}
                onLayoutChange={(newLayout) => setLayout(newLayout)}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 6, md: 4, sm: 2, xs: 1, xxs: 1 }}
            >
                {gridData.map(item => (
                    <div className=' bg-white border-2 px-4 py-4 dark:bg-slate-800' key={item.i} data-grid={item}>
                        <div className=''>
                        <h1 className=' text-2xl font-bold text-center dark:text-white'>{item.data.name} Chart</h1>
                        </div>
                        <div className=' overflow-hidden h-[80%]  text-white mx-2'>
                            {item.data.name === 'Gauge' && <Box2Chart data={data.params} />}
                            {item.data.name === 'Line' && <Box3Chart data={data.params} />}
                            {item.data.name === 'Image' && <img src="https://i.ytimg.com/vi/R-ZsuhxueyI/maxresdefault.jpg" alt="" />}
                            {item.data.name === 'Clock' && <img src="https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?cs=srgb&dl=pexels-fecundap6-359989.jpg&fm=jpg" alt="" />}
                            {item.data.name === 'Double' && <DoubleBarChart data={data.params} />}
                            {item.data.name === 'Map' && <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[51.505, -0.09]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>}
                            {item.data.name === 'Pie' && <Box4Chart data={data.params} />}
                            {item.data.name === 'Bar' && <Box1Chart data={data.params}/>}
                            {item.data.name === 'Metric' && <img src="https://www.investopedia.com/thmb/3x0sL27fLZ1TrSyEjDdkDAkwL-I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/metrics.aspfinal-40312c5e32ab4aadbb522fa7566ebe40.jpg" alt="" />}
                            {item.data.name === 'Input' && <img src="https://goglobalways.com/wp-content/uploads/2023/05/input-device.jpg" alt="" />}
                            {item.data.name === 'Indicator' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9CgqiCrnvuclX5zg3MC8FwDM4BgB1prhQQ&s" alt="" />}
                            {item.data.name === 'Histogram' && <HistogramChart data={data.params} />}
                            {item.data.name === 'HTML' && <img src="https://www.investopedia.com/thmb/33J47lYaGMBV4nx8vdJNtHBv3cY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/html.asp-final-86da30eff12f46f3a1394efb0b137103.png" alt="" />}
                            {item.data.name === 'Table' && <TableChart data={data.params} />}
                            {item.data.name === 'Battery' && <img src="https://images.presentationgo.com/2020/01/Battery-Fraction-Chart-PowerPoint.png" alt="" />}
                        </div>
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default GridPage;
