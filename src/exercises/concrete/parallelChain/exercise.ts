type Context = {
  firstStep: (data: string) => Promise<string>;
  secondStep: (data: string) => Promise<string>;
  thirdStep: (data: string) => Promise<string>;
};

export default ({ firstStep, secondStep, thirdStep }: Context) =>
  async (list: Array<string>) => {
    return await Promise.all(list.map(async (item) => {
      const s1 = await firstStep(item);
      const s2 = await secondStep(s1);
      const s3 = await thirdStep(s2);

      return s3;
    }))
  };
