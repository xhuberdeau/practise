import Kata from "../model/kata";

interface KataProvider {
  provideKatas: () => Promise<Kata[]>;
}

export default KataProvider;
