// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    StockOutlined,
    BankOutlined,
    GoldOutlined,
    MoneyCollectOutlined,
    MonitorOutlined,
    HomeOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    StockOutlined,
    BankOutlined,
    GoldOutlined,
    MoneyCollectOutlined,
    MonitorOutlined,
    HomeOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Investment Options',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Fixed Deposit',
            type: 'item',
            url: '/fixedDeposit',
            icon: icons.BankOutlined,
            external: true,
            target: true
        },
        {
            id: 'util-color',
            title: 'Govt. Schemes',
            type: 'item',
            url: '/governmentSchemes',
            icon: icons.BgColorsOutlined,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Bonds',
            type: 'item',
            url: '/bonds',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        },
        {
            id: 'util-shadow',
            title: 'Mutual Fund',
            type: 'item',
            url: 'https://sukirtiman-finance-app-mutual-fund-uz3k3j.streamlit.app/',
            icon: icons.MoneyCollectOutlined,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Gold',
            type: 'item',
            url: 'https://sukirtiman-finance-app-gold-eit2au.streamlit.app/',
            icon: icons.GoldOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Stock Trading',
            type: 'item',
            url: 'https://sukirtiman-finance-app-stock-27jc8h.streamlit.app/',
            icon: icons.StockOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Crypto Trading',
            type: 'item',
            url: 'https://sukirtiman-finance-app-crypto-acv5pw.streamlit.app/',
            icon: icons.MonitorOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Real Estate',
            type: 'item',
            url: '/realEstate',
            icon: icons.HomeOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        }

    ]
};

export default utilities;
