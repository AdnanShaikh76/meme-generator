import React, {useState} from "react";
import Draggable from "react-draggable";

const Text = () => {
    const [editMode, seteditMode] = useState(false)
    const [value, setvalue] = useState("Double Click to Edit")


  return (
    <Draggable>
      {
        editMode ? <input onDoubleClick={e => seteditMode(false)} value={value} onChange={e => setvalue(e.target.value)}/> : <h3 onDoubleClick={e => seteditMode(true)}>{value}</h3>
      }
    </Draggable>
  );
};

export default Text;
