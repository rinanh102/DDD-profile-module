import { IGetEavAttributeUseCase, IGetListEavAttributeUseCase } from '@cbidigital/aqua';
import { SortInput } from '@cbidigital/aqua/database/query-util';
import {
    Body,
    CacheLookup,
    CacheStore,
    Delete,
    Get,
    Guard,
    Inject,
    Param,
    Patch,
    Post,
    Principal,
    Query,
    Rest,
} from '@heronjs/common';
import { StatusCodes } from 'http-status-codes';
import { ProfileTokens } from '../../../../../../constants';
import {
    CreateProfileUseCaseInput,
    ICreateProfileUseCase,
    IDeleteProfileUseCase,
    IUpdateprofileUseCase,
} from '../../../../app/usecases/profile/command';
import {
    IGetListProfilesOfUserUseCase,
    IGetListProfilesUseCase,
    IGetProfileUseCase,
} from '../../../../app/usecases/profile/query';

@Rest('/profiles')
export class ProfileRest {
    constructor(
        @CacheLookup() readonly cacheStore: CacheStore,
        @Inject(ProfileTokens.Usecase.CREATE_PROFILE)
        private readonly _createProfileUseCase: ICreateProfileUseCase,
        @Inject(ProfileTokens.Usecase.UPDATE_PROFILE)
        private readonly _updateProfileUseCase: IUpdateprofileUseCase,
        @Inject(ProfileTokens.Usecase.DELETE_PROFILE)
        private readonly _deleteProfileUseCase: IDeleteProfileUseCase,
        @Inject(ProfileTokens.Usecase.GET_PROFILE_BY_ID)
        private readonly _getProfileUseCase: IGetProfileUseCase,
        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILES)
        private readonly _getListProfileUseCase: IGetListProfilesUseCase,
        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILES_OF_USER)
        private readonly _getListProfileOfUserUseCase: IGetListProfilesOfUserUseCase,

        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILE_ATTRIBUTE)
        private readonly _getProfileAttributeUseCase: IGetEavAttributeUseCase,
        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILE_ATTRIBUTE)
        private readonly _getListProfileAttributeUseCase: IGetListEavAttributeUseCase,
    ) {}

    @Post({ uri: '/' })
    @Guard({ private: true })
    public async create(@Body() body: CreateProfileUseCaseInput, @Principal('sub') authId: string) {
        body.userId = authId;
        body.parentId = undefined; // user cannot pass parentId in input
        return this._createProfileUseCase.exec(body, {
            auth: {
                authId,
            },
        });
    }

    @Patch({ uri: '/:id' })
    @Guard({ private: true })
    public async update(@Param('id') id: string, @Body() body: any, @Principal('sub') authId: string) {
        return this._updateProfileUseCase.exec(
            {
                ...body,
                id,
            },
            {
                auth: {
                    authId,
                },
            },
        );
    }

    @Delete({ uri: '/:id', code: StatusCodes.NO_CONTENT })
    @Guard({ private: true })
    public async delete(@Param('id') id: string, @Principal('sub') authId: string) {
        return this._deleteProfileUseCase.exec(
            {
                id,
            },
            {
                auth: {
                    authId,
                },
            },
        );
    }

    @Get({ uri: '/:id' })
    @Guard({ private: true })
    public async getProfileById(@Param('id') id: string, @Principal('sub') authId: string) {
        return this._getProfileUseCase.exec(id, {
            auth: {
                authId,
            },
        });
    }

    @Get({ uri: '/' })
    @Guard({ private: true })
    public async findAll(
        @Query('filter') filter: object,
        @Query('offset') offset: number,
        @Query('limit') limit: number,
        @Query('sort') sort: SortInput,
        @Principal('sub') authId: string,
    ) {
        return this._getListProfileOfUserUseCase.exec(
            {
                offset,
                limit,
                sort,
                filter,
            },
            {
                auth: {
                    authId,
                },
            },
        );
    }
}
