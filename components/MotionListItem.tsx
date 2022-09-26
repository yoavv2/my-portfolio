import { motion } from 'framer-motion';
const MotionListItem = ({ className, children }) => {
  return (
    <motion.li      className={className}
      whileHover={{
        scale: 0.95,
        y: -10,
        x: -5,
        boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
      }}
      whileFocus={{
        scale: 0.95,
        y: -10,
        x: -5,
        boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{
        scale: 0.85,
        y: -10,
        boxShadow: '10px 10px 0 rgba(0, 0, 2, 0)',
      }}
    >
      {children}
    </motion.li>
  );
};

export default MotionListItem;
