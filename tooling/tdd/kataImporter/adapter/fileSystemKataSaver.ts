import { mkdir, writeFile } from "fs/promises";
import toCamelCase from "../formatter/toCamelCase.js";
import Kata from "../model/kata.js";
import KataSaver from "../port/kataSaver.js";

const TDD_DIR_PATH = "./tdd/";

class FileSystemKataSaver implements KataSaver {
  public async saveKata(kata: Kata): Promise<string> {
    await this.createKataFolder(kata);
    const readmeLocalPath = await this.createKataReadme(kata);
    await this.initializeKataDevFiles(kata);
    return readmeLocalPath;
  }

  private async createKataFolder(kata: Kata): Promise<void> {
    await mkdir(this.getKataFolderPath(kata));
  }

  private async createKataReadme(kata: Kata): Promise<string> {
    const readmeRequest = await fetch(kata.URL);
    const readme = await readmeRequest.blob();
    const readmeLocalPath = `${this.getKataFolderPath(kata)}/README.md`;
    await writeFile(readmeLocalPath, await readme.text());

    return readmeLocalPath;
  }

  private async initializeKataDevFiles(kata: Kata) {
    const devFilePath = `${this.getKataFolderPath(kata)}/${toCamelCase(
      kata.name
    )}.ts`;
    await writeFile(devFilePath, "");

    const testFilePath = `${this.getKataFolderPath(kata)}/${toCamelCase(
      kata.name
    )}.test.ts`;

    await writeFile(testFilePath, "");
  }

  private getKataFolderPath(kata): string {
    return `${TDD_DIR_PATH}${toCamelCase(kata.name)}`;
  }
}

export default FileSystemKataSaver;
