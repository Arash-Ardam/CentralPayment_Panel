import "./infoBadge.css";
import { CheckCircle2, XCircle } from "lucide-react";

type ErrorBadgeProps = {
  isSuccess: boolean;
  message: string;
  onDismiss: () => void;
};

export const InforBadge = ({
  isSuccess,
  message,
  onDismiss,
}: ErrorBadgeProps) => {
  return (
    <div className="infoBadge">
      {isSuccess ? (
        <CheckCircle2 size={48} className="infoBadgeIconSuccess" />
      ) : (
        <XCircle size={48} className="infoBadgeIconError" />
      )}
      <p>{message}</p>
      <button type="button" onClick={() => onDismiss()}>
        بستن
      </button>
    </div>
  );
};
