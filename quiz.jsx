import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Result from './result.jsx';

let Quiz = () => {
    let [noOfQuestion, setNoOfQuestion] = React.useState(20);
    let [max, setMax] = React.useState(10);   // default max value 10 
    let [min, setMin] = React.useState(1);   // default min value 1
    const [state, setState] = React.useState({});
    const [finalResult, setfinalResult] = React.useState(false);
    const [isStart, setIsStart] = React.useState(true);
    const [resultArray, setResultArray] = React.useState([]);
    const [ansState, setAnsState] = React.useState("");
    let [result, setResult] = React.useState({ value: 0 });
    let items = ['+', '-', '*', '/']    // for performing operations
    useEffect(() => {
        let firstNumber = getRandomInt(max, min)
        let secondNumber = getRandomInt(max, min)
        let sign = getRandomSign()
        let question = `${firstNumber} ${sign} ${secondNumber}`
        let answer = calc(sign, firstNumber, secondNumber)
        setState({ x: 1, question: question, answer })
    }, []);
    useEffect(() => {
        // console.log(resultArray)
    }, [resultArray]);
    function getRandomInt(maxs, mins) {   // for calculate
        return (Number(Math.floor(Math.random() * (maxs - mins))) + Number(mins));
    }
    function getRandomSign() {
        return items[Math.floor(Math.random() * items.length)];
    }
    function calc(sign, z, y) {
        switch (sign) {
            case "+":
                return z + y;
            case "-":
                return z - y;
            case "*":
                return z * y;
            case "/":
                return Number((z / y).toFixed(2));
        }
    }
    function handleInput(event) {
        const { name, value } = event.target;
        setAnsState(value)
    }
    function handleQuestion(event) {
        const { name, value } = event.target;
        setNoOfQuestion(value)
    }
    function handleRange(event) {
        const { name, value } = event.target;
        if (name == "maximum") {
            setMax(value)
        }
        if (name == "minimum") {
            setMin(value)
        }
    }
    function startQuiz() {
        setNoOfQuestion(noOfQuestion ? noOfQuestion : 20)   // default 20 questions
        setIsStart(false)
    }

    function submitHandle() {
        setResultArray([...resultArray, { question: state.question, answer: state.answer, score: (state.answer == ansState) ? 1 : 0, usrAnswer: ansState, color: (state.answer == ansState) ? "green" : "red" }])
        setAnsState('')
        if (state.x == noOfQuestion) {
            if (state.answer == ansState) {
                setResult({ value: Number(result.value) + 1 })
            }
            setfinalResult(true)
        } else {
            if (state.answer == ansState) {
                setResult({ value: Number(result.value) + 1 })
            }
            let firstNumber = getRandomInt(max, min)
            let secondNumber = getRandomInt(max, min)
            let sign = getRandomSign()
            let question = `${firstNumber} ${sign} ${secondNumber}`
            let answer = calc(sign, firstNumber, secondNumber)
            setState({ x: Number(state.x) + 1, question: question, answer })
        }
    }
    return (
        <div style={{ marginLeft: "12%", marginTop: "20%" }
        }>{isStart ? <div><label>Please enter no of question</label><br /><br /> <input type="number" name="question" onChange={handleQuestion} value={noOfQuestion} label="answer" /> <br /><br />
            <label>Please Enter maximum number range</label><br /><br /> <input type="number" name="maximum" onChange={handleRange} value={max} /><br /><br />
            <label>Please Enter minimum number range</label><br /><br /> <input type="number" name="minimum" onChange={handleRange} value={min} /><br /><br /><br /><br /><br /><br /><br /><br />
            <center><Button variant="contained" className="submitBtn" color="primary" onClick={startQuiz}>
                Start Quiz
            </Button></center></div> : <div>
            {finalResult ? <div>{resultArray.map((ele, i) => (<h3>Q no {i + 1} &nbsp;&nbsp;&nbsp; {ele.question}
                <br /><br />Actual Answer &nbsp;&nbsp; {ele.answer}
                <br /> <br />Your Answer &nbsp;&nbsp; {ele.usrAnswer}
                <br /><br /> <span style={{ color: ele.color, fontSize: "40px" }}> score {ele.score} </span><br /><br /></h3>
            ))}< Result resultValue={result} ></Result ></div > : <div>
                <h2>Q.no {state.x}
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.question}
                </h2>
                <input type="number" name="answer" onChange={handleInput} value={ansState} required label="answer" />
                <br />
                <br />
                <br />
                <Button variant="contained" className="submitBtn" color="primary" onClick={submitHandle}>
                    Next
                </Button></div>}</div>}
        </div >
    )
}
export default Quiz;
