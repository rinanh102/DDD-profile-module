import { ModuleConnectorServiceMethodConfig, RestfulService } from '@cbidigital/aqua/module';
import { IProfileConnectorService } from '.';
import { CreateProfileUseCaseInput, CreateProfileUseCaseContext, DeleteProfileUseCaseContext, DeleteProfileUseCaseInput, UpdateProfileUseCaseContext, UpdateProfileUseCaseInput } from '../features/profile/app/usecases/profile/command';
import { ProfileDto } from '../features/profile/domain/dtos';
import { GetProfileByIdUseCaseContext, GetListProfilesUseCaseInput, GetListProfilesUseCaseContext, GetListProfilesUseCaseOutput } from '../features/profile/app/usecases/profile/query/types';
export declare class ProfileRestfulService extends RestfulService implements IProfileConnectorService {
    private readonly pathname;
    constructor();
    update(payload: {
        input: UpdateProfileUseCaseInput;
        context?: UpdateProfileUseCaseContext;
    }, config?: ModuleConnectorServiceMethodConfig): Promise<ProfileDto>;
    updateByUserId(payload: {
        input: UpdateProfileUseCaseInput;
        context?: UpdateProfileUseCaseContext;
    }, config?: ModuleConnectorServiceMethodConfig): Promise<ProfileDto>;
    delete(payload: {
        input: DeleteProfileUseCaseInput;
        context?: DeleteProfileUseCaseContext;
    }, config?: ModuleConnectorServiceMethodConfig): Promise<void>;
    get(payload: {
        input: string;
        context?: GetProfileByIdUseCaseContext;
    }, config?: ModuleConnectorServiceMethodConfig): Promise<ProfileDto>;
    getList(payload: {
        input: GetListProfilesUseCaseInput;
        context?: GetListProfilesUseCaseContext | undefined;
    }, config?: ModuleConnectorServiceMethodConfig | undefined): Promise<GetListProfilesUseCaseOutput>;
    create(payload: {
        input: CreateProfileUseCaseInput;
        context?: CreateProfileUseCaseContext;
    }, config?: ModuleConnectorServiceMethodConfig): Promise<ProfileDto>;
    static new(): ProfileRestfulService;
}
