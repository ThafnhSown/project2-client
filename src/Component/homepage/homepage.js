import React from "react"
import Editor from "E:/Project_2/client/src/Component/mini/Editor"
import Button from "E:/Project_2/client/src/Component/mini/Button"
import InputControl from "E:/Project_2/client/src/Component/mini/InputControl"
import OutputControl from "E:/Project_2/client/src/Component/mini/OutputControl"

const Homepage = ({updateUser}) => {
    return (
        <div className="App">
        	<form method="post" className="form">
        		<Editor />
        		<Button />
        		<InputControl />
        		<OutputControl />
        	</form>
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>   
    )
}

export default Homepage