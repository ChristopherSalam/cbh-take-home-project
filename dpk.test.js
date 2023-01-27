const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '75c63950f75d...' when given 'some event'", () => {
    const trivialKey = deterministicPartitionKey('some event');
    expect(trivialKey).toBe("75c63950f75d84680e5de6c7ef4ae0d974fe708c68b74b0c798236522889dc773877050e4e8c57c7f0df0531df108b17e3fc9cfd340ae222f6cf81956548b576");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '112ec081df8d...' when given 'some event with over 255 chars'", () => {
    const trivialKey = deterministicPartitionKey('event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event some event');
    expect(trivialKey).toBe("112ec081df8dd260cd8485efadf88100e0a63a398a5561d21285b77bc7602f9e1b5b9ac46df25d476c4779518e4232d0136efb4b80be5254c8c32c1249ff3f9d");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal 'b7478342a4...' when given obj with partionKey as attribute but has no value", () => {
    const trivialKey = deterministicPartitionKey({"partitionKey":""});
    expect(trivialKey).toBe("b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '12345' when given obj with partionKey as attribute", () => {
    const trivialKey = deterministicPartitionKey({"partitionKey":"12345"});
    expect(trivialKey).toBe("12345");
  });
});
