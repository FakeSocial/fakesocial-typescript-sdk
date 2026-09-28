/**
 * @deprecated FakeSocial (fakesocial.fr) has shut down. `fakesocial-ts` is no longer
 * maintained and the API is offline. Do not use for new projects.
 * This package is kept for archival purposes only.
 *
 * Entry point re-exporting the Fake Social SDK client, error classes, and type definitions.
 */
if (
  typeof console !== "undefined" &&
  typeof process !== "undefined" &&
  !process.env.FAKESOCIAL_SUPPRESS_DEPRECATION_WARNING
) {
  console.warn(
    "[fakesocial-ts] DEPRECATED: FakeSocial has shut down (fakesocial.fr). This SDK is no longer maintained and the API is offline. Set FAKESOCIAL_SUPPRESS_DEPRECATION_WARNING=1 to silence this warning.",
  );
}

export * from "./client";
export * from "./errors";
export * from "./types";
