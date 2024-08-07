export const loadImage = async (fileName, screenSize, isRetina) => {
  if (!fileName || fileName === 'noImage') {
    return null; // Fallback pentru cazul în care nu este specificată nicio imagine
  }

  const suffix = isRetina ? '@2x' : '';
  try {
    const image = await import(`./${screenSize}/${fileName}${suffix}.jpg`);
    return image.default;
  } catch (error) {
    console.error(`Error loading image: ${fileName}`, error);
    return null;
  }
};
