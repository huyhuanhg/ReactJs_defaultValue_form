import './App.css';
import {useState} from "react";

function App() {
    const [control, setControl] = useState({
        txtBox: 'admin',
        pwBox: '1',
        selectBox: 1,
        radioBox: 'r2',
        checkBox: true
    });
    const onHandleChange = (ev) => {
        let newControl = {...control};
        let target = ev.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        newControl[target.name] = value;
        setControl(newControl);
    }
    const onHandleSubmit = (ev) => {
        ev.preventDefault();
        console.log(control);
    }
    return (
        <div className="form">
            <form id="form" onSubmit={onHandleSubmit}>
                <label htmlFor="txtBox">Text Box</label><br/>
                <input id="txtBox" type="text" name="txtBox" value={control.txtBox} onChange={onHandleChange}
                       placeholder="Text"/><br/>
                <label htmlFor="pwBox">Password Box</label><br/>
                <input id="pwBox" type="password" name="pwBox" value={control.pwBox} onChange={onHandleChange}
                       placeholder="Password"/><br/>
                <label>Select Box</label><br/>
                <select name="selectBox" value={control.selectBox} onChange={onHandleChange}>
                    <option value={1}>Options1</option>
                    <option value={2}>Options2</option>
                </select>
                <div>
                    <label>Radio box</label><br/>
                    <label><input type="radio" name="radioBox" value="r1" onChange={onHandleChange}
                                  checked={control.radioBox === 'r1'}/>Radio 1</label>
                    <label><input type="radio" name="radioBox" value="r2" onChange={onHandleChange}
                                  checked={control.radioBox === 'r2'}/>Radio 2</label>
                </div>
                <label><input type="checkbox" name="checkBox" checked={control.checkBox} value={true}
                              onChange={onHandleChange}/>Check box</label><br/>
                <button>Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}

export default App;

