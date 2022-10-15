import { mkdir, writeFile } from "fs/promises";
import toCamelCase from "../formatter/toCamelCase.js";
import Kata from "../model/kata.js";
import KataSaver from "../port/kataSaver.js";

const TDD_DIR_PATH = "./tdd/";

class FileSystemKataSaver implements KataSaver {
  public async saveKata(kata: Kata): Promise<string> {
    const kataPath = `${TDD_DIR_PATH}${toCamelCase(kata.name)}`;

    await mkdir(kataPath);
    const readmeRequest = await fetch(kata.URL);
    const readme = await readmeRequest.blob();
    const readmeLocalPath = `${kataPath}/README.md`;
    console.log(readmeLocalPath, kataPath, kata);
    await writeFile(readmeLocalPath, await readme.text());

    return readmeLocalPath;
  }
}

export default FileSystemKataSaver;
