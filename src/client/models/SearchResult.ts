/* tslint:disable */
/* eslint-disable */
/**
 * audioserve API
 * REST API for audioserve
 *
 * The version of the OpenAPI document: 1.2.0
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

/**
 * 
 * @export
 * @interface SearchResult
 */
export interface SearchResult {
    /**
     * Not used now, only subfolders are searched
     * @type {Array<AudioFile>}
     * @memberof SearchResult
     */
    files?: Array<AudioFile>;
    /**
     * 
     * @type {Array<Subfolder>}
     * @memberof SearchResult
     */
    subfolders?: Array<Subfolder>;
}

export function SearchResultFromJSON(json: any): SearchResult {
    return SearchResultFromJSONTyped(json, false);
}

export function SearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'files': !exists(json, 'files') ? undefined : ((json['files'] as Array<any>).map(AudioFileFromJSON)),
        'subfolders': !exists(json, 'subfolders') ? undefined : ((json['subfolders'] as Array<any>).map(SubfolderFromJSON)),
    };
}

export function SearchResultToJSON(value?: SearchResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'files': value.files === undefined ? undefined : ((value.files as Array<any>).map(AudioFileToJSON)),
        'subfolders': value.subfolders === undefined ? undefined : ((value.subfolders as Array<any>).map(SubfolderToJSON)),
    };
}

