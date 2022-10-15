import Kata from "../model/kata";

interface KataPrompter {
  promptKata: (katas: Kata[]) => Promise<Kata>;
}

export default KataPrompter;
