import { useState, useRef, useEffect } from "react";


export default function Workout({ id, title, description, image, time, onComplete }) {


    const intervalRef = useRef();   // ID của setInterval (đếm giây)

    // lưu số giây còn lại
    const [secondsLeft, setSecondsLeft] = useState(time / 1000); //đổi ra giây

    useEffect(() => {
        if (secondsLeft === 0 && secondsLeft !== time / 1000) {
            alert(`⏰ ${title} is done!`);
            handleStopWorkout(title);
        }
    }, [secondsLeft]);




    function handleStartWorkout() {

        clearInterval(intervalRef.current);

        setSecondsLeft(time / 1000); // ✔️

        // Todo: Start timer


        intervalRef.current = setInterval(
            () => {
                setSecondsLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current); // 💥 clear khi còn 0 hoặc 1
                        return 0;
                    }
                    return prev - 1;
                })
            }, 1000
        );

    }

    function handleStopWorkout(title) {
        // Todo: Stop timer
        clearInterval(intervalRef.current);
        onComplete(title);
    }


    return (
        <article id={id} className="p-4 border rounded-lg shadow-md mb-4 bg-white dark:bg-gray-800"
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
            {/* ui dừng lại 1 */}
            <p className="text-gray-800 bg-gray-100 mb-4 px-4 py-2 rounded-full font-bold text-center shadow">
                {secondsLeft !== time / 1000
                    ? <>
                        ⏳ {secondsLeft} second{secondsLeft !== 1 ? "s" : ""}
                    </>
                    : <>
                        🕒 {time / 60000} minute{time / 60000 !== 1 ? "s" : ""}
                    </>
                }
            </p>

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
