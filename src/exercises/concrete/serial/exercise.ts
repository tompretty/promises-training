type Context = {
  postData: (data: string) => Promise<string>;
};

export default ({ postData }: Context) =>
  async (list: Array<string>) => {
    const result: string[] = [];
    for (const item of list) {
      result.push(await postData(item));
    }

    return result;
  };
