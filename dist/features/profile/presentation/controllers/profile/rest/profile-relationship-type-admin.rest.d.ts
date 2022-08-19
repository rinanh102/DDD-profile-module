import { SortInput } from '@cbidigital/aqua/database/query-util';
import { CacheStore } from '@heronjs/common';
import { CreateProfileRelationshipTypeUseCaseInput, ICreateProfileRelationshipTypeUseCase, IDeleteProfileRelationshipTypeUseCase, IUpdateProfileRelationshipTypeUseCase } from '../../../../app/usecases/profile-relationship-type/command';
import { IGetListProfileRelationshipTypesUseCase, IGetProfileRelationshipTypeUseCase } from '../../../../app/usecases/profile-relationship-type/query';
export declare class ProfileRelationshipTypeAminRest {
    readonly cacheStore: CacheStore;
    private readonly _createProfileRelationshipTypeUseCase;
    private readonly _updateProfileRelationshipTypeUseCase;
    private readonly _deleteProfileRelationshipTypeUseCase;
    private readonly _getProfileRelationshipTypeUseCase;
    private readonly _getListProfileRelationshipTypeUseCase;
    constructor(cacheStore: CacheStore, _createProfileRelationshipTypeUseCase: ICreateProfileRelationshipTypeUseCase, _updateProfileRelationshipTypeUseCase: IUpdateProfileRelationshipTypeUseCase, _deleteProfileRelationshipTypeUseCase: IDeleteProfileRelationshipTypeUseCase, _getProfileRelationshipTypeUseCase: IGetProfileRelationshipTypeUseCase, _getListProfileRelationshipTypeUseCase: IGetListProfileRelationshipTypesUseCase);
    create(body: CreateProfileRelationshipTypeUseCaseInput, authId: string): Promise<import("../../../../domain/dtos").ProfileRelationshipTypeDto>;
    update(id: string, body: any, authId: string): Promise<import("../../../../domain/dtos").ProfileRelationshipTypeDto>;
    delete(id: string, authId: string): Promise<void>;
    getProfileById(id: string, authId: string): Promise<import("../../../../domain/dtos").ProfileRelationshipTypeDto>;
    findAll(filter: object, offset: number, limit: number, sort: SortInput, authId: string): Promise<import("../../../../app/usecases/profile-relationship-type/query").GetListProfileRelationshipTypesUseCaseOutput>;
}
