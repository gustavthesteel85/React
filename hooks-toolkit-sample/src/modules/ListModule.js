import { createSlice } from "@reduxjs/toolkit";

// createSliceでactionとreducerを同時に作成
const ListModule = createSlice({
    name: "list",
    initialState: [],
    reducers: {
        addList: (state, action) => [...state, action.payload],
        deleteList: (state, action) => state.filter(el => el.id !== action.payload),
    }
});

export default ListModule;