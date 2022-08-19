import { SortInput } from '@cbidigital/aqua/database/query-util';
import { CacheStore } from '@heronjs/common';
import { IGetListProfileRelationshipTypesUseCase, IGetProfileRelationshipTypeUseCase } from '../../../../app/usecases/profile-relationship-type/query';
export declare class ProfileRelationshipTypeRest {
    readonly cacheStore: CacheStore;
    private readonly _getProfileRelationshipTypeUseCase;
    private readonly _getListProfileRelationshipTypeUseCase;
    constructor(cacheStore: CacheStore, _getProfileRelationshipTypeUseCase: IGetProfileRelationshipTypeUseCase, _getListProfileRelationshipTypeUseCase: IGetListProfileRelationshipTypesUseCase);
    getProfileById(id: string, authId: string): Promise<import("../../../../domain/dtos").ProfileRelationshipTypeDto>;
    findAll(filter: object, offset: number, limit: number, sort: SortInput, authId: string): Promise<import("../../../../app/usecases/profile-relationship-type/query").GetListProfileRelationshipTypesUseCaseOutput>;
}
