import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
  loading: false,
  data: [],
  error: null,
  singleUser: {},
}

export const fetchUsers = createAsyncThunk("counter/fetchUsers", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
  } catch (error) {
    throw Error("Failed to fetch users")
  }
})
export const fetchSingleUser = createAsyncThunk(
  "counter/fetchSingleUser",
  async (id) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
      )
      const data = await response.json()
      return data
    } catch (error) {
      throw Error("Failed to fetch users")
    }
  }
)

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      }),
      builder
        .addCase(fetchSingleUser.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchSingleUser.fulfilled, (state, action) => {
          state.loading = false
          state.singleUser = action.payload
        })
        .addCase(fetchSingleUser.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        })
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
