const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

let createHexHash = (eventString) => {
  return crypto.createHash("sha3-512").update(eventString).digest("hex")
}

exports.deterministicPartitionKey = (
  event = { "partitionKey" : TRIVIAL_PARTITION_KEY }
) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      candidate = createHexHash(JSON.stringify(event));

      if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
      }
    }
  }

  /* Consider Removing */
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHexHash(candidate);
  }

  return candidate;
};
