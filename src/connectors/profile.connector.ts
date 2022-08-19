import { ModuleConnector, ModuleConnectorServiceMethodConfig } from '@cbidigital/aqua/module';
import { Provider, Scope } from '@cbidigital/heron-common';
import { ProfileRestfulService } from '.';
import { ModuleConnectorConfig } from '../configs';
import { ProfileTokens } from '../constants';
import {
    CreateProfileUseCaseContext,
    CreateProfileUseCaseInput,
    CreateProfileUseCaseOutput,
    DeleteProfileUseCaseContext,
    DeleteProfileUseCaseInput,
    DeleteProfileUseCaseOutput,
    UpdateProfileUseCaseContext,
    UpdateProfileUseCaseInput,
    UpdateProfileUseCaseOutput,
} from '../features/profile/app/usecases/profile/command';
import {
    GetListProfilesUseCaseContext,
    GetListProfilesUseCaseInput,
    GetListProfilesUseCaseOutput,
    GetProfileByIdUseCaseContext,
    GetProfileByIdUseCaseInput,
    GetProfileByIdUseCaseOutput,
} from '../features/profile/app/usecases/profile/query/types';

export interface IProfileConnectorService {
    create(
        payload: {
            input: CreateProfileUseCaseInput;
            context?: CreateProfileUseCaseContext;
        },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<CreateProfileUseCaseOutput>;

    update(
        payload: {
            input: UpdateProfileUseCaseInput;
            context?: UpdateProfileUseCaseContext;
        },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<UpdateProfileUseCaseOutput>;

    updateByUserId(
        payload: {
            input: UpdateProfileUseCaseInput;
            context?: UpdateProfileUseCaseContext;
        },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<UpdateProfileUseCaseOutput>;

    delete(
        payload: {
            input: DeleteProfileUseCaseInput;
            context?: DeleteProfileUseCaseContext;
        },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<DeleteProfileUseCaseOutput>;

    get(
        payload: {
            input: GetProfileByIdUseCaseInput;
            context?: GetProfileByIdUseCaseContext;
        },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<GetProfileByIdUseCaseOutput>;

    getList(
        payload: {
            input: GetListProfilesUseCaseInput;
            context?: GetListProfilesUseCaseContext;
        },
        config?: ModuleConnectorServiceMethodConfig,
    ): Promise<GetListProfilesUseCaseOutput>;
}

@Provider({ token: ProfileTokens.ModuleConnector.PROFILE_MODULE_CONNECTOR, scope: Scope.SINGLETON })
export class ProfileConnector extends ModuleConnector<IProfileConnectorService> {
    constructor() {
        super({
            classRestfulService: ProfileRestfulService,
            moduleName: 'PROFILE',
            type: ModuleConnectorConfig.type,
        });
    }
}
