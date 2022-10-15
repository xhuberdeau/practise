import Kata from "../model/kata.js";
import KataProvider from "../port/kataProvider.js";

const KATAS_URL = "https://codingdojo.org/kata/";
const KATAS_README_REPOSITORY =
  "https://gitlab.com/codingdojo-org/codingdojo.org/-/raw/master/content/kata/";

class CodingDojoKataProvider implements KataProvider {
  public async provideKatas(): Promise<Kata[]> {
    const page = await this.getKatasPage();

    return this.extractKataPropertiesFromPage(page);
  }

  private async getKatasPage(): Promise<string> {
    const DOM = await fetch(KATAS_URL);
    const textDOM = await DOM.text();

    return textDOM;
  }

  private extractKataPropertiesFromPage(kataDOMPage: string): Kata[] {
    const stuff = `href="${KATAS_URL}`;
    const another = '/">';

    return kataDOMPage.split('class="card"').map((val) => {
      const extracted = val.substring(
        val.indexOf(stuff) + stuff.length,
        val.indexOf("</a></h2>")
      );
      const kataFileName = extracted.substring(0, extracted.indexOf("/"));
      const kataName = extracted.slice(
        extracted.indexOf(another) + another.length
      );

      const kataReadmeRemotePath = `${KATAS_README_REPOSITORY}${kataFileName}.md?inline=false`;

      return {
        name: kataName,
        URL: kataReadmeRemotePath,
      };
    });
  }
}

export default CodingDojoKataProvider;
