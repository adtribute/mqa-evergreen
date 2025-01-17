import getAcceptedFiles from './get-accepted-files';
import getFileRejections from './get-file-rejections';
/**
 * @typedef {object} SplitFilesOptions
 * @property {string[] | undefined} acceptedMimeTypes
 * @property {number | undefined} currentFileCount Current count of files used for validating whether the dropped files are over the `maxFiles` limit
 * @property {number | undefined} maxFiles
 * @property {number | undefined} maxSizeInBytes
 */

/**
 * @typedef {object} SplitFilesResult
 * @property {File[]} accepted
 * @property {import('./get-file-rejections').FileRejection[]} rejected
 */

/**
 * Returns separate arrays for accepted and rejected files based on the provided options.
 * This should be used for accepting and rejecting files on drop
 * @param {File[]} files
 * @param {SplitFilesOptions | undefined} options
 * @returns {SplitFilesResult}
 */

var splitFiles = function splitFiles(files, options) {
  var accepted = getAcceptedFiles(files, options);
  var rejected = getFileRejections(files, options);
  return {
    accepted: accepted,
    rejected: rejected
  };
};

export default splitFiles;