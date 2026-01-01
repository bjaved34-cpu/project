const Notification = ({ notification }) => {
  if (!notification.show) return null; // hides when show = false

  const bgColor =
    notification.type === "success"
      ? "bg-green-600"
      : notification.type === "error"
      ? "bg-red-600"
      : "bg-black";

  return (
    <div className="fixed top-0 left-0 w-full z-10 ">
      <div
        className={`${bgColor} text-white text-center py-3 text-sm font-medium transition-transform duration-300`}
      >
        {notification.message}
      </div>
    </div>
  );
};

export default Notification;
