import { SortInput } from '@cbidigital/aqua/database/query-util';
import { CacheStore } from '@heronjs/common';
import { CreateProfileUseCaseInput, ICreateProfileUseCase, IDeleteProfileUseCase, IUpdateprofileUseCase } from '../../../../app/usecases/profile/command';
import { IGetListProfilesOfUserUseCase, IGetListProfilesUseCase, IGetProfileUseCase } from '../../../../app/usecases/profile/query';
export declare class ProfileInternalRest {
    readonly cacheStore: CacheStore;
    private readonly _createProfileUseCase;
    private readonly _updateProfileUseCase;
    private readonly _deleteProfileUseCase;
    private readonly _getProfileUseCase;
    private readonly _getListProfileUseCase;
    private readonly _getListProfileOfUserUseCase;
    constructor(cacheStore: CacheStore, _createProfileUseCase: ICreateProfileUseCase, _updateProfileUseCase: IUpdateprofileUseCase, _deleteProfileUseCase: IDeleteProfileUseCase, _getProfileUseCase: IGetProfileUseCase, _getListProfileUseCase: IGetListProfilesUseCase, _getListProfileOfUserUseCase: IGetListProfilesOfUserUseCase);
    create(body: CreateProfileUseCaseInput): Promise<import("../../../../domain/dtos").ProfileDto>;
    update(id: string, body: any): Promise<import("../../../../domain/dtos").ProfileDto>;
    updateByUserId(userId: string, body: any): Promise<import("../../../../domain/dtos").ProfileDto>;
    delete(id: string): Promise<void>;
    getProfileById(id: string): Promise<import("../../../../domain/dtos").ProfileDto>;
    findAll(filter: object, offset: number, limit: number, sort: SortInput): Promise<import("../../../../app/usecases/profile/query/types").GetListProfilesUseCaseOutput>;
}
