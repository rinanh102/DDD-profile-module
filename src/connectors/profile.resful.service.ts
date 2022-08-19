import { ModuleConnectorServiceMethodConfig, RestfulService } from '@cbidigital/aqua/module';
import qs from 'qs';
import { HttpUtil } from '@cbidigital/aqua';
import { IProfileConnectorService } from '.';
import {
    CreateProfileUseCaseInput,
    CreateProfileUseCaseContext,
    DeleteProfileUseCaseContext,
    DeleteProfileUseCaseInput,
    UpdateProfileUseCaseContext,
    UpdateProfileUseCaseInput,
} from '../features/profile/app/usecases/profile/command';
import { ProfileDto } from '../features/profile/domain/dtos';
import { ModuleConnectorConfig } from '../configs';
import {
    GetProfileByIdUseCaseContext,
    GetListProfilesUseCaseInput,
    GetListProfilesUseCaseContext,
    GetListProfilesUseCaseOutput,
} from '../features/profile/app/usecases/profile/query/types';

export class ProfileRestfulService extends RestfulService implements IProfileConnectorService {
    private readonly pathname;

    constructor() {
        super({
            host: ModuleConnectorConfig.restfulConfig.host,
            secretKey: ModuleConnectorConfig.restfulConfig.secretKey,
            moduleName: 'PROFILE',
        });
        this.pathname = ModuleConnectorConfig.restfulConfig.pathname;
    }
    async update(
        payload: { input: UpdateProfileUseCaseInput; context?: UpdateProfileUseCaseContext },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<ProfileDto> {
        const res = await this.callAPI(() =>
            HttpUtil.client.patch(
                this.buildUrl({
                    pathname: this.pathname.profile.update,
                    id: payload.input.id,
                }),
                payload.input,
                this.buildConfig(config),
            ),
        );
        return res.data['data'] as ProfileDto;
    }
    async updateByUserId(
        payload: { input: UpdateProfileUseCaseInput; context?: UpdateProfileUseCaseContext },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<ProfileDto> {
        const res = await this.callAPI(() =>
            HttpUtil.client.patch(
                this.buildUrl({
                    pathname: this.pathname.profile.updateByUserId,
                    id: payload.input.userId!,
                }),
                payload.input,
                this.buildConfig(config),
            ),
        );
        return res.data['data'] as ProfileDto;
    }
    async delete(
        payload: { input: DeleteProfileUseCaseInput; context?: DeleteProfileUseCaseContext },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<void> {
        const res = await this.callAPI(() =>
            HttpUtil.client.post(
                this.buildUrl({
                    pathname: this.pathname.profile.delete,
                    id: payload.input.id,
                }),
                // payload.input,
                this.buildConfig(config),
            ),
        );
        return res.data['data'];
    }
    async get(
        payload: { input: string; context?: GetProfileByIdUseCaseContext },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<ProfileDto> {
        const res = await this.callAPI(() =>
            HttpUtil.client.post(
                this.buildUrl({
                    pathname: this.pathname.profile.get,
                    query: qs.stringify(payload.input),
                }),
                // payload.input,
                this.buildConfig(config),
            ),
        );
        return res.data['data'] as ProfileDto;
    }
    async getList(
        payload: {
            input: GetListProfilesUseCaseInput;
            context?: GetListProfilesUseCaseContext | undefined;
        },
        config?: ModuleConnectorServiceMethodConfig | undefined,
    ): Promise<GetListProfilesUseCaseOutput> {
        const res = await this.callAPI(() =>
            HttpUtil.client.post(
                this.buildUrl({
                    pathname: this.pathname.profile.getList,
                    query: qs.stringify(payload.input),
                }),
                // payload.input,
                this.buildConfig(config),
            ),
        );
        return res.data['data'] as GetListProfilesUseCaseOutput;
    }
    async create(
        payload: { input: CreateProfileUseCaseInput; context?: CreateProfileUseCaseContext },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<ProfileDto> {
        const res = await this.callAPI(() =>
            HttpUtil.client.post(
                this.buildUrl({
                    pathname: this.pathname.profile.create,
                }),
                payload.input,
                this.buildConfig(config),
            ),
        );
        return res.data['data'] as ProfileDto;
    }

    static new() {
        return new ProfileRestfulService();
    }
}
