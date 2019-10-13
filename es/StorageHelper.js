function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */
import AsyncStorage from '@react-native-community/async-storage';

var dataMemory = {};

/** @class */

var MemoryStorage = function () {
  function MemoryStorage() {
    _classCallCheck(this, MemoryStorage);
  }

  /**
   * This is used to set a specific item in storage
   * @param {string} key - the key for the item
   * @param {object} value - the value
   * @returns {string} value that was set
   */
  MemoryStorage.setItem = function setItem(key, value) {
    dataMemory[key] = value;
    return dataMemory[key];
  };

  /**
   * This is used to get a specific key from storage
   * @param {string} key - the key for the item
   * This is used to clear the storage
   * @returns {string} the data item
   */


  MemoryStorage.getItem = function getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
  };

  /**
   * This is used to remove an item from storage
   * @param {string} key - the key being set
   * @returns {string} value - value that was deleted
   */


  MemoryStorage.removeItem = function removeItem(key) {
    return delete dataMemory[key];
  };

  /**
   * This is used to clear the storage
   * @returns {string} nothing
   */


  MemoryStorage.clear = function clear() {
    dataMemory = {};
    return dataMemory;
  };

  return MemoryStorage;
}();

/** @class */


var LocalAsyncStorage = function () {
  function LocalAsyncStorage() {
    _classCallCheck(this, LocalAsyncStorage);
  }

  /**
   * This is used to set a specific item in storage
   * @param {string} key - the key for the item
   * @param {object} value - the value
   * @returns {string} value that was set
   */
  LocalAsyncStorage.setItem = function setItem(key, value) {

    AsyncStorage.setItem(key, value).then(function (response) {
      console.log('stored key');
      console.log(response);
    }).catch(function (err) {
      console.log(err);
    });
    // dataMemory[key] = value;
    // return dataMemory[key];
  };

  /**
   * This is used to get a specific key from storage
   * @param {string} key - the key for the item
   * This is used to clear the storage
   * @returns {string} the data item
   */


  LocalAsyncStorage.getItem = function getItem(key) {
    AsyncStorage.setItem(key, value).then(function (response) {
      console.log('stored key');
      console.log(response);
    }).catch(function (err) {
      console.log(err);
    });
    //return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
  };

  /**
   * This is used to remove an item from storage
   * @param {string} key - the key being set
   * @returns {string} value - value that was deleted
   */


  LocalAsyncStorage.removeItem = function removeItem(key) {
    AsyncStorage.setItem(key, '').then(function (response) {
      console.log('deleted key');
      console.log(response);
    }).catch(function (err) {
      console.log(err);
    });
    //return delete dataMemory[key];
  };

  /**
   * This is used to clear the storage
   * @returns {string} nothing
   */


  LocalAsyncStorage.clear = function clear() {
    dataMemory = {};
    return dataMemory;
  };

  return LocalAsyncStorage;
}();

/** @class */


var StorageHelper = function () {

  /**
   * This is used to get a storage object
   * @returns {object} the storage
   */
  function StorageHelper() {
    _classCallCheck(this, StorageHelper);

    try {
      this.storageWindow = LocalAsyncStorage;
      this.storageWindow.setItem('aws.cognito.test-ls', 1);
      this.storageWindow.removeItem('aws.cognito.test-ls');
    } catch (exception) {
      this.storageWindow = MemoryStorage;
    }
  }

  /**
   * This is used to return the storage
   * @returns {object} the storage
   */


  StorageHelper.prototype.getStorage = function getStorage() {
    return this.storageWindow;
  };

  return StorageHelper;
}();

export default StorageHelper;