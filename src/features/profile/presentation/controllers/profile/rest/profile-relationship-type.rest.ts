import { SortInput } from '@cbidigital/aqua/database/query-util';
import { CacheLookup, CacheStore, Get, Guard, Inject, Param, Principal, Query, Rest } from '@heronjs/common';
import { ProfileTokens } from '../../../../../../constants';
import {
    IGetListProfileRelationshipTypesUseCase,
    IGetProfileRelationshipTypeUseCase,
} from '../../../../app/usecases/profile-relationship-type/query';

@Rest('/profile-relationship-types')
export class ProfileRelationshipTypeRest {
    constructor(
        @CacheLookup() readonly cacheStore: CacheStore,
        @Inject(ProfileTokens.Usecase.GET_PROFILE_RELATIONSHIP_TYPE)
        private readonly _getProfileRelationshipTypeUseCase: IGetProfileRelationshipTypeUseCase,
        @Inject(ProfileTokens.Usecase.GET_LIST_PROFILE_RELATIONSHIP_TYPES)
        private readonly _getListProfileRelationshipTypeUseCase: IGetListProfileRelationshipTypesUseCase,
    ) {}

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
