import {
  writeFileAsync,
  readFileAsync,
  processFiles,
} from "./modules/Functions.js";
function main() {
  async function doProcess(paths) {
    const res = await processFiles(paths);
    return res;
  }
  async function doWrite(path, content) {
    return await writeFileAsync(path, content);
  }
  async function doRead(path, encode) {
    return await readFileAsync(path, encode);
  }
  try {
    console.log(doProcess("text.txt"));
    //console.log(doWrite("text4.txt", "Je suis arkedien 3"));
    //console.log(doRead("test.txt", "UTF-8"));
  } catch (error) {
    console.log(error);
  }
}
main();
