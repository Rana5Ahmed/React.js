    import React, { useState, useRef, useEffect } from "react";

    function Stopwatch() {
    const [time, setTime] = useState(0);        // Time in seconds
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        }
    };

    const pauseTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setTime(0);
        setIsRunning(false);
    };

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    const formatTime = () => {
        const hours = Math.floor(time / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
        const seconds = (time % 60).toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div style={styles.container}>
        <h1 style={styles.time}>{formatTime()}</h1>
        <div>
            <button style={styles.button} onClick={startTimer}>Start</button>
            <button style={styles.button} onClick={pauseTimer}>Pause</button>
            <button style={styles.button} onClick={resetTimer}>Reset</button>
        </div>
        </div>
    );
    }

    const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },
    time: {
        fontSize: "48px",
        marginBottom: "20px",
    },
    button: {
        margin: "5px",
        padding: "10px 20px",
        fontSize: "16px",
    },
    };

    export default Stopwatch;
