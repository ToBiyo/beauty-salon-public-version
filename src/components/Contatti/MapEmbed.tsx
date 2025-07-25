"use client";
import { motion } from "motion/react";
const MapEmbed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex items-center justify-center"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.7252971253665!2d8.610957877307477!3d39.158229231269736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70582d9c88301%3A0x4c1404c0ade8f661!2sVia%20Nazionale%2C%2041%20b%2C%2009010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1753435916477!5m2!1sit!2sit"
        width="600"
        height="450"
        className="w-[100%] xl:w-[1024px] lg:w-[768px] md:w-[640px] sm:w-[480px] h-[300px] md:h-[400px] lg:h-[600px] outline-none border-[8px] border-white lg:border-[16px]"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
};

export default MapEmbed;
