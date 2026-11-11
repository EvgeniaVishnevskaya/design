const shortWords = /(^|[\s(«„])(а|без|в|во|для|до|за|и|из|к|ко|на|над|о|об|от|по|под|при|про|с|со|у)\s+(?=[А-Яа-яЁёA-Za-z0-9])/giu;

export function nbsp(text: string) {
  let result = text;
  let next = result.replace(shortWords, '$1$2\u00a0');
  while (next !== result) {
    result = next;
    next = result.replace(shortWords, '$1$2\u00a0');
  }
  return result;
}
