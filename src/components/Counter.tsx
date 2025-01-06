import { useCounterStore } from './Store/Store'

const Counter = () => {
    const count = useCounterStore(state=>state.count)
  return (
    <div>
 {count}       
    </div>
  )
}

export default Counter