import React, { useState, useEffect } from 'react';
import axios, * as others from 'axios';
import './App.css';
import { fileName } from './modules/FileName';
import { CalcNumber } from './modules/CalcNumber';

function App(props: any) {
    const [ message, setMessage ] = useState<string>('');
    const [ fileName, setFileName ] = useState<fileName>({ fileName: '' });
    const [ number1, setNumber1 ] = useState<number>();
    const [ number2, setNumber2 ] = useState<number>();
    const [ total, setTotal ] = useState<number>(0);
    const PORT = props.server_port;

    useEffect(() => {
        fetch(`http://localhost:${PORT}/ShowTitle`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return setMessage(data.message);
            });
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(`http://localhost:${PORT}/Add`, { number1: number1, number2: number2 })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTotal(res.data.sum);
            });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileName = event.currentTarget.value;
        setFileName({
            fileName: fileName // Update form data for the input field that changed
        });
    };

    return (
        <form
            onSubmit={handleSubmit}>
            <div className="App">
                <h1>{message}</h1>
                <div>
                    <input
                        placeholder="First Number"
                        type="number"
                        value={number1}
                        onChange={(e) => {
                            return setNumber1(Number(e.target.value));
                        }}
                    />
                    <input
                        placeholder="Second Number"
                        type="number"
                        value={number2}
                        onChange={(e) => {
                            return setNumber2(Number(e.target.value));
                        }}
                    />
                </div>
                <button type="submit">Add Two Numbers</button>
                <p>Total: {total || ''}</p>
            </div>
        </form>
    );
}

export default App;

