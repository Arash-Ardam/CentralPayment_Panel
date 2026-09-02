import React from "react";
import "./Dialog.css";
export const dialogRef = React.createRef<HTMLDialogElement | null>();

export function toggleDialog(
  dialogRef: React.RefObject<HTMLDialogElement | null>,
) {
  if (!dialogRef.current) {
    return;
  }

  dialogRef.current.open
    ? dialogRef.current.close()
    : dialogRef.current.showModal();
}

type DialogProps = {
  children: React.ReactNode;
};

const Dialog = ({ children }: DialogProps) => {
  return (
    <dialog
      ref={dialogRef}
      className="dialogContainer"
      onClick={(e) => {
        var rect = dialogRef.current?.getBoundingClientRect();
        if (
          rect &&
          !(
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          )
        ) {
          dialogRef.current?.close();
        }
      }}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
