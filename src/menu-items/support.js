// assets
import { ChromeOutlined, QuestionOutlined,ContactsOutlined  } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined,
    ContactsOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Calculators',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'SIP Calculator',
            type: 'item',
            url: '/sipCalculator',
            icon: icons.ChromeOutlined,
            target: true
        },
        {
            id: 'documentation',
            title: 'FD Calculator',
            type: 'item',
            url: '/fdCalculator',
            icon: icons.ContactsOutlined,
            external: true,
            target: true
        }
    ]
};

export default support;
