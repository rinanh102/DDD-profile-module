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
    CreateProfileRelationshipTypeUseCaseInput,
    ICreateProfileRelationshipTypeUseCase,
    IDeleteProfileRelationshipTypeUseCase,
    IUpdateProfileRelationshipTypeUseCase,
} from '../../../../app/usecases/profile-relationship-type/command';
import {
    IGetListProfileRelationshipTypesUseCase,
    IGetProfileRelationshipTypeUseCase,
} from '../../../../app/usecases/profile-relationship-type/query';

@Rest('/admin/profile-relationship-types')
export class ProfileRelationshipTypeAminRest {
    constructor(
        @CacheLookup() readonly cacheStore: CacheStore,
        @Inject(ProfileTokens.Usecase.CREATE_PROFILE_RELATIONSHIP_TYPE)
        private readonly _createProfileRelationshipTypeUseCase: ICreateProfileRelationshipTypeUseCase,
        @Inject(ProfileTokens.Usecase.UPDATE_PROFILE_RELATIONSHIP_TYPE)
        private readonly _updateProfileRelationshipTypeUseCase: IUpdateProfileRelationshipTypeUseCase,
        @Inject(ProfileTokens.Usecase.DELETE_PROFILE_RELATIONSHIP_TYPE)
        private readonly _deleteProfileRelationshipTypeUseCase: IDeleteProfileRelationshipTypeUseCase,
        @Inject(ProfileTokens.Usecase.GET_PROFILE_RELATIONSHIP_TYPE)
        private readonly _getProfileRelationshipTypeUseCase: IGetProfileRelationshipTypeUseCase,
        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILE_RELATIONSHIP_TYPES)
        private readonly _getListProfileRelationshipTypeUseCase: IGetListProfileRelationshipTypesUseCase,
    ) {}

    @Post({ uri: '/' })
    @Guard({ private: true })
    public async create(
        @Body() body: CreateProfileRelationshipTypeUseCaseInput,
        @Principal('sub') authId: string,
    ) {
        return this._createProfileRelationshipTypeUseCase.exec(body, {
            auth: {
                authId,
            },
        });
    }

    @Patch({ uri: '/:id' })
    @Guard({ private: true })
    public async update(@Param('id') id: string, @Body() body: any, @Principal('sub') authId: string) {
        return this._updateProfileRelationshipTypeUseCase.exec(
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
        return this._deleteProfileRelationshipTypeUseCase.exec(
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
        return this._getProfileRelationshipTypeUseCase.exec(id, {
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
        return this._getListProfileRelationshipTypeUseCase.exec(
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
