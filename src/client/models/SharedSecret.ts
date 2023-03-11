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
 * @interface SharedSecret
 */
export interface SharedSecret {
    /**
     * Salted shared secret
     * @type {string}
     * @memberof SharedSecret
     */
    secret: string;
}

/**
 * Check if a given object implements the SharedSecret interface.
 */
export function instanceOfSharedSecret(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "secret" in value;

    return isInstance;
}

export function SharedSecretFromJSON(json: any): SharedSecret {
    return SharedSecretFromJSONTyped(json, false);
}

export function SharedSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secret': json['secret'],
    };
}

export function SharedSecretToJSON(value?: SharedSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secret': value.secret,
    };
}

