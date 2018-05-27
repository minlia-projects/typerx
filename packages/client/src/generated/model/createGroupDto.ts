/**
 * rest api interface
 * 项目标准接口
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * 
 */
export interface CreateGroupDto {
    /**
     * 
     */
    outid?: number;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    icon?: string;
    /**
     * 
     */
    parent?: string;
    /**
     * 
     */
    paths?: Array<any>;
    /**
     * 
     */
    director?: string;
    /**
     * 
     */
    order: number;
    /**
     * 
     */
    isRegion?: boolean;
    /**
     * 
     */
    description?: string;
}