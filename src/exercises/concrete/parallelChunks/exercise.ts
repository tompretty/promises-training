import { chunk } from "lodash";

type Context = {
  postData: (data: string) => Promise<string>;
};

export default ({ postData }: Context) =>
  async (list: Array<string>) => {
    const resultsChunks: string[][] = [];

    const listChunks: string[][] = chunk(list, CHUNK_SIZE);
    for (const listChunk of listChunks) {
      const promisesChunk = listChunk.map((item) => postData(item));
      const resultsChunk = await Promise.all(promisesChunk)
      resultsChunks.push(resultsChunk);
    }

    return resultsChunks.flat();
  };

  const CHUNK_SIZE = 5;