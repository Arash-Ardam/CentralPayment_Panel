import "./infoBadge.css";
import { CheckCircle2, XCircle } from "lucide-react";

type ErrorBadgeProps = {
  isSuccess: boolean;
  message: string;
  onDismiss: () => void;
  onClose?: () => void;
};

export const InfoBadge = ({
  isSuccess,
  message,
  onDismiss,
  onClose,
}: ErrorBadgeProps) => {
  return (
    <div className="infoBadge">
      {isSuccess ? (
        <CheckCircle2 size={48} className="infoBadgeIconSuccess" />
      ) : (
        <XCircle size={48} className="infoBadgeIconError" />
      )}
      <p>{message}</p>
      <button
        type="button"
        onClick={() => {
          if (!isSuccess) {
            onDismiss();
          } else {
            onDismiss();
            onClose?.();
          }
        }}
      >
        بستن
      </button>
    </div>
  );
};
