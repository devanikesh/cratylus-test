import React from "react";
import Button from "../../Components/Button";
import { connect } from "react-redux";
import "./DivMagic.css";
import DivLoop from "./DivLoop";
import { saveJSONToFile } from "../../utils";

function DivMagic(props) {
  console.log('DEBUG state', props);
  return (
    <div className="div_magic">
      
      <div className="div__container">
        <DivLoop div={props.div} first/>
      </div>

      <div className="div__actions">
          <Button onClick={() => saveJSONToFile(props.div)}>Export to JSON</Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(DivMagic);
