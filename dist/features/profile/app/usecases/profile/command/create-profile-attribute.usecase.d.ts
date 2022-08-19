import { CreateEavAttributeUseCase, IEavAttributeMapper } from '@cbidigital/aqua';
import { IProfileRepo } from '../../../../domain/repos';
export declare class CreateProfileAttributeUseCase extends CreateEavAttributeUseCase {
    constructor(_repo: IProfileRepo, _mapper: IEavAttributeMapper);
}
