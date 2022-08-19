import { SortInput } from '@cbidigital/aqua/database/query-util';
import {
    Body,
    CacheLookup,
    CacheStore,
    Delete,
    Get,
    Inject,
    Param,
    Patch,
    Post,
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

@Rest('/internal/profiles')
export class ProfileInternalRest {
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
    ) {}

    @Post({ uri: '/' })
    public async create(@Body() body: CreateProfileUseCaseInput) {
        return this._createProfileUseCase.exec(body);
    }

    @Patch({ uri: '/:id' })
    public async update(@Param('id') id: string, @Body() body: any) {
        return this._updateProfileUseCase.exec({
            ...body,
            id,
        });
    }

    @Patch({ uri: '/by-user-id/:userId' })
    public async updateByUserId(@Param('userId') userId: string, @Body() body: any) {
        return this._updateProfileUseCase.exec({
            ...body,
            userId,
            id: undefined,
        });
    }

    @Delete({ uri: '/:id', code: StatusCodes.NO_CONTENT })
    public async delete(@Param('id') id: string) {
        return this._deleteProfileUseCase.exec({ id });
    }

    @Get({ uri: '/:id' })
    public async getProfileById(@Param('id') id: string) {
        return this._getProfileUseCase.exec(id);
    }

    @Get({ uri: '/' })
    public async findAll(
        @Query('filter') filter: object,
        @Query('offset') offset: number,
        @Query('limit') limit: number,
        @Query('sort') sort: SortInput,
    ) {
        return this._getListProfileUseCase.exec({
            offset,
            limit,
            sort,
            filter,
        });
    }
}
