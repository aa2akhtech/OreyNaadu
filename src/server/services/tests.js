const testFunction = async () => {
  try {
    const result = "test";
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = { testFunction };
