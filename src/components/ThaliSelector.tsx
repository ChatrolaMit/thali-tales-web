// import { motion } from "framer-motion";
// import kadhi from "@/assets/kadhi.jpeg";
// import kaju_paneer from "@/assets/kaju_paneer.jpg";
// import plain_khichdi from "@/assets/plain_khichdi.jpeg";
// import jeera_rice from "@/assets/jeera_rice.jpeg";

// interface Thali {
//   id: number;
//   name: string;
//   image: string;
// }

// const thalis: Thali[] = [
//   {
//     id: 1,
//     name: "Bengali Thali",
//     image: kadhi,
//   },
//   {
//     id: 2,
//     name: "Gujarati Thali",
//     image: kaju_paneer,
//   },
//   {
//     id: 3,
//     name: "Punjabi Thali",
//     image: plain_khichdi,
//   },
//   {
//     id: 4,
//     name: "South Indian Thali",
//     image: jeera_rice,
//   },
// ];

// interface ThaliSelectorProps {
//   selectedThali: number;
//   onThaliSelect: (thaliId: number) => void;
// }

// const ThaliSelector = ({ selectedThali, onThaliSelect }: ThaliSelectorProps) => {
//   return (
//     <div className="flex items-center space-x-6">
//       {thalis.map((thali, index) => (
//         <motion.button
//           key={thali.id}
//           onClick={() => onThaliSelect(thali.id)}
//           className={`relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 shadow-lg 
//             ${selectedThali === thali.id 
//               ? "w-28 h-28 border-4 border-black/50" 
//               : "w-24 h-24 border-transparent hover:border-accent/50 hover:scale-105"
//             } bg-black`} // black background
//           whileHover={{ scale: selectedThali === thali.id ? 1.1 : 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: index * 0.1 }}
//         >
//           {/* Thali Image */}
//           <img 
//             src={thali.image} 
//             alt={thali.name}
//             className="w-20 h-20 object-cover rounded-full"
//           />

//           {/* Highlight when selected */}
//           {selectedThali === thali.id && (
//             <motion.div
//               layout
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0 }}
//               className="absolute inset-0 rounded-full border-4 border-accent bg-accent/10"
//             />
//           )}
//         </motion.button>
//       ))}
//     </div>
//   );
// };

// export default ThaliSelector;
