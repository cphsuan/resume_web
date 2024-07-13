import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../layouts/Card";

const VerticalTimeLine = ({ dataSets }) => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <motion.div className="w-full">
      <motion.div className="w-full absolute p-8">
        {dataSets.map((item, idx) => (
          <div
            className={
              idx % 2 === 1 ? "flex justify-start" : "flex justify-end"
            }
            key={item.id}
          >
            <Card
              key={item.id}
              id={item.id}
              isScaled={selectedId === item.id}
              onClick={() => setSelectedId(item.id)}
              header={
                <>
                  <motion.h2 className="text-xl font-bold mb-2">
                    {item.title}
                  </motion.h2>
                  <motion.h5 className="text-sm font-bold">
                    {item.company}
                    <br />
                    {item.period}
                    <br />
                    {item.pl.map((plItem, idx) => (
                      <button
                        key={idx}
                        className="rounded-full bg-gray-50 p-1 m-1"
                      >
                        {plItem}
                      </button>
                    ))}
                  </motion.h5>
                </>
              }
              body={
                <motion.div className="text-sm font-bold mb-1">
                  {item.shortDesc}
                </motion.div>
              }
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
        {selectedId &&
          dataSets.map((item) => (
            <>
              {item.id === selectedId && (
                <AnimatePresence key={item.id + "-presence"}>
                  <motion.div
                    className="fixed inset-0 bg-gray-50 bg-opacity-50 flex items-center justify-center"
                    key={item.id + "-overlay"}
                  >
                    <Card
                      key={item.id}
                      classId="card w-[450px] h-[375px]"
                      id={item.id}
                      onClick={() => setSelectedId("")}
                      header={
                        <>
                          <div className="flex justify-end">
                            <motion.button onClick={() => setSelectedId("")}>
                              Close
                            </motion.button>
                          </div>
                          <motion.h2 className="text-xl font-bold mb-2">
                            {item.title}
                          </motion.h2>
                          <motion.h5 className="text-sm font-bold">
                            {item.company}
                            <br />
                            {item.period}
                          </motion.h5>
                        </>
                      }
                      body={
                        <motion.div
                          className="text-sm font-bold mb-1"
                          key={item.id + "-body"}
                        >
                          {item.desc}
                        </motion.div>
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </motion.div>
                </AnimatePresence>
              )}
            </>
          ))}
      </motion.div>
      <svg id="vertial-line" width="100%" height="800" viewBox="0 0 100 100">
        <motion.line
          initial={{ x1: "50%" }}
          animate={{ x1: "50%" }}
          transition={{ type: "tween" }}
          y1="0"
          x2="50%"
          y2="100"
          fill="none"
          strokeWidth="2"
          strokeDasharray="6"
          stroke="#ACC4CF"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </motion.div>
  );
};
export default VerticalTimeLine;
