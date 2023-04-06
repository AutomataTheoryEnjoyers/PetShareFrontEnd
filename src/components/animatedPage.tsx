import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
const animations: Variants = {
  initial: { opacity: 0, x: 500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 500 },
};
type Props = {
  children: ReactNode[] | ReactNode;
};
export const AnimatedPage = ({ children }: Props) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
