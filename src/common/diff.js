import differ from 'deep-diff';
export function render(diff) {
  const { kind, path, lhs, rhs, index, item } = diff;

  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '→', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [`${path.join('.')}[${index}]`, item];
    default:
      return [];
  }
}
export function diffLogger(prevState, newState, logger = console) {
  const diff = differ(prevState, newState);

  try {
    logger.group('diff');
  } catch (e) {
    logger.log('diff');
  }

  if (diff) {
    diff.forEach(elem => {
      const { kind } = elem;
      const output = render(elem);

      logger.log(`%c ${dictionary[kind].text}`, ...output);
    });
  } else {
    logger.log('—— no diff ——');
  }

  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— diff end —— ');
  }
}
