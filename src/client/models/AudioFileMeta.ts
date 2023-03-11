/* tslint:disable */
/* eslint-disable */
/**
 * audioserve API
 * REST API for audioserve
 *
 * The version of the OpenAPI document: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AudioFileMeta
 */
export interface AudioFileMeta {
    /**
     * Duration of audio file in seconds
     * @type {number}
     * @memberof AudioFileMeta
     */
    duration?: number;
    /**
     * Encoding bitrate of file - original, before transcoding
     * @type {number}
     * @memberof AudioFileMeta
     */
    bitrate?: number;
    /**
     * Metadata tags as map of name to value
     * @type {object}
     * @memberof AudioFileMeta
     */
    tags?: object | null;
}

/**
 * Check if a given object implements the AudioFileMeta interface.
 */
export function instanceOfAudioFileMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AudioFileMetaFromJSON(json: any): AudioFileMeta {
    return AudioFileMetaFromJSONTyped(json, false);
}

export function AudioFileMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AudioFileMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'bitrate': !exists(json, 'bitrate') ? undefined : json['bitrate'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function AudioFileMetaToJSON(value?: AudioFileMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'bitrate': value.bitrate,
        'tags': value.tags,
    };
}

