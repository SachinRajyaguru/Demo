const prettyPrint = (data: any) => {
  if (__DEV__) {
    console.log(JSON.stringify(data, null, 2));
  }
};
export { prettyPrint };
