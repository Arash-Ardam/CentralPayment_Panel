import React, { useEffect, useRef } from "react";
import "./Dialog.css";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Dialog = ({ open, onClose, children }: DialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={ref}
      className="dialogContainer"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
