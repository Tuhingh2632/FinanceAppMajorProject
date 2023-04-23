// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    openItem: ['dashboard'],
    openComponent: 'buttons',
    drawerOpen: false,
    openDialogBox: false,
    openRegisterDialog: false,
    componentDrawerOpen: true,
    openViewDialog: false,
    openCryptoDialog: false,
    openGoldDialog:false,
    openMutualFundDialog:false,
    openFixedDepositeDialog:false,
    openGovernmentSchemesDialog:false,
    loader: true,
    call:false,
    cp:false,
    stockId: [],
    currentUserId:'',
    loginRegisterBuffer:false

};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        activeItem(state, action) {
            state.openItem = action.payload.openItem;
        },

        activeComponent(state, action) {
            state.openComponent = action.payload.openComponent;
        },

        openDrawer(state, action) {
            state.drawerOpen = action.payload.drawerOpen;
        },

        openComponentDrawer(state, action) {
            state.componentDrawerOpen = action.payload.componentDrawerOpen;
        },
        openDialogReducer(state, action) {
            state.openDialogBox = action.payload.openDialogBox;
        },
        openRegisterDialogReducer(state, action) {
            state.openRegisterDialog = action.payload.openRegisterDialog;
        },
        openViewDialogReducer(state, action) {
            state.openViewDialog = action.payload.openViewDialog;
        },
        openCryptoDialogReducer(state, action) {
            state.openCryptoDialog = action.payload.openCryptoDialog;
        },
        openGoldDialogReducer(state,action){
            state.openGoldDialog=action.payload.openGoldDialog;
        },
        openMutualFundDialogReducer(state,action){
            state.openMutualFundDialog=action.payload.openMutualFundDialog;
        },
        openFixedDepositeDialogReducer(state,action){
            state.openFixedDepositeDialog=action.payload.openFixedDepositeDialog;
        },
        openGovernmentSchemesDialogReducer(state,action){
            state.openGovernmentSchemesDialog=action.payload.openGovernmentSchemesDialog;
        },
        refreshDataTable(state, action) {
            state.loader = action.payload.loader;
        },
        getStockIdReducer(state, action) {
            state.stockId = action.payload.stockId;
        },
        callChangeReducer(state,action){
            state.call = action.payload.call;
        },
        cpReducer(state,action){
            state.cp=action.payload.cp;
        },
        currentUidchangeReducer(state,action){
            state.currentUserId=action.payload.currentUserId;
        },
        loginRegisterBufferREducer(state,action){
            state.loginRegisterBuffer=action.payload.loginRegisterBuffer
        }

    }
});

export default menu.reducer;

export const {
    activeItem,
    activeComponent,
    openDrawer,
    openComponentDrawer,
    openDialogReducer,
    openRegisterDialogReducer,
    openViewDialogReducer,
    refreshDataTable,
    getStockIdReducer,
    openCryptoDialogReducer,
    callChangeReducer,
    cpReducer,
    openGoldDialogReducer,
    openMutualFundDialogReducer,
    openFixedDepositeDialogReducer,
    openGovernmentSchemesDialogReducer,
    currentUidchangeReducer,
    loginRegisterBufferREducer
} = menu.actions;
