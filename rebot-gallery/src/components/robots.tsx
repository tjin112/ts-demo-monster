import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext,appSetStateContext } from "../AppState";
import { withAddToCart } from './AddToCart'
export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart:(id,name)=>void
}
const Robots: React.FC<RobotProps> = ({ id, name, email,addToCart }) => {
  // 使用 共享的数据
  const value = useContext(appContext);
  // 使用共享的方法
  
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{value.username}</p>
      <button onClick={()=>addToCart(id,name)}>add to cart</button>
    </div>
  );
};

export default withAddToCart(Robots);
