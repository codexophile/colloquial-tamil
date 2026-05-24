const audioFiles = import.meta.glob('../../../assets/audio/track-00-*.mp3', {
  eager: true,
  import: 'default',
});

const assertFileName = (fileName: string): void => {
  if (fileName.includes('/') || fileName.includes('\\')) {
    throw new Error(`Expected a file name, got a path: ${fileName}`);
  }
};

export const trackAudio = (fileName: string): string => {
  assertFileName(fileName);

  const filePath = `../../../assets/audio/${fileName}`;
  const audioUrl = audioFiles[filePath];

  if (!audioUrl) {
    throw new Error(`Missing audio asset: ${filePath}`);
  }

  return audioUrl as string;
};

export const trackTranscript = (fileName: string): string => {
  assertFileName(fileName);

  return `#file:${fileName}`;
};
