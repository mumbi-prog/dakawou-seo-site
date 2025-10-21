import { cn } from '../components/lib/utils';
import { Plus, Minus } from 'lucide-react';
import PropTypes from 'prop-types';

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  className,
}) => {
  return (
    <div className={cn("border-b border-gray-200", className)}>
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none focus:ring-2 focus:blue-800 focus:ring-opacity-50 rounded-md"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-[14px] font-medium text-gray-800">{question}</h3>
        <span className="ml-4 flex-shrink-0 rounded-full bg-s-dark-g p-1.5 text-white">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-[5px] text-gray-600 text-[13px]">{answer}</div>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FAQItem;
