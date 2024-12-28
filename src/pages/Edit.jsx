import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router";
import Text from "../components/Text";
import Button from "react-bootstrap/Button";
import { exportComponentAsJPEG } from "react-component-export-image";

function Edit() {
  const [params] = useSearchParams();
  console.log(params.get("url"));
  const [count, setcount] = useState(0);
  const memeref = createRef();

  const addText = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <div ref={memeref} className="mt-5 mb-5" style={{ width : "600px"}}>
        <img src={params.get("url")} alt="" style={{ width: "300px" }} />

        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button variant="primary" onClick={addText}>
        Primary
      </Button>
      <Button variant="success" onClick={(e) => {exportComponentAsJPEG(memeref)}}>Save</Button>
    </div>
  );
}

export default Edit;
