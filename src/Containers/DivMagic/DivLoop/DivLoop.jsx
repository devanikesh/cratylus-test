import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DivChooserModal from "../../../Components/Modal/DivChooserModal";
import { embedDivs } from "../../../store/actions";
import "./DivLoop.css";

function DivLoop(props) {
  const [showDivColorChooserModal, setShowDivColorChooserModal] =
  useState(false);
  console.log("DEBUG DivLoop Prop", props, showDivColorChooserModal);

  useEffect(() => {
    setShowDivColorChooserModal(false);
  }, [props.div])

  const direction = ['column', 'row'];

  return (
    <div
      className="div_loop"
      onClick={(e) => {
        e.stopPropagation();
        setShowDivColorChooserModal(true)
      }}
      style={{ backgroundColor: props.div.color, flexDirection: direction[Math.floor(Math.random() * (1 + 1))] }}
    >
      {props.first && props.div.children && props.div.children.length === 0 && "Click to embed DIVs"}
      {props.div.children ?
          props.div.children.map((div) => <DivLoop div={div} embedDivs={props.embedDivs} />) : null}

      <DivChooserModal
        show={showDivColorChooserModal}
        onClose={() => setShowDivColorChooserModal(false)}
        onEmbedDiv={(payload) => {
          props.embedDivs({ ...payload, parentId: props.div.id });
          console.log(
            "DEBUG payload",
            embedDivs({ ...payload, parentId: props.div.id })
          );
        }}
      />
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  embedDivs: (payload) => dispatch(embedDivs(payload)),
});

export default connect(null, mapDispatchToProps)(DivLoop);
