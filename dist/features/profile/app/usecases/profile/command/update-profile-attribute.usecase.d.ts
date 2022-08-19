import { UpdateEavAttributeUseCase, IEavAttributeMapper } from '@cbidigital/aqua';
import { IProfileRepo } from '../../../../domain/repos';
export declare class UpdateProfileAttributeUseCase extends UpdateEavAttributeUseCase {
    constructor(_repo: IProfileRepo, _mapper: IEavAttributeMapper);
}
