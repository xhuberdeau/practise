import inquirer from "inquirer";
import Kata from "../model/kata.js";
import KataPrompter from "../port/kataPrompter.js";

class InquirerKataPrompter implements KataPrompter {
  public async promptKata(katas: Kata[]): Promise<Kata> {
    const selectedKata = await inquirer.prompt([
      {
        type: "list",
        name: "kataName",
        message: "Select a kata",
        choices: katas.map((kata) => kata.name),
      },
    ]);

    return katas.find((kata) => kata.name === selectedKata.kataName);
  }
}

export default InquirerKataPrompter;
