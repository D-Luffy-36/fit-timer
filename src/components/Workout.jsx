import { useState, useRef } from "react";


export default function Workout({ title, description, image, time, onComplete }) {

    const timerRef = useRef(); // luu id của set time out

    const intervalRef = useRef();   // ID của setInterval (đếm giây)

    const timeTominutes = time / 60000;

    // lưu số giây còn lại
    const [secondsLeft, setSecondsLeft] = useState(time); // ms, chưa đổi ra giây

    const [_, forceUpdate] = useState(); // State ảo để ép render

    function handleStartWorkout() {
        // Xóa timer/interval cũ nếu có
        clearTimeout(timerRef.current);
        clearInterval(intervalRef.current);

        // Todo: Start timer
        timerRef.current = setTimeout(
            () => {
                alert("⏰ Time's up!");
                handleStopWorkout(title)
            }, time
        );
    }

    function handleStopWorkout(title) {
        // Todo: Stop timer
        clearTimeout(timerRef.current);
        clearInterval(intervalRef.current);

        onComplete(title);
    }

    return (
        <article className="p-4 border rounded-lg shadow-md mb-4 bg-white dark:bg-gray-800"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                aspectRatio: '1/1', // Tỉ lệ khung hình
            }}
        >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">{description}</p>
            <p className="mb-4 text-gray-500">{timeTominutes} min{timeTominutes > 1 ? "s" : ""}</p>
            <div className="flex gap-2">
                <button
                    onClick={handleStartWorkout}
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                    Start
                </button>
                <button
                    onClick={() => { handleStopWorkout(title) }}
                    className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                >
                    Stop
                </button>
            </div>
        </article>
    );
}
