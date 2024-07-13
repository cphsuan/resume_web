import { motion } from "framer-motion";

const Card = ({
  classId = "card w-[300px] h-[250px]",
  id = 0,
  header,
  body,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      className={`${classId} flex flex-col items-right bg-gray-50 rounded-xl border-blue-600 cursor-pointer`}
      layoutId={`card-container-${id}`}
      onClick={onClick}
      {...props}
    >
      <div className="card-content-header rounded-t-xl p-3 bg-blue-400">
        {header}
      </div>
      <div className="card-content-body rounded-b-xl p-3 overflow-auto">
        {body}
      </div>
    </motion.div>
  );
};

export default Card;
