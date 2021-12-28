/* tslint:disable */
/* eslint-disable */
/**
 * audioserve API
 * REST API for audioserve
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AudioFile,
    AudioFileFromJSON,
    AudioFileFromJSONTyped,
    AudioFileToJSON,
} from './AudioFile';
import {
    Subfolder,
    SubfolderFromJSON,
    SubfolderFromJSONTyped,
    SubfolderToJSON,
} from './Subfolder';
import {
    TypedFile,
    TypedFileFromJSON,
    TypedFileFromJSONTyped,
    TypedFileToJSON,
} from './TypedFile';

/**
 * 
 * @export
 * @interface AudioFolder
 */
export interface AudioFolder {
    /**
     * Is virtual folder - e.g. representing big chapterized file (.m4b etc.)
     * @type {boolean}
     * @memberof AudioFolder
     */
    isFile?: boolean;
    /**
     * last modification timestamp (unix time in miliseconds)
     * @type {number}
     * @memberof AudioFolder
     */
    modified?: number;
    /**
     * Total playback time of the audiofolder in seconds
     * @type {number}
     * @memberof AudioFolder
     */
    totalTime?: number;
    /**
     * 
     * @type {Array<Subfolder>}
     * @memberof AudioFolder
     */
    subfolders?: Array<Subfolder>;
    /**
     * 
     * @type {Array<AudioFile>}
     * @memberof AudioFolder
     */
    files?: Array<AudioFile>;
    /**
     * 
     * @type {TypedFile}
     * @memberof AudioFolder
     */
    cover?: TypedFile | null;
    /**
     * 
     * @type {TypedFile}
     * @memberof AudioFolder
     */
    description?: TypedFile | null;
    /**
     * Metadata tags for this folders - map of name to value
     * @type {object}
     * @memberof AudioFolder
     */
    tags?: object | null;
}

export function AudioFolderFromJSON(json: any): AudioFolder {
    return AudioFolderFromJSONTyped(json, false);
}

export function AudioFolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): AudioFolder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isFile': !exists(json, 'is_file') ? undefined : json['is_file'],
        'modified': !exists(json, 'modified') ? undefined : json['modified'],
        'totalTime': !exists(json, 'total_time') ? undefined : json['total_time'],
        'subfolders': !exists(json, 'subfolders') ? undefined : ((json['subfolders'] as Array<any>).map(SubfolderFromJSON)),
        'files': !exists(json, 'files') ? undefined : ((json['files'] as Array<any>).map(AudioFileFromJSON)),
        'cover': !exists(json, 'cover') ? undefined : TypedFileFromJSON(json['cover']),
        'description': !exists(json, 'description') ? undefined : TypedFileFromJSON(json['description']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function AudioFolderToJSON(value?: AudioFolder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_file': value.isFile,
        'modified': value.modified,
        'total_time': value.totalTime,
        'subfolders': value.subfolders === undefined ? undefined : ((value.subfolders as Array<any>).map(SubfolderToJSON)),
        'files': value.files === undefined ? undefined : ((value.files as Array<any>).map(AudioFileToJSON)),
        'cover': TypedFileToJSON(value.cover),
        'description': TypedFileToJSON(value.description),
        'tags': value.tags,
    };
}

