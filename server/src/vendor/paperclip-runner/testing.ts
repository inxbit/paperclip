/**
 * Source-mode test shim for the runner package's explicit testing surface.
 *
 * Server tests do not build workspace dependencies first, so keep their
 * imports on the same relative source boundary as the production shim.
 */
export * from "../../../../packages/paperclip-runner/src/testing.js";
