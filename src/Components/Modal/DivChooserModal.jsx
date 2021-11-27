import React, { useRef, useState } from "react";
import Button from "../Button";
import "./DivChooserModal.css";

function DivChooserModal(props) {
  const [colors, setColor] = useState({
    div1color: "#ffffff",
    div2color: "#ffffff",
  });

  let hasChanged = useRef(false);

  const div1Ref = useRef();
  const div2Ref = useRef();

  const handleColorChange = (e) => {
    setColor({
      ...colors,
      [e.target.id]: e.target.value,
    });
    hasChanged.current = true;
  };

  return (
    props.show && (
      <div className="backdrop" onClick={(e) => e.stopPropagation()}>
        <div className="modal">
          <div className="modal__header">Choose DIV Colors</div>
          <div className="modal__body">
            <div
              className="preview"
              style={{ backgroundColor: colors.div1color }}
              onClick={() => {
                if (div1Ref.current) {
                  div1Ref.current.click();
                }
              }}
            />
            <div
              className="preview"
              style={{ backgroundColor: colors.div2color }}
              onClick={() => {
                if (div2Ref.current) {
                  div2Ref.current.click();
                }
              }}
            />

            <input
              ref={div1Ref}
              type="color"
              id="div1color"
              value={colors.div1color}
              onChange={handleColorChange}
            />
            <input
              ref={div2Ref}
              type="color"
              id="div2color"
              value={colors.div2color}
              onChange={handleColorChange}
            />
          </div>

          <div className="modal__footer">
            <Button
              outlined
              onClick={() => {
                setColor({
                  div1color: "#ffffff",
                  div2color: "#ffffff",
                });
                props.onClose();
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                if (hasChanged.current) {
                  props.onEmbedDiv({ ...colors });
                }
                props.onClose();
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    )
  );
}

export default DivChooserModal;
