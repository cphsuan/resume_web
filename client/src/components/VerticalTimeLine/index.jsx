import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../layouts/Card";

export default function VerticalTimeLine({ dataSets }) {
  const [selectedId, setSelectedId] = useState("");

  return (
    <motion.div className="w-full relative">
      <motion.div className="w-full h-full absolute">
        <hr className="hidden md:block absolute right-1/2 w-0 h-full border-l-2 border-dotted border-primary-400" />
      </motion.div>
      {dataSets.map((item, idx) => (
        <div
          className={`flex justify-center relative ${
            idx % 2 === 1 ? "md:justify-start" : "md:justify-end"
          }`}
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
                      className="rounded-full bg-grayscale-500 p-1 m-1"
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
                  className="fixed inset-0 bg-grayscale-50 bg-opacity-50 flex items-center justify-center z-50"
                  key={item.id + "-overlay"}
                >
                  <Card
                    key={item.id}
                    classId="card w-4/5 h-max-4/5"
                    id={item.id}
                    onClick={() => setSelectedId("")}
                    header={
                      <>
                        <div className="flex justify-end">
                          <motion.button onClick={() => setSelectedId("")}>
                            <i className="fa-solid fa-x" />
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
  );
}
