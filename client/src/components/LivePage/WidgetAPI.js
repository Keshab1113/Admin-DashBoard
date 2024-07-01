import Battery80Icon from '@mui/icons-material/Battery80';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CodeIcon from '@mui/icons-material/Code';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PhotoIcon from '@mui/icons-material/Photo';
import InfoIcon from '@mui/icons-material/Info';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AodIcon from '@mui/icons-material/Aod';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';


const widgetType = [
    { id: 'battery', label: 'Battery', Icon: Battery80Icon, iconClass: 'text-blue-500 rotate-90' },
    { id: 'clock', label: 'Clock', Icon: AccessTimeIcon, iconClass: 'text-blue-500' },
    { id: 'table', label: 'Table', Icon: CalendarViewMonthIcon, iconClass: 'text-blue-500' },
    { id: 'double', label: 'Double', Icon: TrendingUpIcon, iconClass: 'text-blue-500' },
    { id: 'gauge', label: 'Gauge', Icon: RemoveCircleIcon, iconClass: 'text-blue-500' },
    { id: 'HTML', label: 'HTML', Icon: CodeIcon, iconClass: 'text-blue-500' },
    { id: 'Histogram', label: 'Histogram', Icon: SignalCellularAltIcon, iconClass: 'text-blue-500' },
    { id: 'Image', label: 'Image', Icon: PhotoIcon, iconClass: 'text-blue-500' },
    { id: 'Indicator', label: 'Indicator', Icon: InfoIcon, iconClass: 'text-blue-500' },
    { id: 'Line', label: 'Line', Icon: TrendingUpIcon, iconClass: 'text-blue-500' },
    { id: 'Input', label: 'Input', Icon: ConfirmationNumberIcon, iconClass: 'text-blue-500' },
    { id: 'Map', label: 'Map', Icon: LocationOnIcon, iconClass: 'text-blue-500' },
    { id: 'Metric', label: 'Metric', Icon: AodIcon, iconClass: 'text-blue-500' },
    { id: 'Pie', label: 'Pie', Icon: PieChartIcon, iconClass: 'text-blue-500' },
    { id: 'Chart', label: 'Chart', Icon: BarChartIcon, iconClass: 'text-blue-500' }
];
export default widgetType