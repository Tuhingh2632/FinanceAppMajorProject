// assets
import { DashboardOutlined,AccountBookOutlined} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    AccountBookOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Menu Bar',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
