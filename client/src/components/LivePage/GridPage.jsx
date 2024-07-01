// GridPage.js
import React, { useContext } from 'react';
import GridLayout from 'react-grid-layout';
import { GridContext } from './GridContext';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Box1Chart from '../AnalyticalComponents/Box1Chart';
import { LayoutContext } from './LayoutContext';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


const ResponsiveGridLayout = WidthProvider(Responsive);

const GridPage = () => {
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
                        <div className=' h-[20%] mb-2'>
                        <h1 className=' text-2xl font-bold text-center dark:text-white'>{item.data.name}</h1>
                            <h2 className=' text-xl font-semibold dark:text-white'>Parameter: {item.data.parameter}</h2>
                        </div>
                        <div className=' overflow-hidden h-[80%]  text-white mx-2'>
                            {item.data.name === 'Gauge' && <img src="https://cdn.boldbi.com/wp/blogs/gauge-widget/gauge-widget-example.webp" alt="" />}
                            {item.data.name === 'Line' && <img src="https://www.openmarket.com/docs/Content/Images/reporting-insights-user-guide/Sample-Line-Widget.png" alt="" />}
                            {item.data.name === 'Image' && <img src="https://i.ytimg.com/vi/R-ZsuhxueyI/maxresdefault.jpg" alt="" />}
                            {item.data.name === 'Clock' && <img src="https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?cs=srgb&dl=pexels-fecundap6-359989.jpg&fm=jpg" alt="" />}
                            {item.data.name === 'Double' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6NIF9A_Hsym_vHUUnqAQEuXJX3GyEQ4Wow&s" alt="" />}
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
                            {item.data.name === 'Pie' && <img src="https://images.theconversation.com/files/558560/original/file-20231109-27-4714o0.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip" alt="" />}
                            {item.data.name === 'Chart' && <Box1Chart/>}
                            {item.data.name === 'Metric' && <img src="https://www.investopedia.com/thmb/3x0sL27fLZ1TrSyEjDdkDAkwL-I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/metrics.aspfinal-40312c5e32ab4aadbb522fa7566ebe40.jpg" alt="" />}
                            {item.data.name === 'Input' && <img src="https://goglobalways.com/wp-content/uploads/2023/05/input-device.jpg" alt="" />}
                            {item.data.name === 'Indicator' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9CgqiCrnvuclX5zg3MC8FwDM4BgB1prhQQ&s" alt="" />}
                            {item.data.name === 'Histogram' && <img src="https://www.investopedia.com/thmb/ilebTtfvaQER39ue8gEkMIpP6MY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Histogram1-92513160f945482e95c1afc81cb5901e.png" alt="" />}
                            {item.data.name === 'HTML' && <img src="https://www.investopedia.com/thmb/33J47lYaGMBV4nx8vdJNtHBv3cY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/html.asp-final-86da30eff12f46f3a1394efb0b137103.png" alt="" />}
                            {item.data.name === 'Table' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsxtdx_tTAG37OFo5THFt4-vB8ii4z_rznQ&s" alt="" />}
                            {item.data.name === 'Battery' && <img src="https://images.presentationgo.com/2020/01/Battery-Fraction-Chart-PowerPoint.png" alt="" />}
                        </div>
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default GridPage;
