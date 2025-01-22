// TODO: https://tech-docs.corndel.com/js/functions.html

/**
 * Calls the functions in the correct order to log the messages:
 * 'first!', 'middle!', 'last!'
 *
 * @returns {number} The product of the three returned values (i.e. multiply them)
 */
export function main() {
  const result = meFirst() * meMiddle() * meLast();
  // TODO: Call the functions in the correct order
  // TODO: Return the product of the three returned values
  return result;
}

function meFirst() {
  console.log("first!");
  return 17;
}

function meMiddle() {
  console.log("middle!");
  return 19;
}

function meLast() {
  console.log("last!");
  return 23;
}
