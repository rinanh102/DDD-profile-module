import { IGetEavAttributeUseCase, IGetListEavAttributeUseCase } from '@cbidigital/aqua';
import { SortInput } from '@cbidigital/aqua/database/query-util';
import { CacheStore } from '@heronjs/common';
import { CreateProfileUseCaseInput, ICreateProfileUseCase, IDeleteProfileUseCase, IUpdateprofileUseCase } from '../../../../app/usecases/profile/command';
import { IGetListProfilesOfUserUseCase, IGetListProfilesUseCase, IGetProfileUseCase } from '../../../../app/usecases/profile/query';
export declare class ProfileRest {
    readonly cacheStore: CacheStore;
    private readonly _createProfileUseCase;
    private readonly _updateProfileUseCase;
    private readonly _deleteProfileUseCase;
    private readonly _getProfileUseCase;
    private readonly _getListProfileUseCase;
    private readonly _getListProfileOfUserUseCase;
    private readonly _getProfileAttributeUseCase;
    private readonly _getListProfileAttributeUseCase;
    constructor(cacheStore: CacheStore, _createProfileUseCase: ICreateProfileUseCase, _updateProfileUseCase: IUpdateprofileUseCase, _deleteProfileUseCase: IDeleteProfileUseCase, _getProfileUseCase: IGetProfileUseCase, _getListProfileUseCase: IGetListProfilesUseCase, _getListProfileOfUserUseCase: IGetListProfilesOfUserUseCase, _getProfileAttributeUseCase: IGetEavAttributeUseCase, _getListProfileAttributeUseCase: IGetListEavAttributeUseCase);
    create(body: CreateProfileUseCaseInput, authId: string): Promise<import("../../../../domain/dtos").ProfileDto>;
    update(id: string, body: any, authId: string): Promise<import("../../../../domain/dtos").ProfileDto>;
    delete(id: string, authId: string): Promise<void>;
    getProfileById(id: string, authId: string): Promise<import("../../../../domain/dtos").ProfileDto>;
    findAll(filter: object, offset: number, limit: number, sort: SortInput, authId: string): Promise<import("../../../../app/usecases/profile/query/types").GetListProfilesOfUserUseCaseOutput>;
}
