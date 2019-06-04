import { ERROR_MESSAGE } from "/src/helpers/error_message";
import { randomDelay } from "/src/helpers/random_delay";
import { filesAndResponses } from "/src/helpers/files_and_responses";

export function getFile(file) {
  return new Promise(function(resolve, reject) {
    const delay = randomDelay();

    setTimeout(function() {
      try {
        const response = filesAndResponses[file];
        if (response === "ERROR") {
          throw new Error(ERROR_MESSAGE);
        }
        resolve(response);
      } catch (err) {
        reject(err);
      }
    }, delay);
  });
}
