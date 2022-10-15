import Kata from "../model/kata";

interface KataSaver {
  saveKata: (kata: Kata) => Promise<string>;
}

export default KataSaver;
