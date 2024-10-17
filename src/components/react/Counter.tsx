import {useState} from "preact/hooks";

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    const handleReset = () => {
        setCount(0);
    };
    return (
        <>
            <h2>{count}</h2>
            <div className="flex gap-1">
                <button
                    class="dark:bg-blue-400 dark:hover:bg-blue-600 dark:focus:bg-blue-600 bg-blue-950 hover:bg-blue-700 focus:bg-blue-700 dark:text-slate-900 dark:hover:text-slate-200 dark:focus:text-slate-200 text-slate-200 hover:text-slate-50 focus:text-slate-50 px-3 py-1 rounded-full flex items-center justify-center gap-1 uppercase transition duration-300"
                    onClick={handleClick}>
                    aumentar
                </button>
                <button
                    class="dark:bg-red-400 dark:hover:bg-red-600 dark:focus:bg-red-600 bg-red-950 hover:bg-red-700 focus:bg-red-700 dark:text-slate-900 dark:hover:text-slate-200 dark:focus:text-slate-200 text-slate-200 hover:text-slate-50 focus:text-slate-50 px-3 py-1 rounded-full flex items-center justify-center gap-1 uppercase transition duration-300"
                    onClick={handleReset}>
                    resetear
                </button>
            </div>
        </>
    );
}
