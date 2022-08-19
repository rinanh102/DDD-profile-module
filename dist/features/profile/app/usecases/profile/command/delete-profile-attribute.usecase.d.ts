import { DeleteEavAttributeUseCase, IEavAttributeMapper } from '@cbidigital/aqua';
import { IProfileRepo } from '../../../../domain/repos';
export declare class DeleteProfileAttributeUseCase extends DeleteEavAttributeUseCase {
    constructor(_repo: IProfileRepo, _mapper: IEavAttributeMapper);
}
