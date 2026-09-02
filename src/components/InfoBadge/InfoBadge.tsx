import "./infoBadge.css";
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
    <div className="badge">
      <img
        src={
          isSuccess
            ? "../../assets/images/successBadge.png"
            : "../../assets/images/failedBadge.png"
        }
      />
      <p>{message}</p>
      <button type="button" onClick={() => onDismiss()}>
        بستن
      </button>
    </div>
  );
};
