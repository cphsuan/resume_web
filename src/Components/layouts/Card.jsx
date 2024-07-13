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
      className={`${classId} flex flex-col items-right bg-gray-50 rounded-xl border-primary-800 cursor-pointer`}
      layoutId={`card-container-${id}`}
      onClick={onClick}
      {...props}
    >
      <div className="card-content-header rounded-t-xl p-3 bg-primary-800">
        {header}
      </div>
      <div className="card-content-body rounded-b-xl p-3 overflow-auto bg-grayscale-500">
        {body}
      </div>
    </motion.div>
  );
};

export default Card;
