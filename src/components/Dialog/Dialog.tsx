import React, { useEffect } from "react";
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
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Dialog = ({ open, onClose, children }: DialogProps) => {
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  if (!open) return null;

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
          onClose();
          dialogRef.current?.close();
        }
      }}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
