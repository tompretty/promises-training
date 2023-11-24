type Context = {
  postData: (data: string) => Promise<string>;
};

export default ({ postData }: Context) =>
  async (list: Array<string>) => {
    const successes: string[] = [];
    const errors: unknown[] = [];

    await Promise.all(list.map(async (item) => {
      try {
        const success = await postData(item);
        successes.push(success);
      } catch (error) {
        errors.push(error);
      }
    }));

    return { successes, errors };
  };
