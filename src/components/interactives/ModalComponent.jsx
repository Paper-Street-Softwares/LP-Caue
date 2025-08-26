import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import { X } from "lucide-react";

export default function ModalComponent({ children, header, content }) {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeMOdal = () => setVisible(false);

  const childWithProps = React.cloneElement(children, {
    onClick: openModal,
  });

  return (
    <div>
      {childWithProps}
      <Dialog
        className=" font-secondFont"
        closeIcon={<X size={20} />}
        header={header}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
      >
        {content}
      </Dialog>
    </div>
  );
}
