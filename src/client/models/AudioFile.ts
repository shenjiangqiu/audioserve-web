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
    AudioFileMeta,
    AudioFileMetaFromJSON,
    AudioFileMetaFromJSONTyped,
    AudioFileMetaToJSON,
} from './AudioFileMeta';
import {
    AudioFileSection,
    AudioFileSectionFromJSON,
    AudioFileSectionFromJSONTyped,
    AudioFileSectionToJSON,
} from './AudioFileSection';

/**
 * 
 * @export
 * @interface AudioFile
 */
export interface AudioFile {
    /**
     * 
     * @type {string}
     * @memberof AudioFile
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AudioFile
     */
    path: string;
    /**
     * 
     * @type {AudioFileMeta}
     * @memberof AudioFile
     */
    meta?: AudioFileMeta | null;
    /**
     * Mime type of audio file (before transcoding)
     * @type {string}
     * @memberof AudioFile
     */
    mime: string;
    /**
     * 
     * @type {AudioFileSection}
     * @memberof AudioFile
     */
    section?: AudioFileSection | null;
}

export function AudioFileFromJSON(json: any): AudioFile {
    return AudioFileFromJSONTyped(json, false);
}

export function AudioFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): AudioFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'path': json['path'],
        'meta': !exists(json, 'meta') ? undefined : AudioFileMetaFromJSON(json['meta']),
        'mime': json['mime'],
        'section': !exists(json, 'section') ? undefined : AudioFileSectionFromJSON(json['section']),
    };
}

export function AudioFileToJSON(value?: AudioFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'path': value.path,
        'meta': AudioFileMetaToJSON(value.meta),
        'mime': value.mime,
        'section': AudioFileSectionToJSON(value.section),
    };
}

