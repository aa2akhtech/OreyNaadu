import React,{Component} from "react";
import './app.css';
import axios from "axios";

class App extends Component{
    state={
        selectedFile: null
    }
    fileSelectedHandler = event=> {
        this.setState({
            selectedFile: event.target.files[0]
        });
        
    }

fileUploadHandler = () =>{
    const fd = new FormData();
    fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
    axios.post('./articles',fd)
    .then(res => {
        console.log(res);
    })
}

    render() {
        return (
            <div className="App">
                <input type="file" onchane={this.fileSelectedHandler}/>
                <button oclick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}
 


export default App;