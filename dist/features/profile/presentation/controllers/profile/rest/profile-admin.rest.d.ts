import { CreateEavAttributeUseCaseInput, ICreateEavAttributeUseCase, IDeleteEavAttributeUseCase, IGetEavAttributeUseCase, IGetListEavAttributeUseCase, IUpdateEavAttributeUseCase } from '@cbidigital/aqua';
import { SortInput } from '@cbidigital/aqua/database/query-util';
import { CacheStore } from '@heronjs/common';
import { CreateProfileUseCaseInput, ICreateProfileUseCase, IDeleteProfileUseCase, IUpdateprofileUseCase } from '../../../../app/usecases/profile/command';
import { IGetListProfilesUseCase, IGetProfileUseCase } from '../../../../app/usecases/profile/query';
export declare class ProfileAdminRest {
    readonly cacheStore: CacheStore;
    private readonly _createProfileAttributeUseCase;
    private readonly _updateProfileAttributeUseCase;
    private readonly _deleteProfileAttributeUseCase;
    private readonly _getProfileAttributeUseCase;
    private readonly _getListProfileAttributeUseCase;
    private readonly _createProfileUseCase;
    private readonly _updateProfileUseCase;
    private readonly _deleteProfileUseCase;
    private readonly _getProfileUseCase;
    private readonly _getListProfileUseCase;
    constructor(cacheStore: CacheStore, _createProfileAttributeUseCase: ICreateEavAttributeUseCase, _updateProfileAttributeUseCase: IUpdateEavAttributeUseCase, _deleteProfileAttributeUseCase: IDeleteEavAttributeUseCase, _getProfileAttributeUseCase: IGetEavAttributeUseCase, _getListProfileAttributeUseCase: IGetListEavAttributeUseCase, _createProfileUseCase: ICreateProfileUseCase, _updateProfileUseCase: IUpdateprofileUseCase, _deleteProfileUseCase: IDeleteProfileUseCase, _getProfileUseCase: IGetProfileUseCase, _getListProfileUseCase: IGetListProfilesUseCase);
    createAttribute(body: CreateEavAttributeUseCaseInput, authId: string): Promise<import("@cbidigital/aqua").EavAttributeDTO>;
    updateAttribute(id: string, body: any, authId: string): Promise<import("@cbidigital/aqua").EavAttributeDTO>;
    deleteAttribute(id: string, authId: string): Promise<void>;
    getAttributeByCode(code: string, authId: string): Promise<import("@cbidigital/aqua").EavAttributeDTO>;
    getListAttribute(filter: object, offset: number, limit: number, sort: SortInput, authId: string): Promise<import("@cbidigital/aqua/eav/usecases/query/types").GetListEavAttributeUseCaseOutput>;
    create(body: CreateProfileUseCaseInput, authId: string): Promise<import("../../../../domain/dtos").ProfileDto>;
    update(id: string, body: any, authId: string): Promise<import("../../../../domain/dtos").ProfileDto>;
    delete(id: string, authId: string): Promise<void>;
    getProfileById(id: string, authId: string): Promise<import("../../../../domain/dtos").ProfileDto>;
    findAll(filter: object, offset: number, limit: number, sort: SortInput, authId: string): Promise<import("../../../../app/usecases/profile/query/types").GetListProfilesUseCaseOutput>;
}
