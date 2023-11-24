type Context = {
  getData: (data: string) => Promise<string>;
};

export default ({ getData }: Context) =>
  async (data: string) => {
    const errors = [];

    while (errors.length  < MAX_RETRIES + 1) {
      try {
        return await getData(data);
      } catch (error) {
        errors.push(error);
      }
    }

    throw errors;
  };

const MAX_RETRIES = 3;