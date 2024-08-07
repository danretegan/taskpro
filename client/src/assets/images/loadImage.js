export const loadImage = async (fileName, screenSize, isRetina) => {
  try {
    if (!fileName) {
      throw new Error('No image specified');
    }

    const retinaSuffix = isRetina ? '@2x' : '';
    const imagePath = `../../assets/images/${screenSize}/${fileName}${retinaSuffix}.jpg`;

    const image = await import(/* webpackIgnore: true */ imagePath);
    return image.default;
  } catch (error) {
    console.error(`Error loading image: ${fileName}`, error);
    return null; // Return null if the image fails to load
  }
};
