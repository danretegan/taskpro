export const loadImage = async (fileName, screenSize, isRetina) => {
  const suffix = isRetina ? '@2x' : '';
  try {
    const image = await import(`./${screenSize}/${fileName}${suffix}.jpg`);
    return image.default;
  } catch (error) {
    console.error(`Error loading image: ${fileName}`, error);
    return null;
  }
};
