import { TodoMainBox } from "./Todos/page";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen">
    <h1 className="text-4xl">Continue With Your To-Dos</h1>
    <TodoMainBox/>
    </div>
  );
}
