import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';


export default function About() {

    const [darkMode,setDarkMode] = useState({
        color : "black",
        backgroundColor : "white"
    });
    
    const [buttonText, setButtonText] = useState("Dark Mode")

    const handleDarkMode = () =>{

        if(darkMode.color === "black"){
            setDarkMode({
                color : "white",
                backgroundColor : "black",
                border : "1px white"
            })
            setButtonText("Light Mode");
        }
        else{
            setDarkMode({
                color : "black",
                backgroundColor : "white"
            })
            setButtonText("Dark Mode");
        }
    }

    return (
        <div style={darkMode}>
            <h2 className="my-2 text-center">About Us</h2>
            <div className="container my-3" style={darkMode}>
                <Accordion defaultActiveKey="0" style={darkMode}>
                    <Accordion.Item eventKey="0" style={darkMode}>
                        <Accordion.Header style={darkMode}>Accordion Item #1</Accordion.Header>
                        <Accordion.Body style={darkMode}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={darkMode}>
                        <Accordion.Header style={darkMode}>Accordion Item #2</Accordion.Header>
                        <Accordion.Body style={darkMode}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="my-4">
                {/* <button onClick={handleDarkMode} type="button" className="btn btn-info my-2 text-center">{buttonText}</button> */}
                <Form>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        onClick={handleDarkMode}
                        label={buttonText}
                    />
                </Form>
            </div>
        </div>
    )
}
