import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    username: '',
  },
  reducers: {
    updateUser: (state, action) => {
      state.uid = action.payload.uid
      state.username = action.payload.username
    },
  }
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer
