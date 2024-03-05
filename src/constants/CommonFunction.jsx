/* eslint-disable no-param-reassign */
const itemHeight = 155; // Define the height of each item on the reel in pixels.
const numItems = 10; // Define the number of items on the reel.
const timePerIcon = 100; // Define the time in milliseconds it takes for one icon to roll.

/**
 * Reel rolling
 * @param {Html Element} reel
 * @param {Number} offset
 * @returns handling dynamic change of reel
 */
const roll = (reel, offset = 0) => {
  // Define the roll function, taking a reel element and an optional offset.
  // Minimum of 2 + the reel offset rounds
  const delta = (offset + 2) * numItems + Math.round(Math.random() * numItems); // Calculate the number of items to move the reel by, including a random factor.

  // Return promise so we can wait for all reels to finish
  return new Promise((resolve) => {
    // Return a new Promise to handle the asynchronous nature of the animation.
    const style = getComputedStyle(reel); // Get the computed style of the reel element.

    // Current background position
    const backgroundPositionY = parseFloat(style['background-position-y']); // Get the current vertical background position of the reel.
    // Target background position
    const targetBackgroundPositionY = backgroundPositionY + delta * itemHeight; // Calculate the target vertical background position after the reel has rolled.
    // Normalized background position, for reset
    const normTargetBackgroundPositionY = // Calculate the normalized target background position, ensuring it wraps around correctly.
      targetBackgroundPositionY % (numItems * itemHeight);

    // Delay animation with timeout, for some reason a delay in the animation property causes stutter
    setTimeout(() => {
      // Use setTimeout to delay the start of the animation, to avoid stuttering.
      // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
      reel.style.transition = `background-position-y ${(8 + 1 * delta) * timePerIcon}ms cubic-bezier(.41,-0.01,.63,1.09)`; // Set the transition property for the reel's background position, including a cubic-bezier curve for the animation timing function.
      // Set background position
      reel.style.backgroundPositionY = `${backgroundPositionY + delta * itemHeight}px`; // Set the reel's background position to the target position, triggering the animation.
    }, offset * 150); // Delay the start of the animation based on the offset.

    // After animation
    setTimeout(
      () => {
        // Reset position, so that it doesn't get higher without limit
        reel.style.transition = `none`; // Remove the transition property to stop the animation.
        reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`; // Set the reel's background position to the normalized target position, ensuring it wraps around correctly.
        // Resolve this promise
        resolve(delta % numItems); // Resolve the Promise with the remainder of the delta divided by the number of items, which represents the final position of the reel.
      },
      (8 + 1 * delta) * timePerIcon + offset * 150 // Calculate the total duration of the animation, including the offset.
    );
  });
};
export default roll; // Export the roll function as the default export of the module.
