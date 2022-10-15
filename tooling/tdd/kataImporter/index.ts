import CLIKataPrompter from "./adapter/CLIKataPrompter.js";
import CodingDojoKataProvider from "./adapter/codingDojoKataProvider.js";
import FileSystemKataSaver from "./adapter/fileSystemKataSaver.js";
import ImportKataUsecase from "./usecase/importKataUsecase.js";

new ImportKataUsecase().execute(
  new CodingDojoKataProvider(),
  new CLIKataPrompter(),
  new FileSystemKataSaver()
);
