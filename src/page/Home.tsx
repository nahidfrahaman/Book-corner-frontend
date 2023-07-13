import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  return (
    <div className="text-center flex justify-center align-item-center">
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        increment
      </button>
      <h1 className=" ">count : {value}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        decrement
      </button>
    </div>
  );
}
