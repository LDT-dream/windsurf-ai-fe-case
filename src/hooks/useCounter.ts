import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '@store/index'
import { increment, decrement, incrementByAmount, reset } from '@store/slices/counterSlice'

export const useCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())
  const handleIncrementByAmount = (amount: number) => dispatch(incrementByAmount(amount))
  const handleReset = () => dispatch(reset())

  return {
    count,
    increment: handleIncrement,
    decrement: handleDecrement,
    incrementByAmount: handleIncrementByAmount,
    reset: handleReset,
  }
}
