// @flow strict
/**
 * Return an object encapsulating a high-resolution time.
 * @param hrtime High resolution time returned from `process.hrtime`
 */
export function convertHRTime( hrtime ) {
  const
    ns = ( hrtime[0] * 1e9 ) + hrtime[1],
    ms = ns / 1e6,
    s = ns / 1e9

  return {
    ns,
    ms,
    s
  }
}
