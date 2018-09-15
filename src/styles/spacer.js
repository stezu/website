const SPACERS = ['2px', '4px', '8px', '16px', '32px', '64px'];

/**
 * Return the spacer matching the given name.
 *
 * @param {string} spacerName
 * @return {string}
 */
export default function spacer(spacerName) {
  const chosenSpacer = SPACERS[spacerName - 1];

  if (!chosenSpacer) {
    throw new Error(`${spacerName} is not a valid spacer`);
  }

  return chosenSpacer;
}
