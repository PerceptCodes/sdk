import { calculateReward } from "./rewards";

export function start() {
  const reward = calculateReward(1);
  console.log("Reward:", reward);
}
