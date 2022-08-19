import {
    CreateEavAttributeUseCaseInput,
    ICreateEavAttributeUseCase,
    IDeleteEavAttributeUseCase,
    IGetEavAttributeUseCase,
    IGetListEavAttributeUseCase,
    IUpdateEavAttributeUseCase,
} from '@cbidigital/aqua';
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
import { IGetListProfilesUseCase, IGetProfileUseCase } from '../../../../app/usecases/profile/query';

@Rest('/admin/profiles')
export class ProfileAdminRest {
    constructor(
        @CacheLookup() readonly cacheStore: CacheStore,
        @Inject(ProfileTokens.Usecase.CREATE_PROFILE_ATTRIBUTE)
        private readonly _createProfileAttributeUseCase: ICreateEavAttributeUseCase,
        @Inject(ProfileTokens.Usecase.UPDATE_PROFILE_ATTRIBUTE)
        private readonly _updateProfileAttributeUseCase: IUpdateEavAttributeUseCase,
        @Inject(ProfileTokens.Usecase.DELETE_PROFILE_ATTRIBUTE)
        private readonly _deleteProfileAttributeUseCase: IDeleteEavAttributeUseCase,
        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILE_ATTRIBUTE)
        private readonly _getProfileAttributeUseCase: IGetEavAttributeUseCase,
        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILE_ATTRIBUTE)
        private readonly _getListProfileAttributeUseCase: IGetListEavAttributeUseCase,

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
    ) {}

    @Post({ uri: '/attributes/' })
    @Guard({ private: true })
    public async createAttribute(
        @Body() body: CreateEavAttributeUseCaseInput,
        @Principal('sub') authId: string,
    ) {
        return this._createProfileAttributeUseCase.exec(body, {
            auth: {
                authId,
            },
        });
    }

    @Patch({ uri: '/attributes/:id' })
    @Guard({ private: true })
    public async updateAttribute(
        @Param('id') id: string,
        @Body() body: any,
        @Principal('sub') authId: string,
    ) {
        return this._updateProfileAttributeUseCase.exec(
            {
                ...body,
                code: id,
            },
            {
                auth: {
                    authId,
                },
            },
        );
    }

    @Delete({ uri: '/attributes/:id', code: StatusCodes.NO_CONTENT })
    @Guard({ private: true })
    public async deleteAttribute(@Param('id') id: string, @Principal('sub') authId: string) {
        return this._deleteProfileAttributeUseCase.exec(
            {
                code: id,
            },
            {
                auth: {
                    authId,
                },
            },
        );
    }

    @Get({ uri: '/attributes/:code' })
    @Guard({ private: true })
    public async getAttributeByCode(@Param('code') code: string, @Principal('sub') authId: string) {
        return this._getProfileAttributeUseCase.exec(code, {
            auth: {
                authId,
            },
        });
    }
    @Get({ uri: '/attributes' })
    @Guard({ private: true })
    public async getListAttribute(
        @Query('filter') filter: object,
        @Query('offset') offset: number,
        @Query('limit') limit: number,
        @Query('sort') sort: SortInput,
        @Principal('sub') authId: string,
    ) {
        return this._getListProfileAttributeUseCase.exec(
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

    @Post({ uri: '/' })
    @Guard({ private: true })
    public async create(@Body() body: CreateProfileUseCaseInput, @Principal('sub') authId: string) {
        body.userId = null;
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
        return this._getListProfileUseCase.exec(
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
