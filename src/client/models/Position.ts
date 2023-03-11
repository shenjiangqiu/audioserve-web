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
 * Playback position
 * @export
 * @interface Position
 */
export interface Position {
    /**
     * Position timestamp - unix time in ms
     * Timestamp is generated on server, so if you post new  position 
     * it is used to check, if there is not newer position, 
     * but actual value then is assigned by server
     * @type {number}
     * @memberof Position
     */
    timestamp: number;
    /**
     * Collection number (index in names from response in /collections endpoint)
     * @type {number}
     * @memberof Position
     */
    collection: number;
    /**
     * Audio folder path
     * @type {string}
     * @memberof Position
     */
    folder: string;
    /**
     * Audio file (or chapter)
     * @type {string}
     * @memberof Position
     */
    file: string;
    /**
     * Folder was listened to the end
     * @type {boolean}
     * @memberof Position
     */
    folderFinished?: boolean;
    /**
     * Position in audiofile in seconds
     * @type {number}
     * @memberof Position
     */
    position: number;
}

/**
 * Check if a given object implements the Position interface.
 */
export function instanceOfPosition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "collection" in value;
    isInstance = isInstance && "folder" in value;
    isInstance = isInstance && "file" in value;
    isInstance = isInstance && "position" in value;

    return isInstance;
}

export function PositionFromJSON(json: any): Position {
    return PositionFromJSONTyped(json, false);
}

export function PositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Position {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'collection': json['collection'],
        'folder': json['folder'],
        'file': json['file'],
        'folderFinished': !exists(json, 'folder_finished') ? undefined : json['folder_finished'],
        'position': json['position'],
    };
}

export function PositionToJSON(value?: Position | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timestamp': value.timestamp,
        'collection': value.collection,
        'folder': value.folder,
        'file': value.file,
        'folder_finished': value.folderFinished,
        'position': value.position,
    };
}

