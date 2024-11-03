import Image from "next/image";
import styles from "./page.module.css";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <main>
     <LeftSide />
     <RightSide />    
    </main>
  );
}
