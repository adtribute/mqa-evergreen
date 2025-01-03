import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import isEmpty from 'lodash.isempty';
import uniqBy from 'lodash.uniqby';
import FileRejectionReason from '../../../constants/src/FileRejectionReason';
import hasValue from '../../../lib/has-value';
import { getAcceptedTypesMessage, getFileSizeMessage, getMaxFilesMessage } from './messages';
/**
 * @typedef {object} FileRejection
 * @property {File} file
 * @property {string} message Informative message to display to the user for why the file was rejected
 * @property {string} reason Error code/enum to denote why the file was rejected
 */

/**
 * Returns a list of objects containing rejected files and why they were rejected based on the provided options
 * @param {File[]} files
 * @param {import('./split-files').SplitFilesOptions | undefined} options
 * @returns {FileRejection[]}
 */

var getFileRejections = function getFileRejections(files, options) {
  if (options == null || isEmpty(files)) {
    return [];
  }

  var acceptedMimeTypes = options.acceptedMimeTypes,
      currentCount = options.currentFileCount,
      maxFiles = options.maxFiles,
      maxSizeInBytes = options.maxSizeInBytes;
  var typeRejections = files.map(function (file) {
    if (isEmpty(acceptedMimeTypes) || acceptedMimeTypes !== null && acceptedMimeTypes !== void 0 && acceptedMimeTypes.some(function (type) {
      return file.type === type;
    })) {
      return;
    }

    return {
      file: file,
      reason: FileRejectionReason.InvalidFileType,
      message: "This file is not an accepted format. ".concat(getAcceptedTypesMessage(acceptedMimeTypes))
    };
  });
  var sizeRejections = files.map(function (file) {
    if (maxSizeInBytes == null || maxSizeInBytes === 0 || file.size <= maxSizeInBytes) {
      return;
    }

    return {
      file: file,
      reason: FileRejectionReason.FileTooLarge,
      message: "This file is too big. ".concat(getFileSizeMessage(maxSizeInBytes))
    };
  });
  var countRejections = files.map(function (file, index) {
    if (maxFiles == null) {
      return;
    }

    var fileNumber = index + 1;

    if ((currentCount !== null && currentCount !== void 0 ? currentCount : 0) + fileNumber <= maxFiles) {
      return;
    }

    return {
      file: file,
      reason: FileRejectionReason.OverFileLimit,
      message: getMaxFilesMessage(maxFiles)
    };
  }); // Type rejections are arguably more important than size rejections, so those will take priority

  var fileRejections = [].concat(_toConsumableArray(typeRejections), _toConsumableArray(sizeRejections), _toConsumableArray(countRejections)).filter(hasValue);
  return uniqBy(fileRejections, function (rejection) {
    return rejection.file;
  });
};

export default getFileRejections;