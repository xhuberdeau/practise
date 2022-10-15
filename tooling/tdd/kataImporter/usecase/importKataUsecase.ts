import KataProvider from "../port/kataProvider.js";
import KataSaver from "../port/kataSaver.js";
import KataPrompter from "../port/kataPrompter";

class ImportKataUsecase {
  public async execute(
    kataProvider: KataProvider,
    kataPrompter: KataPrompter,
    kataSaver: KataSaver
  ): Promise<void> {
    const katas = await kataProvider.provideKatas();
    const selectedKata = await kataPrompter.promptKata(katas);
    await kataSaver.saveKata(selectedKata);
  }
}

export default ImportKataUsecase;
