import CodingDojoKataProvider from "./adapter/codingDojoKataProvider.js";
import FileSystemKataSaver from "./adapter/fileSystemKataSaver.js";
import { ImportKataUsecase } from "./usecase/importKataUsecase.js";
import InquirerKataPrompter from "./adapter/inquirerKataPrompter.js";

new ImportKataUsecase().execute(
  new CodingDojoKataProvider(),
  new InquirerKataPrompter(),
  new FileSystemKataSaver()
);
