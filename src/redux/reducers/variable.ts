import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dictionary} from "../../helpers/enumuration/dictionary";
import i18n from "i18next";
import {InitialStateProps} from "../../interface/redux/variable.interface";
import {http_forex} from "../../config/api.ts";

export const getConvert = createAsyncThunk('variables/getConvert', async (data: any, {rejectWithValue}) => {
    try {
        const response = await http_forex.get('/convert', {
            params: data
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getMulti = createAsyncThunk('variables/getMulti', async (data: any, {rejectWithValue}) => {
    try {
        const response = await http_forex.get('/fetch-multi', {
            params: data
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const initialState: InitialStateProps = {
    lang: localStorage.getItem('i18nextLng') || 'ru',
    loading: false,
    nbu: [
        {k: 'USD'},
        {k: 'RUB'},
        {k: 'EUR'},
        {k: 'UZS'},
        {k: 'CNY'},
        {k: 'JPY'},
        {k: 'KZT'},
        {k: 'TJS'}
    ],
    convert: null,
    convertList: null
}

const reducers = {
    setLang: (state: InitialStateProps, action: PayloadAction<number>) => {
        const langIndex = action.payload
        state.lang = Dictionary[langIndex]
        i18n.changeLanguage(Dictionary[langIndex])
    }
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder.addCase(getConvert.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getConvert.fulfilled, (state: InitialStateProps, action) => {
            state.convert = action.payload
            state.loading = false
        })
        builder.addCase(getConvert.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getMulti.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getMulti.fulfilled, (state: InitialStateProps, action) => {
            state.convertList = action.payload
            state.loading = false
        })
        builder.addCase(getMulti.rejected, (state: InitialStateProps) => {
            state.loading = false
        })
    }
})

export const {
    setLang
} = variableSlice.actions;
export default variableSlice.reducer