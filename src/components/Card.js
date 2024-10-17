const Card = ({header, children, onClose}) => {
  return (
    <div className="bg-white w-full h-full border border-gray-200 rounded-lg p-4 text-gray-700">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">{header}</div>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      <div className="mt-2">
        {children}
      </div>
  </div>
  );
}

export default Card;