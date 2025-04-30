export {};

declare global {
  // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention, no-var, vars-on-top
  var _mongo: Promise<MongoClient> | undefined;
}
